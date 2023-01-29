const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        todos:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Todo'
        }]
    },
    { collection: 'user-data'}
);

module.exports = mongoose.model('User', UserSchema);