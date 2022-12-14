const { Schema, model } = require('mongoose').default;

const schema = new Schema({
  subcategories: [
    {
      category: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = model('Category', schema);
