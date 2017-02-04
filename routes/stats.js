const express = require('express');
const router = express.Router();

const low = require('lowdb');
const db = low('./data/db.json');

router.get('/', function(req, res) {
  const allTags = db.get('tags').value();
  res.send(allTags);
});

router.get('/:entity_type/:entity_id', function(req, res) {
  const type = req.params.entity_type;
  const id = req.params.entity_id;
  const tag = db.get('tags', );
});

module.exports = router;
