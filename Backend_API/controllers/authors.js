const Author = require("../models/authors");
const {validationResult } = require("express-validator");
const auth = require("../middlewares/auth")

exports.createAuthors = async function (req,res,next) {
    const errors  = validationResult(req)
    if(errors.isEmpty()){
        let{first_name,last_name,dob,dod} = req.body;
        let authorOb = new Author({first_name,last_name,dob,dod})
        let result = await authorOb.save();
        res.json(result);
    } else {
        res.send(errors);
    }
}

exports.index = async function (req,res,next) {
    let results = await Author.find();
    res.json(results);
}

exports.deleteAuthor = async function (req,res,next) {
    let idDelete = req.params.id;
    let result = await Author.findByIdAndDelete(idDelete);
    res.json(result);
}

exports.editAuthor = async function(req,res,next){
    let{first_name,last_name,dob,dod} = req.body;
    // let authorOb = new Author({first_name});
    let result = await Author.findByIdAndUpdate(req.params.id,{first_name,last_name,dob,dod});
    res.json(result);
}

exports.getAuthors = [
    auth,
    async function(req,res,next){
        let results = await Author.find();
        res.json(results);
    },
];