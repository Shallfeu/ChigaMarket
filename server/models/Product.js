const { Schema, model } = require('mongoose').default

const schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    }
})

module.exports = model('Product', schema)