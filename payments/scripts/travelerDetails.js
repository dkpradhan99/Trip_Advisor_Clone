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
price.innerText=`Price : ₹${Data.Price} /Person`;
ROD2.append(title,price);

//updating total price value
let totalPrice=document.getElementById("totalPrice");
totalPrice.innerText=`₹${Data.Price.toFixed(2)}`

//applying onclickon next button
let next=document.getElementById("next");
next.addEventListener("click",function(){
    //alert(0)
    window.location.href="paymentDetails.html"
})