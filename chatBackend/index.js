const express = require("express");
// require('dotenv').config();
const config = require("./config/app");

const router = require("./router");
const bodyParser = require("body-parser");
const app = express();

const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);
const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`server listening for port number : ${port}`);
});
