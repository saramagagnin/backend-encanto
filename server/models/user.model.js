const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        unique: true,
        type: Number
    },
    user: String, // String is shorthand for {type: String}
    active: Boolean,
});

const User = mongoose.model('User', userSchema);

module.exports = User;