var express = require('express');
var router = express.Router();

let urls = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'URL List', urls: urls});
});

module.exports = router;
