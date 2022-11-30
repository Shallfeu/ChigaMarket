const shopCategories = [
  {
    cateImg: "./images/brands/apple.svg",
    cateName: "Apple",
  },
  {
    cateImg: "./images/brands/samsung.svg",
    cateName: "Samsung",
  },
  {
    cateImg: "./images/brands/nokia.svg",
    cateName: "Nokia",
  },
  {
    cateImg: "./images/brands/vivo.svg",
    cateName: "Vivo",
  },
  {
    cateImg: "./images/brands/xi.svg",
    cateName: "Redmi",
  },
  {
    cateImg: "./images/brands/sony.svg",
    cateName: "Sony",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(shopCategories);
    }, 200);
  });

export default {
  fetchAll,
};
