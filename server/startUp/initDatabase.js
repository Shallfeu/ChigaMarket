const Product = require('../models/Product');
const productsMock = require('../mock/products.json');

module.exports = async () => {
  const products = await Product.find();
  if (products.length !== productsMock.length) {
    await createInitialEntity(Product, productsMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
      data.map(async (item) => {
        try {
          delete item._id
          const newItem = new Model(item)
          await newItem.save()
          return newItem
        } catch (e) {
          return e
        }
      })
  )
}
