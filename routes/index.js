var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('home');
});
router.get('/single-post', function(req, res, next) {
  res.render('single-post');
});


module.exports = router;
