const productItems = [
  {
    id: "1",
    discount: 50,
    cover: "./images/flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: "2",
    discount: 40,
    cover: "./images/flash/flash-2.png",
    name: "Watch",
    price: 20,
  },
  {
    id: "3",
    discount: 40,
    cover: "./images/flash/flash-3.png",
    name: "Smart Mobile Black",
    price: 200,
  },
  {
    id: "4",
    discount: 40,
    cover: "./images/flash/flash-4.png",
    name: "Smart Watch Black",
    price: 50,
  },
  {
    id: "5",
    discount: 50,
    cover: "./images/flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: "6",
    discount: 50,
    cover: "./images/flash/flash-3.png",
    name: "Shoes",
    price: 100,
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(productItems);
    }, 200);
  });

const fetchProductById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(productItems.filter((c) => c.id === id));
    }, 200);
  });

export default {
  fetchAll,
  fetchProductById,
};
