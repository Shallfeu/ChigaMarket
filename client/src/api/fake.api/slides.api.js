const slides = [
  {
    id: "1",
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-1.png",
  },
  {
    id: "2",
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-2.png",
  },
  {
    id: "3",
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-3.png",
  },
  {
    id: "4",
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: "./images/SlideCard/slide-4.png",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(slides);
    }, 200);
  });

const fetchSlideById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(slides.filter((c) => c.id === id));
    }, 200);
  });

export default {
  fetchAll,
  fetchSlideById,
};
