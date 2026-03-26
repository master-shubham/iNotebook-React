//Create the user for login and access own notes
// const { type } = require('@testing-library/user-event/dist/type'); // React testing perpose
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
        name:{
            type: String,
            require:true
        },
        email:{
            type:String,
            require: true,
            unique: true
        },
        password:{
            type:String,
            require: true
        },
        date:{
            type:Date,
            default: Date.now
        }
});
const User =  mongoose.model('user',UserSchema);
module.exports = User;