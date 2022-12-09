const { Schema, model } = require('mongoose').default;

const schema = new Schema({
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  category: {
    general: {
      type: String,
      require: true,
    },
    subcategory: {
      type: String,
      require: true,
    },
    extra: {
      type: String,
    },
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  discount: {
    type: String,
  },
});

module.exports = model('Product', schema);
