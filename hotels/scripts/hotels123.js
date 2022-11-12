import { hotels } from "./hotels.js";

let hotel_arr = hotels;

var hotel_array = JSON.parse(localStorage.getItem("data")) || [];

localStorage.setItem("data", JSON.stringify(hotel_arr));

let dom = (data) => {
  var cont2 = document.getElementById("c2");
  cont2.innerHTML = null;

  let hotelImage = document.createElement("div");
  //  hotelImage.innerHTML = null;

  let detail = document.createElement("div");
  //  detail.innerHTML = null;

  //   let hotdata = document.getElementById("hotelData");
  //   hotdata.innerHTML = null;

  //  cont2.innerHTML = null;

  data.forEach((el,i) => {
    let div = document.createElement("div");
    div.setAttribute("id", "hotel");
    div.style.brder = "1px solid red";
    div.onclick = () => {
      something(el,i);
    };

    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");

    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");

    let image = document.createElement("img");
    image.setAttribute("id", "im");
    image.src = el.Images.two;

    let title = document.createElement("h4");
    title.innerText = el.Title;
    title.style.marginTop = "10px";

    let rooms = document.createElement("p");
    rooms.innerText = `Rooms    -   ${el.Rooms}`;
    rooms.style.marginTop = "5px";

    let price = document.createElement("p");
    price.innerText = `₹    ${el.Price} per night`;
    price.style.marginTop = "5px";
    price.style.color = "blue";

    let AC = document.createElement("p");
    AC.innerText = `Ac :  ${el.Ac}`;
    AC.style.marginTop = "5px";

    let rating = document.createElement("p");
    rating.innerText = `⭐ ${el.Rating}`;
    rating.style.marginTop = "5px";


    div1.append(image);
    hotelImage.append(div1);

    div2.append(title, rooms, price, AC, rating);
    detail.append(div2);

    div.append(div1, div2);

    cont2.append(div);
  });
};
dom(hotel_array);

let d = JSON.parse(localStorage.getItem("Hotel-Details")) || [];

let something = (el,i) => {
  d.push(el);
  let x=hotel_array.splice(i,1)
  console.log(x);
  localStorage.setItem("Hotel-Details", JSON.stringify(x));
  window.location.href = "../availability/avail.html";
};

//---------------------sort by price------------------

let sort_lth = document.getElementById("sort_lth");

sort_lth.onclick = () => {
  var hotel_array = JSON.parse(localStorage.getItem("data")) || [];
  //console.log(typeof Price)

  hotel_array.sort((a, b) => a.Price - b.Price);

  localStorage.setItem("data", JSON.stringify(hotel_array));
  dom(hotel_array);
};

let sort_htl = document.getElementById("sort_htl");
sort_htl.onclick = () => {
  var hotel_array = JSON.parse(localStorage.getItem("data")) || [];

  hotel_array.sort((a, b) => b.Price - a.Price);

  localStorage.setItem("data", JSON.stringify(hotel_array));
  dom(hotel_array);
};

//---------------------------------Ac filter-------------------------------

document.getElementById("filter_ac").addEventListener("click", ac_filt);

function ac_filt() {

  var hotel_array = JSON.parse(localStorage.getItem("data")) || [];
  let f1 = hotel_array.filter(function (el) {
    return el.Ac == "Available";
  });
 
  dom(f1);
}

document.getElementById("filter_nonac").addEventListener("click", non_filt);

function non_filt() {
  // console.log(data)
  let hotel_array = JSON.parse(localStorage.getItem("data"));
  let f1 = hotel_array.filter(function (el) {
    return el.Ac == "Not-Aavailable";
  });
  dom(f1);
  
}

let ratingLH = document.getElementById("ratingLH");

ratingLH.addEventListener("click", function () {
  var hotel_array = JSON.parse(localStorage.getItem("data")) || [];


  hotel_array.sort((a, b) => b.Rating - a.Rating);

  localStorage.setItem("data", JSON.stringify(hotel_array));
  dom(hotel_array);
});

let ratingHL = document.getElementById("ratingHL");

ratingHL.addEventListener("click", function () {
  var hotel_array = JSON.parse(localStorage.getItem("data")) || [];


  hotel_array.sort((a, b) => a.Rating - b.Rating);

  localStorage.setItem("data", JSON.stringify(hotel_array));
  dom(hotel_array);
});
