const shopItems = [
  {
    id: 7,
    cover:
      "https://avatars.mds.yandex.net/get-mpic/4397006/img_id3884474343356692179.jpeg/orig",
    name: "iphone 11",
    price: "180",
    discount: "25",
    brand: "apple",
  },
  {
    id: 8,
    cover: "https://img.mvideo.ru/Pdb/30047894b.jpg",
    name: "Samsung A51",
    price: "120",
    discount: "10",
    brand: "samsung",
  },
  {
    id: 9,
    cover: "./images/shops/shops-3.png",
    name: "Nokia",
    price: "20",
    discount: "50 ",
    brand: "nokia",
  },
  {
    id: 10,
    cover: "./images/shops/shops-4.png",
    name: "Vivo",
    price: "999",
    discount: "10 ",
    brand: "vivo",
  },
  {
    id: 11,
    cover: "./images/shops/shops-5.png",
    name: "Redmi",
    price: "80",
    discount: "20 ",
    brand: "redmi",
  },
  {
    id: 12,
    cover: "./images/shops/shops-7.png",
    name: "Sony",
    price: "400",
    discount: "20 ",
    brand: "sony",
  },
  {
    id: 13,
    cover: "./images/shops/shops-8.png",
    name: "Sony",
    price: "60",
    discount: "5 ",
    brand: "sony",
  },
  {
    id: 14,
    cover: "./images/shops/shops-9.png",
    name: "Iphone",
    price: "120",
    discount: "10",
    brand: "apple",
  },
  {
    id: 15,
    cover: "./images/shops/shops-10.png",
    name: "samsung",
    price: "5",
    discount: "2",
    brand: "samsung",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(shopItems);
    }, 200);
  });

export default {
  fetchAll,
};
