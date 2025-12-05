import { link } from "fs";

export const projects = [
  {
    id: 1,
    title: "CNN Image Classification on CIFAR-10",
    des: "This project implements and compares various methods for classifying images from the CIFAR-10 dataset. The primary objective was to develop a Deep Convolutional Neural Network capable of outperforming classical machine learning classification algorithms.",
    iconLists: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg", name: "Jupyter Notebook" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: "Python" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", name: "PyTorch" },
    ],
    link: "https://github.com/NikKliaf/CNN-CIFAR-10",
  },
  {
    id: 2,
    title: "R*Tree Spatial Index Implementation in Java",
    des: "This project is a Java implementation of the R*Tree Index for Spatial Data. Organize OpenStreetMap (OSM) data into blocks, stored inside a datafile. Indexed data into an R*-tree structure, with Range, k-NearestNeighbors and Skyline queries. Includes a Technical Essay...",
    iconLists: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg", name: "Java" },
    ],
    link: "https://github.com/NikKliaf/r-tree-java-implementation",
  },
  {
    id: 3,
    title: "Movie Management application",
    des: "Java Swing application where users can login and view movies and series, as well as review them",
    iconLists: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg", name: "Java" },
    ],
    link: "https://github.com/NikKliaf/MyTVProject",
  },
  {
    id: 4,
    title: "Car Management Android App",
    des: "Developed an Android application in Android Studio for managing car maintenance and expenses.",
    iconLists: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg", name: "Java" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", name: "SQL" },
    ],
    link: "https://github.com/NikKliaf/android-app-dev",
  },
  {
    id: 5,
    title: "Dealership DBMS",
    des: "Developed an Android application in Android Studio for managing car maintenance and expenses.",
    iconLists: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", name: "SQLite" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", name: "SQL" },
    ],
    link: "https://github.com/NikKliaf/Dealership-Database-System",
  },
  {
    id: 6,
    title: "Java Reply Request Programming app",
    des: "Used Java Sockets to create a client-server application that handles reply-request communication over TCP/IP.",
    iconLists: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg", name: "Java" },
    ],
    link: "https://github.com/NikKliaf/Reply-Request-Socket-Programming-App",
  },
];

export const skills = [{
    id: 1,
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    link: "https://www.python.org/"
  },
  {
    id: 2,
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg",  
    link: "https://www.java.com/en/"
  },
  {
    id: 3,
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    https: "https://en.cppreference.com/w/c"
  },
  {
    id: 4,
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    https: "//isocpp.org/"
  },
  {
    id: 5,
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    link: "https://www.linux.org/"
  },
  {
    id: 6,
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    link: "https://git-scm.com/"
  },
  { 
    id: 7,
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    link: "github.com"
  },
  {
    id: 8,
    name: "SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    link: "https://www.sqlite.org/index.html"
  },
  {
    id: 9,
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    link: "https://pytorch.org/"
  },
  {
    id: 10,
    name: "Jupyter Notebook",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
    link: "https://jupyter.org/"
  },
  
  {
    id: 11,
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    id: 12,
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    link: "https://nextjs.org/"
  }, 
  {
    id: 13,
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    id: 14,
    name: "Taiwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    link: "https://tailwindcss.com/"
  },
]