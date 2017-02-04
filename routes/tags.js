const express = require('express');
const router = express.Router();
const low = require('lowdb');

router.get('/', function(req, res) {
  res.send('tags homepage');
});

module.exports = router;
