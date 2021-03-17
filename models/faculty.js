const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const facSchema= new Schema({
    name: {
        type: String,
        required: true,
    },
    course:{
        type: String,
        required: true,
    }
}, {timestamps: true});

const Faculty= mongoose.model('Faculty', facSchema);
module.exports = Faculty;