var express = require('express');
var router = express.Router();
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
    _id:2,
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
    _id:3,
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
/* GET users listing. */
router.get('/', function(req,res,next){
 
  res.render('users', {users:users});
})

router.get("/:id", function(req,res,next){
  res.render("single-user", {user:users.find(u=>u._id==req.params.id)})
})
module.exports = router;
