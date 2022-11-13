//Fetching data from local storage
let data=JSON.parse(localStorage.getItem("Hotel-Details"))||[];
let inputObj=JSON.parse(localStorage.getItem("inputObj"))||[];

let Data=data[0];
console.log(Data);
console.log("inputObj",inputObj);

//dynamic data integration title,name,email,phone
let Rtitle=document.getElementById("Rtitle");
Rtitle.innerText=Data.Title;

let Rname=document.getElementById("Rname");
Rname.innerText=`${inputObj.firstName} ${inputObj.lastName}`;

let Remail=document.getElementById("Remail");
Remail.innerText=inputObj.email;

let Rphone=document.getElementById("Rphone");
Rphone.innerText=inputObj.phone;

let RtotalPrice=document.getElementById("RtotalPrice");
RtotalPrice.innerText=`Total Price : ₹${+Data.Price+99}`;


//status bar
let st1=document.getElementById("st1");
st1.style.backgroundColor="black"
let st2=document.getElementById("st2");
st2.style.backgroundColor="black";
let st3=document.getElementById("st3");
st3.style.backgroundColor="black"

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
price.innerText=`Price : ₹${Data.Price}`;
ROD2.append(title,price);

//updating total price value
let totalPrice=document.getElementById("totalPrice");
totalPrice.innerText=`₹${(Number(Data.Price) +99) .toFixed(2)}`

//adding functionalities to complete booking button
let CB=document.getElementById("CB");
CB.addEventListener("click",function(){
   let otp= prompt("please enter 4 digit OTP");

   
   while(otp.length !==4){
    otp= prompt(" invalid OTP ,please enter 4 digit OTP");
     
   }
   if(otp.length===4){
    alert("Booking Successful,Thank you for visiting traveladvisor. Have A nice Day")
   }
   window.location.href="../Homepage/index.html"


})