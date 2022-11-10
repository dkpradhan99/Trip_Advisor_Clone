import { hotels } from "./hotels.js";

let hotel_array = hotels;


let dom = (data) => {
  let hotelImage = document.getElementById("hotelImage");
  hotelImage.innerHTML = null;

  let detail = document.getElementById("detail");
  detail.innerHTML = null;

//   let hotdata = document.getElementById("hotelData");
//   hotdata.innerHTML = null;

  
  let cont2 = document.getElementById("c2");
  cont2.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "hotel");
    div.style.brder="1px solid red";
    div.onclick=()=>{
        something(el)
    }


     let div1=document.createElement("div")
     div1.setAttribute("id","div1")

     let div2=document.createElement("div")
     div2.setAttribute("id","div2")

    let image = document.createElement("img");
    image.setAttribute("id","im")
    image.src = el.Images.two;

    let title = document.createElement("h4");
    title.innerText = el.Title;
    title.style.marginTop="10px"

    let rooms = document.createElement("p");
    rooms.innerText = `Rooms    -   ${el.Rooms}`;
    rooms.style.marginTop="5px"

    let price = document.createElement("p");
    price.innerText = `Price    -  ${el.Price}`;
    price.style.marginTop="5px"


    let AC = document.createElement("p");
    AC.innerText = `AC  -   ${el.Ac}`;
    AC.style.marginTop="5px"

    let rating = document.createElement("p");
    rating.innerText = `Rating   -  ${el.Rating}`;
    rating.style.marginTop="5px"

  
    // detail.append(title, rooms, price, AC, rating);
    //  hotelImage.append(image);

    // hotdata.append( hotelImage,detail);
    // // hotdata.append(div)
    // cont2.append(hotdata)
    div1.append(image);
    hotelImage.append(div1);
    div2.append(title, rooms, price, AC, rating)
    detail.append(div2)
    div.append(div1,div2)
    cont2.append(div)
  });
};
dom(hotel_array);

let d=JSON.parse(localStorage.getItem("Hotel-Details"))||[];

let something=(el)=>{
    d.push(el)
    localStorage.setItem("Hotel-Details",JSON.stringify(d))
}