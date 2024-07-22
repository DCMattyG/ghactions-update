var express = require('express');
const packageJson = require('../package.json');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', version: packageJson.version });
});

module.exports = router;

/* Comment */
