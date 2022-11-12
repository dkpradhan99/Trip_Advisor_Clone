// console.log(1);

let d = JSON.parse(localStorage.getItem("Hotel-Details"));
console.log(d[0].Images.two);
console.log(d);

function append(data){
    // let data = JSON.parse(localStorage.getItem("Hotel-Details"));
    let cont = document.getElementById("butto")
    // cont.innerHTML=null
    let cont1 = document.getElementById("container")
    // cont1.innerHTML=null
    let cont2 = document.getElementById("right1")
    // cont2.innerHTML=null
    data.forEach(function(el){
        // let div
        let img = document.createElement("img")
        img.src=el.Images.two

        let title = document.createElement("h1");
        title.innerText = el.Title;
        // title.id="titl"

        let price = document.createElement("h1");
    price.innerText ="₹"+ el.Price;

        cont1.append(img)
        cont2.append(title)
        cont.append(price)

    })
}

append(d)

// let arrofdata = JSON.parse(localStorage.getItem("Details")) || [];
// function click(){
//     let datat = document.getElementById("add21")
//     datat.onclick = ()=>{
//         console.log(1);
//         console.log(d)
//         // localStorage.setItem("Details",JSON.stringify(arrofdata))
//     }

// }
// click()

function click(){
    let data1=JSON.parse(localStorage.getItem("Hotel-Details"))
    data1.forEach((el)=>{
        let arr=JSON.parse(localStorage.getItem("bag"))|| [];
    
    document.getElementById("add21").onclick = ()=>{
    
        
    
        arr.push(el)
    alert("product added to basket")
    localStorage.setItem("bag",JSON.stringify(arr))

}
});
}
click();


