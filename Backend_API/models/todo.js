const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 100 },
    status: { type: String, required: true, enum: ['complete', 'incomplete'] },
    description : {type: String, required:true}
}, { timestamps: true }); 

module.exports = mongoose.model('Todo', TodoSchema);
