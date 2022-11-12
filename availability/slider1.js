let scenic_spots = [
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/2b/0f/merkmal-des-dal-sees.jpg?w=300&h=300&s=1",
      title: "Dal Lake",
      description: "Bodies of Water",
      heart: "../images/heart-modified.png",
      reviews: 6463,
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=300&h=300&s=1",
      title: "Paradise Beach",
      description: "Beaches",
      heart: "../images/heart-modified.png",
      reviews: 2354,
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=300&h=300&s=1",
      title: "Double Decker Living Root Bridge",
      description: "Bridges",
      heart: "../images/heart-modified.png",
      reviews: 814,
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f5/cb/a2/the-morning-show.jpg?w=300&h=300&s=1",
      title: "Tiger Hill",
      description: "Lookouts",
      heart: "../images/heart-modified.png",
      reviews: 1808,
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/48/2f/eb/mahamrityunjay-temple.jpg?w=300&h=300&s=1",
      title: "Mahamrityunjay Temple",
      description: "Religious Sites",
      heart: "../images/heart-modified.png",
      reviews: 1333,
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ec/dc/15/aru-city.jpg?w=300&h=300&s=1",
      title: "Aru Valley",
      description: "Valley",
      heart: "../images/heart-modified.png",
      reviews: 927,
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/54/4a/57/photo0jpg.jpg?w=300&h=300&s=1",
      title: "7th Mile View Point",
      description: "Lookouts",
      heart: "../images/heart-modified.png",
      reviews: 5113,
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/07/0b/38/the-road-takes-you-deeper.jpg?w=300&h=300&s=1",
      title: "Brinsar Wildlife Sanctuary",
      description: "Nature & Wildlife Areas",
      heart: "../images/heart-modified.png",
      reviews: 121,
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/68/2b/0f/merkmal-des-dal-sees.jpg?w=300&h=300&s=1",
      title: "Kinnaur",
      description: "Valleys",
      heart: "../images/heart-modified.png",
      reviews: 1162,
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3b/cb/a7/banasura-sagar-dam.jpg?w=300&h=300&s=1",
      title: "Banasura Sagar Dam",
      description: "Dams",
      heart: "../images/heart-modified.png",
      reviews: 1181,
    },
  ];
  
  var sliding_container = document.querySelector(".sliding-container");
  
  var card_wrapper = document.querySelector(".card_wrapper");
  let slider = (data) => {
    data.forEach(({ image, title, description, heart, reviews }) => {
      // sliding_container.innerHTML = null;
  
      let card = document.createElement("div");
      card.classList.add("cards", "swiper-slide");
      // card.innerHTML = null;
  
      let image_content = document.createElement("div");
      image_content.classList.add("image-content");
  
      let main_image = document.createElement("img");
      main_image.classList.add("main-image");
      main_image.src = image;
  
      let heart_img = document.createElement("span");
      heart_img.classList.add("heart-img");
  
      let img = document.createElement("img");
      img.src = heart;
  
      heart_img.append(img);
      image_content.append(main_image, heart_img);
  
      let title_content = document.createElement("a");
      title_content.innerHTML = title;
      title_content.classList.add("title-content");
  
      let re_view = document.createElement("div");
      re_view.classList.add("reviews");
  
      let div1 = document.createElement("div");
  
      let span1 = document.createElement("span");
      let span2 = document.createElement("span");
      let span3 = document.createElement("span");
      let span4 = document.createElement("span");
      let span5 = document.createElement("span");
  
      div1.append(span1, span2, span3, span4, span5);
  
      let div2 = document.createElement("div");
      div2.innerHTML = reviews;
  
      re_view.append(div1, div2);
  
      let descrip = document.createElement("p");
      descrip.innerHTML = description;
      descrip.classList.add("description");
  
      card.append(image_content, title_content, re_view, descrip);
  
      card_wrapper.append(card);
      sliding_container.append(card_wrapper);
    });
  };
  slider(scenic_spots);
  
//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     slidesPerGroup: 2,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
  