let top_exp = [
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/66/4a/caption.jpg?w=300&h=300&s=1",
    title: "Ubud Tour - Best of Ubud - All Inclusive",
    description: "from ₹7,493 per adult",
    heart: "../images/heart-modified.png",
    reviews: 2077,
  },
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/03/51/caption.jpg?w=300&h=300&s=1",
    title: "Tokyo Full-Day Private Tour with Government-Licensed Guide",
    description: "from ₹8,676 per adult",
    heart: "../images/heart-modified.png",
    reviews: 105,
  },
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/29/77/caption.jpg?w=300&h=300&s=1",
    title: "Lion City Bike Tour of Singapore",
    description: "from ₹5,097 per adult",
    heart: "../images/heart-modified.png",
    reviews: 1341,
  },

  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/67/e5/07/caption.jpg?w=300&h=300&s=1",
    title: "Private Taj Mahal Tour from Delhi by Car - All Inclusive",
    description: "from ₹5,578 per adult",
    heart: "../images/heart-modified.png",
    reviews: 1406,
  },
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/15/08/73/caption.jpg?w=300&h=300&s=1",
    title: "Half-Day Railway Market and Floating Market Tour in Thailand",
    description: "from ₹2,289 per adult",
    heart: "../images/heart-modified.png",
    reviews: 782,
  },
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/91/ce/71/prayer-flags-to-loved.jpg?w=300&h=300&s=1",
    title: "Best Half Day DMZ Tour from Seoul (No Forced Shopping)",
    description: "from ₹5,745 per adult",
    heart: "../images/heart-modified.png",
    reviews: 1865,
  },
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/fa/1f/ae/caption.jpg?w=300&h=300&s=1",
    title: "Phi Phi Islands Adventure Day Trip",
    description: "from ₹6,409 per adult",
    heart: "../images/heart-modified.png",
    reviews: 927,
  },
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/13/9a/c6/caption.jpg?w=300&h=300&s=1",
    title: "Private Full Day Sightseeing Tour to Mount Fuji and Hakone",
    description: "from ₹40,197 per group",
    heart: "../images/heart-modified.png",
    reviews: 113,
  },
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/e1/b7/36/caption.jpg?w=300&h=300&s=1",
    title: "Nusa Penida by Private Boat - Snorkeling 4 spots, Land Tour",
    description: "from ₹9,639 per adult",
    heart: "../images/heart-modified.png",
    reviews: 283,
  },
  {
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/05/3c/56/caption.jpg?w=300&h=300&s=1",
    title: "Singapore Duck Tour",
    description: "from ₹2,651 per adult",
    heart: "../images/heart-modified.png",
    reviews: 101,
  },
];
var exp_container = document.querySelector(".exp-container");

var exp_wrapper = document.querySelector(".exp-wrapper");

let slider2 = (data) => {
  data.forEach(({ image, title, description, heart, reviews }) => {
    // exp_container.innerHTML = null;

    let card = document.createElement("div");
    card.classList.add("cardss", "swiper-slide");
    // card.innerHTML = null;

    let image_content = document.createElement("div");
    image_content.classList.add("image-contentt");

    let main_image = document.createElement("img");
    main_image.classList.add("main-img");
    main_image.src = image;

    let heart_img = document.createElement("span");
    heart_img.classList.add("heart-image");

    let img = document.createElement("img");
    img.src = heart;

    heart_img.append(img);
    image_content.append(main_image, heart_img);

    let title_content = document.createElement("a");
    title_content.innerHTML = title;
    title_content.classList.add("title-contentt");

    let re_view = document.createElement("div");
    re_view.classList.add("re-views");

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

    exp_wrapper.append(card);
    exp_container.append(exp_wrapper);
  });
};
slider2(top_exp);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
