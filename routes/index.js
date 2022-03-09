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
router.get('/list', function(req,res,next){
  let users = [
    {
      _id:1,
      name:"bidhata 123",
      rate:"20",
      address:"pokhara, lakeside 123",
      contact:"9860123456",
      isCertified: true, // false means local guide
      languages:["english","german"],
      reviews:["wow", "bad","wow", "bad"],
      description:"I love travelling and food and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla "
    },
    {
      _id:1,
      name:"binita 123",
      rate:"30",
      address:"pokhara, khapaudi 123",
      contact:"9860123456",
      isCertified: true, // false means local guide
      languages:["english"],
      reviews:["wow", "bad","wow", "bad","wow", "bad"],

      description:"I love travelling and food and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla "
    },
    {
      _id:1,
      name:"dikshya 123",
      rate:"10",
      address:"pokhara, jarewar 123",
      contact:"9860123456",
      isCertified: false, // false means local guide
      languages:["english","german"],
      reviews:["wow", "bad"],
      description:"I love travelling and food and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla and bla "
    },
  ]
  res.render('list', {users:users});
})

module.exports = router;
