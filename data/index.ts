import { link } from "fs";

export const projects = [
  {
    id: 1,
    title: "CNN Image Classification on CIFAR-10",
    des: "This project implements and compares various methods for classifying images from the CIFAR-10 dataset. The primary objective was to develop a Deep Convolutional Neural Network capable of outperforming classical machine learning classification algorithms.",
    iconLists: [
      { src: "/jupyter.svg", name: "Jupyter Notebook" },
      { src: "/python.svg", name: "Python" },
      { src: "/pytorch.svg", name: "PyTorch" },
    ],
    link: "https://github.com/NikKliaf/CNN-CIFAR-10",
  },
  {
    id: 2,
    title: "R*Tree Spatial Index Implementation in Java",
    des: "This project is a Java implementation of the R*Tree Index for Spatial Data. Organize OpenStreetMap (OSM) data into blocks, stored inside a datafile. Indexed data into an R*-tree structure, with Range, k-NearestNeighbors and Skyline queries. Includes a Technical Essay...",
    iconLists: [
      { src: "/java.svg", name: "Java" },
    ],
    link: "https://github.com/NikKliaf/r-tree-java-implementation",
  },
  {
    id: 3,
    title: "Movie Management application",
    des: "Java Swing application where users can login and view movies and series, as well as review them",
    iconLists: [
      { src: "/java.svg", name: "Java" },
    ],
    link: "https://github.com/NikKliaf/MyTVProject",
  },
  {
    id: 4,
    title: "Car Management Android App",
    des: "Developed an Android application in Android Studio for managing car maintenance and expenses.",
    iconLists: [
      { src: "/java.svg", name: "Java" },
      { src: "/androidstudio.svg", name: "Android Studio" },
      { src: "/sql.svg", name: "SQL" },
    ],
    link: "https://github.com/NikKliaf/android-app-dev",
  },
  {
    id: 5,
    title: "Dealership DBMS",
    des: "Developed an Android application in Android Studio for managing car maintenance and expenses.",
    iconLists: [
      { src: "/sqlite.svg", name: "SQLite" },
      { src: "/sql.svg", name: "SQL" },
    ],
    link: "https://github.com/NikKliaf/Dealership-Database-System",
  },
  {
    id: 6,
    title: "Java Reply Request Programming app",
    des: "Used Java Sockets to create a client-server application that handles reply-request communication over TCP/IP.",
    iconLists: [
      { src: "/java.svg", name: "Java" },
    ],
    link: "https://github.com/NikKliaf/Reply-Request-Socket-Programming-App",
  },
];

export const skills = [{
    id: 1,
    name: "Python",
    icon: "/python.svg",
    link: "https://www.python.org/"
  },
  {
    id: 2,
    name: "Java",
    icon: "/java.svg",  
    link: "https://www.java.com/en/"
  },
  {
    id: 3,
    name: "C",
    icon: "/c-language.svg",
    https: "https://en.cppreference.com/w/c.html"
  },
  {
    id: 4,
    name: "C++",
    icon: "/cplusplus.svg",
    https: "https://isocpp.org/"
  },
  {
    id: 5,
    name: "Linux",
    icon: "/linux.svg",
    link: "https://www.linux.org/"
  },
  {
    id: 6,
    name: "Git",
    icon: "/git.svg",
    link: "https://git-scm.com/"
  },
  { 
    id: 7,
    name: "GitHub",
    icon: "/github.svg",
    link: "https://www.github.com"
  },
  {
    id: 8,
    name: "SQLite",
    icon: "/sqlite.svg",
    link: "https://www.sqlite.org/index.html"
  },
  {
    id: 9,
    name: "PyTorch",
    icon: "/pytorch.svg",
    link: "https://pytorch.org/"
  },
  {
    id: 10,
    name: "Jupyter Notebook",
    icon: "/jupyter.svg",
    link: "https://jupyter.org/"
  },
  
  {
    id: 11,
    name: "JavaScript",
    icon: "/javascript.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    id: 12,
    name: "Next.js",
    icon: "/nextjs.svg",
    link: "https://nextjs.org/"
  }, 
  {
    id: 13,
    name: "HTML5",
    icon: "/html5.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    id: 14,
    name: "Taiwind CSS",
    icon: "/tailwindcss.svg",
    link: "https://tailwindcss.com/"
  },
];

export const socials = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nikiforos-kliafas-97261a30a/",
    icon: "/linkedin.svg",
  },
  {
    id: 2,
    name: "GitHub",
    link: "https://www.github.com/NikKliaf",
    icon: "/github.svg",
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:nik.kliaf1@gmail.com",
    icon: "/gmail.svg",
  },
  {
    id: 4,
    name: "Discord",
    link: "https://www.discord.com/users/307161770902945793",
    icon: "/discord.svg",
  }
];