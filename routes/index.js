var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jane', function(req, res, next) {
  res.json({success: 'yay'})
});

module.exports = router;
