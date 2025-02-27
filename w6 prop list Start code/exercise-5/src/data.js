/**
 * Your data here
 *
 * @format
 */
import Cat from "./assets/Cat.jpg";
import snow from "./assets/36c43a87-a1a8-497a-bb45-cc3ceb43fda6.jpg";
import kitchen from "./assets/95b2eb0e-02c4-4fb9-b6a8-9a1c410ce64a.jpg";
import doggie from "./assets/Doggie corgi (1).jpg";
export const AVAILABLE_ARTS = [
  {
    title: "Cat",
    desciption: "A cat enjoy its nap",
    image: {
      src: Cat,
      alt: "sleeping cat",
    },
  },
  {
    title: "snow",
    desciption: "a snowy evening",
    image: {
      src: snow,
      alt: "snowwing outside",
    },
  },
  {
    title: "Dinning",
    desciption: "A table full of feast",
    image: {
      src: kitchen,
      alt: "snacks",
    },
  },
  {
    title: "Pups",
    desciption: "A relaxing afternoon",
    image: {
      src: doggie,
      alt: "tired summer",
    },
  },
];
