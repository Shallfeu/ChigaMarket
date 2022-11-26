const categories = [
  { id: "1", cateImg: "./images/category/cat1.png", cateName: "Fashion" },
  { id: "2", cateImg: "./images/category/cat2.png", cateName: "Electronic" },
  { id: "3", cateImg: "./images/category/cat3.png", cateName: "Cars" },
  { id: "4", cateImg: "./images/category/cat4.png", cateName: "Home & Garden" },
  { id: "5", cateImg: "./images/category/cat5.png", cateName: "Gifts" },
  { id: "6", cateImg: "./images/category/cat6.png", cateName: "Music" },
  {
    id: "7",
    cateImg: "./images/category/cat7.png",
    cateName: "Health & Beauty",
  },
  { id: "8", cateImg: "./images/category/cat8.png", cateName: "Pets" },
  { id: "9", cateImg: "./images/category/cat9.png", cateName: "Baby Toys" },
  { id: "10", cateImg: "./images/category/cat10.png", cateName: "Groceries" },
  { id: "11", cateImg: "./images/category/cat11.png", cateName: "Books" },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(categories);
    }, 200);
  });

const fetchCategoryById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(categories.filter((c) => c.id === id));
    }, 200);
  });

export default {
  fetchAll,
  fetchCategoryById,
};
