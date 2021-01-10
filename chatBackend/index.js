const express = require("express");
// require('dotenv').config();
const config = require('./config/app')
const app = express();
const port = process.env.APP_PORT;
app.get("/home", (req, res) => {
  return res.send("Home Screen");
});

app.get("/login", (req, res) => {
  return res.send("Login UI");
});

app.listen(port, () => {
  console.log(`server listening for port number : ${port}`);
});
