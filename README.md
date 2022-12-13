Example from http://thecodebarbarian.com/github-oauth-login-with-node-js.html

To run this example on repl.it, you will need to setup `CLIENT_ID` and `CLIENT_SECRET` as secrets and reference them as environment variables in your code:
```
console.log(process.env.CLIENT_ID);
console.log(process.env.CLIENT_SECRET);
```

In your github OAuth App, set "Home URL" to this app's URL `https://githuboauthexample.lubaochuan.repl.co` and "Authorization callback URL
" to `https://githuboauthexample.lubaochuan.repl.co/oauth-callback`.

