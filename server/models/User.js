const {Schema, model} = require('mongoose').default

const schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    image: {
        type: String,
    },
    avatar: {
        type: String,
    },
    sex: {
        type: String,
        enum:['male', 'female']
    },
    adresses: [{
        type: String,
    }],
}, {
    timestamps: true
})

module.exports = model('User', schema)