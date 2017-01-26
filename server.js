/**
 * server.js
 *
 * @author Cheston Lee (chestonlloyd@gmail.com)
 */

 const express = require('express');
 const bodyParser = require('body-parser');
 const low = require('lowdb');
 const db = low('./data/db.json');

 const app = express();

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Tagging API server running on port:' + port);
});
