const topCat = [
  {
    image: "./images/top/category-1.png",
    name: "headphone",
    desc: "3k orders this week",
  },
  {
    image: "./images/top/category-2.png",
    name: "watch",
    desc: "4k orders this week",
  },
  {
    image: "./images/top/category-3.png",
    name: "sunglass",
    desc: "6k orders this week",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(topCat);
    }, 200);
  });

export default {
  fetchAll,
};
