const { Schema, model } = require('mongoose').default;

const schema = new Schema(
  {
    products: [
      {
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
      },
    ],
    userName: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    address: { type: String, required: true },
    totalCost: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at' },
  },
);

module.exports = model('Order', schema);
