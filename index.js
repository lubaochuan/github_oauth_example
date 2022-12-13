const express = require('express');

const app = express();

const clientId = 'OMITTED';
const clientSecret = 'OMITTED';

app.get('/', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`);
});

app.listen(3000);
console.log('App listening on port 3000');