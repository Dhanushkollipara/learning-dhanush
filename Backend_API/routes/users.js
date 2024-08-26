var express = require('express');
var router = express.Router();
const User = require("../models/users")
const bcrypt = require("bcrypt")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/",async function(req,res){
  let user = await User.findOne({
    email:req.body.email
  })
  if(user){
    return res.status(400).json({
      msg:"User already Exist"
    })
  }
  const salt = await bcrypt.genSalt(10);
  let encryptedpassword = await bcrypt.hash(req.body.password,salt);
  var userOb = new User({
    username:req.body.username,
    email:req.body.email,
    password: encryptedpassword,
    isValid:req.body.isValid,
  })
  console.log(userOb);
  const result = await userOb.save();
  res.json({status:1,data:result});
})

module.exports = router;
