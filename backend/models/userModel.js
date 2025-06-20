const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-beautiful-unique-validation');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    }
}, {timestamps: true})

userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);
module.exports = User;