var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/product/:Id/:name', function(req, res, next) {
    let Id = req.params.Id;
    let name = req.params.name;
    res.send({Id : Id, name:name});
});
router.post("/product/",function(req,res,next){
    const{name,price} = req.body;
    res.json({name,price});
});
  module.exports = router;
