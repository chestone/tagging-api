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
 const tag = require('./routes/tag');
 const tags = require('./routes/tags');
 const stats = require('./routes/stats');

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

// Setup modular routes
 app.use('/tag', tag);
 app.use('/tags', tags);
 app.use('/stats', stats);

 app.get('/', function(req, res) {
   res.send('You are hearing me talk!');
 });

const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('Tagging API server running on port:' + port);
});
