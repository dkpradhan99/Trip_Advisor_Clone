const hotels = [
  {
    Title: "Ginger Goa Panjim",
    Images: {
      one: "https://r1imghtlak.mmtcdn.com/bd735e8cff9011e8a6110242ac110003.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,24&output-format=jpg",
      two: "https://r1imghtlak.mmtcdn.com/1c32b6bcf87e11e886bd0242ac110003.jpg?downsize=377:200&crop=377:200",
    },
    Rooms: 19,
    Price: 3700,
    Ac: "Available",
    Rating: 3.8,
  },
  {
    Title: "ITC Grand Goa - A Luxury Collection Resort",
    Images: {
      one: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201810091116205895-2f76a754ca5e11e899df0a5d19c43e10.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r1imghtlak.mmtcdn.com/4c125584ca5e11e8b8f202fc98a94198.jpg?&output-quality=75&downsize=910:612&crop=910:612;55,0&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 50,
    Price: 1200,
    Ac:  "Not-Available",
    Rating: 4.5,
  },
  {
    Title: "Caravela Beach Resort",
    Images: {
      one: "https://r1imghtlak.mmtcdn.com/57bc01342e1f11ea930d0242ac110004.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,59&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200703241029455940-eaf52cbad56c11e59139001ec9b85d13.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,34&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 19,
    Price: 2800,
    Ac:"Available",
    Rating: 4,
  },
  {
    Title: "The Avenue,Calangute",
    Images: {
      one: "https://r1imghtlak.mmtcdn.com/071f7230bc0911e884a00aceac5c031a.jpg?&output-quality=75&downsize=910:612&crop=910:612;157,0&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r1imghtlak.mmtcdn.com/34b237ce71c711e780a80a4cef95d023.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 19,
    Price: 1600,
    Ac: "Not-Available",
    Rating: 4.3,
  },
  {
    Title: "Phoenix Park Inn by Radisson",
    Images: {
      one: "https://r1imghtlak.mmtcdn.com/084be002670e11e492025ee5da2daa2a.jfif?&output-quality=75&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r1imghtlak.mmtcdn.com/0105bc28780e11e78bf8025f77df004f.jpg?&output-quality=75&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 19,
    Price: 1800,
    Ac: "Not-Available",
    Rating: 4,
  },
  {
    Title: "ITC Grand Goa - A Luxury Collection Resort",
    Images: {
      one: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201810091116205895-109499d6ca5e11e8a0180281517d0dd4.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r1imghtlak.mmtcdn.com/4c125584ca5e11e8b8f202fc98a94198.jpg?&output-quality=75&downsize=910:612&crop=910:612;55,0&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 19,
    Price: 1200,
    Ac:  "Not-Available",
    Rating: 4.5,
  },
  {
    Title: "SinQ Beach Resort",
    Images: {
      one: "https://r1imghtlak.mmtcdn.com/10f8eab475b711e7a8fd0a209fbd0127.jpg?&output-quality=75&downsize=910:612&crop=910:612;141,0&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r1imghtlak.mmtcdn.com/d93dcb7ce4a911e3879abaaf629e9523.jpeg?&output-quality=75&downsize=910:612&crop=910:612;59,0&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 19,
    Price: 1500,
    Ac: "Available",
    Rating: 4.1,
  },
  {
    Title: "SinQ Prive",
    Images: {
      one: "https://r1imghtlak.mmtcdn.com/5dbd0f269a0d11e8b73802a895e77b78.jpg?&output-quality=75&downsize=910:612&crop=910:612;25,0&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r1imghtlak.mmtcdn.com/f9c2bfdccc9011e8b2f10224510f5e5b.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 19,
    Price: 1200,
    Ac: "Available",
    Rating: 4.2,
  },
  {
    Title: "Estrela Do Mar Beach Resort - A Beach Property",
    Images: {
      one: "https://r1imghtlak.mmtcdn.com/a0a6699e720a11e7a88f025f77df004f.jpg?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r1imghtlak.mmtcdn.com/2057116a2aa211e980f60242ac110004.png?&output-quality=75&downsize=910:612&crop=910:612;118,0&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 19,
    Price: 1000,
    Ac: "Available",
    Rating: 3.9,
  },
  {
    Title: "SinQ The Party Hotel (No Stags Allowed)",
    Images: {
      one: "https://r1imghtlak.mmtcdn.com/250205407c3b11e48a9b5ee5da2daa2a.jfif?&output-quality=75&downsize=910:612&crop=910:612;4,0&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r1imghtlak.mmtcdn.com/bf5541c06e9b11e7b55f025f77df004f.jpg?&output-quality=75&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 19,
    Price: 1900,
    Ac:  "Not-Available",
    Rating: 4,
  },
  {
    Title: "Resort Terra Paraiso - A Beach Property",
    Images: {
      one: "https://r1imghtlak.mmtcdn.com/54fd6b0028af11ebbf8b0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,35&output-format=jpg&downsize=821:550&crop=821:550",
      two: "https://r1imghtlak.mmtcdn.com/e36bf9d0db6111e8a34c0242ac110002.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,34&output-format=jpg&downsize=821:550&crop=821:550",
    },
    Rooms: 19,
    Price: 800,
    Ac:  "Not-Available",
    Rating: 3.8,
  },
];
export { hotels };
