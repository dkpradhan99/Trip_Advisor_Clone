let data=JSON.parse(localStorage.getItem("Hotel-Details"))||[];
let Data=data[0];
console.log(Data);
//status bar
let st1=document.getElementById("st1");
st1.style.backgroundColor="black"

//appending image
let ROD1=document.getElementById("ROD1");
let image=document.createElement("img");
image.src=Data.Images.two;
ROD1.append(image)

//appending desription
let ROD2=document.getElementById("ROD2");
let title=document.createElement("h4");
title.innerText=Data.Title;
title.setAttribute("id","title")

let price=document.createElement("p");
price.innerText=`Price : ₹${Data.Price} /Night`;
ROD2.append(title,price);

//updating total price value
let totalPrice=document.getElementById("totalPrice");
totalPrice.innerText=`₹${Data.Price.toFixed(2)}`

