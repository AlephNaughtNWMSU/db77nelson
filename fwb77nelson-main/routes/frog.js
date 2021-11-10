var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('frog', { title: 'Search Results Frog' });
});

module.exports = router;
