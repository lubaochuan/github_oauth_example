const express = require('express');

const app = express();
const axios = require('axios');
let token = null;

app.get('/', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`);
});

app.get('/oauth-callback', (req, res) => {
  const body = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code: req.query.code
  };
  const opts = { headers: { accept: 'application/json' } };
  axios.post(`https://github.com/login/oauth/access_token`, body, opts).
    then(res => res.data['access_token']).
    then(_token => {
      token = _token;
      console.log('My token:', token);
      res.json({ ok: 1 });
    }).
    catch(err => res.status(500).json({ message: err.message }));
});

app.get('/list', (req, res) => {
  const config = {
    headers: {Authorization: `Bearer ${token}`}
  };
  axios.get('https://api.github.com/user/repos', config).then((responses) => {
    const repos = responses.data.map(
      ({name, language, html_url, created_at, description}) => {
        return {name, language, html_url, created_at, description};
      });
    console.log("repos: ", repos);
  }).catch(error => {
    console.log(`getrepos error: ${error}`)
  });
});

app.listen(3000);
console.log('App listening on port 3000');