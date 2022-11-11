const { Timestamp } = require('mongodb');
const mongoose =require('mongoose');


const userSchema = mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    verified : {
        type : Boolean,
        default:false
    }
},{
    timestamp:true
});

const user = mongoose.model('user' , userSchema);

module.exports = user; 