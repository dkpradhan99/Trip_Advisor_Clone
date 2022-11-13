let data=JSON.parse(localStorage.getItem("Hotel-Details"))||[];
let Data=data[0];
console.log(Data);
let GO=true;
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
price.innerText=`Price : ₹${+Data.Price}`;
ROD2.append(title,price);

//updating total price value
let totalPrice=document.getElementById("totalPrice");
totalPrice.innerText=`₹${(Number(Data.Price) +99) .toFixed(2)}`

//defining dataCollecter
let dataCollector=()=>{
    let inputObj=JSON.parse(localStorage.getItem("inputObj")) ||{};

    let email=document.getElementById("email").value;
    let countryCode=document.getElementById("countryCode").value;
    let phone=document.getElementById("phone").value;

    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    if(email=="" ||phone=="" || firstName==""){
        alert("please input valid data");
        GO=false;
    }
    else{
        GO=true;
    }
    
    inputObj.email=email;
    inputObj.countryCode=countryCode;
    inputObj.phone=phone;
    inputObj.firstName=firstName;
    inputObj.lastName=lastName;

    //alert(0)
    localStorage.setItem("inputObj",JSON.stringify(inputObj))
    inputObj=JSON.parse(localStorage.getItem("inputObj")) ||{};
    console.log(inputObj);


}


//applying onclickon next button
let next=document.getElementById("next");
next.addEventListener("click",function(){
    alert(0)
    dataCollector();
    if(GO){
        window.location.href="./paymentDetails.html"
    }
    
})