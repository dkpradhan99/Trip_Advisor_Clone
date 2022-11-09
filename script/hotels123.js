let getData = async() =>{
    try{
    let res = await fetch(`https://masai-api.herokuapp.com/hotels/search?city=goa`)   
   
     data = await res.json();
    renderDom(data.hotels)
    localStorage.setItem("Hotel-Detail",JSON.stringify(data.hotels))
    // console.log(data)
    }catch(e){
        console.log(e)
    }
   }

   getData()


function renderDom(data){

let booking = document.getElementById("container")
booking.innerHTML = null

data.forEach((el,index) => {

let card = document.createElement("div");
card.setAttribute("id","hotel");

let image =  document.createElement("img");
image.src = el.Images.one;

// let img =  document.createElement("img");
// img.src = el.Images.two;

let title =  document.createElement("h4");
title.innerText = el.Title;
title.style.marginLeft= "5%";

let rooms =  document.createElement("p");
rooms.innerText =  `Rooms    -   ${el.Rooms}`;
rooms.style.marginLeft= "5%";

let price =  document.createElement("p");
price.innerText = `Price    -  ${el.Price}`;
price.style.marginLeft= "5%";

let AC =  document.createElement("p");
AC.innerText = `AC  -   ${el.Ac}`;
AC.style.marginLeft= "5%";

let rating = document.createElement("p");
rating.innerText = `Rating   -  ${el.Rating}` ;
rating.style.marginLeft= "5%";


card.append(image,title,rooms,price,rating,AC)
booking.append(card);

})

}


// let getdata = async() =>{
//     try{

//     // let res = await fetch(`https://masai-api.herokuapp.com/hotels/search?city=mumbai`)   
   
//      data = await res.json();
//     renderDom(data.hotels)
//     localStorage.setItem("Hotel-Detail",JSON.stringify(data.hotels))
//     // console.log(data)
//     }catch(e){
//         console.log(e)
//     }
//    }

//    getdata()


// function renderDom(data){

// let booking = document.getElementById("container")
// booking.innerHTML = null

// data.forEach((el,index) => {

// let card = document.createElement("div");
// card.setAttribute("id","hotel");

// let image =  document.createElement("img");
// image.src = el.Images.one;

// // let img =  document.createElement("img");
// // img.src = el.Images.two;

// let title =  document.createElement("h4");
// title.innerText = el.Title;
// title.style.marginLeft= "5%";

// let rooms =  document.createElement("p");
// rooms.innerText =  `Rooms    -   ${el.Rooms}`;
// rooms.style.marginLeft= "5%";

// let price =  document.createElement("p");
// price.innerText = `Price    -  ${el.Price}`;
// price.style.marginLeft= "5%";

// let AC =  document.createElement("p");
// AC.innerText = `AC  -   ${el.Ac}`;
// AC.style.marginLeft= "5%";

// let rating = document.createElement("p");
// rating.innerText = `Rating   -  ${el.Rating}` ;
// rating.style.marginLeft= "5%";


// card.append(image,title,rooms,price,rating,AC)
// booking.append(card);

// })

// }