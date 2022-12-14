const { model, Schema } = require('mongoose').default

const schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    accessLink: {type:String},
    size: {type: Number, default: 0},
    path: {type: String, default: ''},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    parent: {type: Schema.Types.ObjectId, ref: 'File'},
    childs: [{type: Schema.Types.ObjectId, ref: 'File'}],
})

module.exports = model("File", schema)