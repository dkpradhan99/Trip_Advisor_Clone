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

  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "hotel");
    div.style.brder = "1px solid red";
    div.onclick = () => {
      something(el);
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
    AC.innerText = `Ac -  ${el.Ac}`;
    AC.style.marginTop = "5px";

    let rating = document.createElement("p");
    rating.innerText = `⭐ ${el.Rating}`;
    rating.style.marginTop = "5px";

    // detail.append(title, rooms, price, AC, rating);
    //  hotelImage.append(image);

    // hotdata.append( hotelImage,detail);
    // // hotdata.append(div)
    // cont2.append(hotdata)
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

let something = (el) => {
  d.push(el);
  localStorage.setItem("Hotel-Details", JSON.stringify(d));
  window.location.href = "../availability/avail.html";
};

//---------------------sort by price------------------
// let data=JSON.parse(localStorage.getItem("data")) || [];
// let somefun=()=>{
//   data.sort((a,b)=>a.Price - b.Price )
//   dom()
// }
// //somefunction()
// let L=document.getElementById("L");
// L.onchange=()=>{
//   data.sort((a,b)=>a.Price - b.Price )
//   dom()
// }
// let data=JSON.parse(localStorage.getItem("data")) || [];
// let hightolow_p=document.getElementById('sub-item2');
// let data=JSON.parse(localStorage.getItem("data")) || [];
// hightolow_p.addEventListener("click", ()=>{
//     hlrating(data);
// });
// const hlrating=(data)=>{
//  let sortdata= data.sort(function(a,b){
//     // console.log(typeof (b.price));
//      return b.el.Price - a.el.Price
//    });
//  dom(sortdata);
// }

// //sort low to high
// let lowtohigh_p=document.getElementById('sub-item3');
// lowtohigh_p.addEventListener("click", ()=>{
// lhrating(data)
// });
// const lhrating=(data)=>{
// let sortdata= data.sort(function(a,b){
//     return a.price - b.price ;
//   });
// append(sortdata);
// }

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
  //console.log(typeof Price)

  hotel_array.sort((a, b) => b.Price - a.Price);

  localStorage.setItem("data", JSON.stringify(hotel_array));
  dom(hotel_array);
};
// function sortLtoH(){
//   let userData =JSON.parse(localStorage.getItem("sh"))

//   userData.sort((a,b)=>

//   a.Price - b.Price

//   )
//   localStorage.setItem("sh",JSON.stringify(userData))
//   renderDom(userData)

//   }

// function sortHtoL(){
//     let userData =JSON.parse(localStorage.getItem("sh"))

//     userData.sort((a,b)=>

//    b.Price - a.Price

//     )
//     localStorage.setItem("sh",JSON.stringify(userData))
//     renderDom(userData)

//     }

//---------------------------------Ac filter-------------------------------
// let cont2 = document.getElementById("c2");
// cont2.innerHTML = null;
document.getElementById("filter_ac").addEventListener("click", ac_filt);

function ac_filt() {
  //console.log("abha")
  var hotel_array = JSON.parse(localStorage.getItem("data")) || [];
  let f1 = hotel_array.filter(function (el) {
    return el.Ac == true;
  });
  // dom(f1)
  // localStorage.setItem("data", JSON.stringify(f1));
  dom(f1);
}

document.getElementById("filter_nonac").addEventListener("click", non_filt);

function non_filt() {
  // console.log(data)
  let hotel_array = JSON.parse(localStorage.getItem("data"));
  let f1 = hotel_array.filter(function (el) {
    return el.Ac == false;
  });
  dom(f1);
  // localStorage.setItem("nonac", JSON.stringify(f1));
}

let ratingLH = document.getElementById("ratingLH");

ratingLH.addEventListener("click", function () {
  var hotel_array = JSON.parse(localStorage.getItem("data")) || [];
  //console.log(typeof Price)

  hotel_array.sort((a, b) => b.Rating - a.Rating);

  localStorage.setItem("data", JSON.stringify(hotel_array));
  dom(hotel_array);
});

let ratingHL = document.getElementById("ratingHL");

ratingHL.addEventListener("click", function () {
  var hotel_array = JSON.parse(localStorage.getItem("data")) || [];
  //console.log(typeof Price)

  hotel_array.sort((a, b) => a.Rating - b.Rating);

  localStorage.setItem("data", JSON.stringify(hotel_array));
  dom(hotel_array);
});
