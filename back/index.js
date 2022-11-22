const express = require('express');
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require('./database/db');

connectToDb();
const app = express();
const port = 3000;

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);
//app.set("view engine", "ejs");
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())
app.use(routes)



app.listen(port, () => {
  console.log(`Servidor Iniciado em http://localhost:${port}`);
});