const User = require("../models/users")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const auth = require("../middlewares/auth")

exports.createuser = async function(req,res){
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
  }

  exports.index = function(req, res, next) {
    res.send('respond with a resource');
  }

  exports.getUserss = [
    auth,
    async function(req,res,next){
        let results = await User.find();
        res.json(results);
    },
];

  exports.login = async function (req,res) {
    const {email,password} = req.body;
    let user = await User.findOne({
      email:req.body.email,
    })
    if(!user)
      return res.status(400).json({
    message: "User not Exist"})

    const passCorrect = await bcrypt.compare(password,user.password);
    if(!passCorrect)
      return res.status(400).json({
    message: "Password Incorrect!"})


    const payload = {
      user:{
        id:user.id,
        email: email
      },
    };

    jwt.sign(
      payload,
      "ascendion_secret",
      {
        expiresIn:1200,
      },
      (err,token) => {
        res.status(200).json({
          token,
        });
      },
    );
  }