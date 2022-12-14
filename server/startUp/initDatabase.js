const Product = require('../models/Product');
const Category = require('../models/Category');

const productsMock = require('../mock/products.json');
const categoriesMock = require('../mock/categories.json');

module.exports = async () => {
  const products = await Product.find();
  if (products.length < productsMock.length - 10) {
    await createInitialEntity(Product, productsMock);
  }

  const categories = await Category.find();
  if (categories.length < categoriesMock.length - 5) {
    await createInitialEntity(Category, categoriesMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    }),
  );
}
