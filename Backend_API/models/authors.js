var mongoose = require("mongoose");
var AuthorSchema = new mongoose.Schema({
    first_name : {type:String, requried:true,maxLength:100},
    last_name : {type:String, requried:true,maxLength:100},
    dob : {type:Date},
    dod : {type:Date},
})
module.exports = mongoose.model("Authors",AuthorSchema);