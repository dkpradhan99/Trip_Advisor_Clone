import { navbar } from "../components/navbar.js";
import { main_footer } from "../components/main_footer.js";
// import { footer } from "../components/footer.js";

var header = document.getElementById("header");
header.innerHTML = navbar();

var mainFooter = document.getElementById("main-footer");
mainFooter.innerHTML = main_footer();

// var normalFooter = document.getElementById("footer");
// normalFooter.innerHTML = footer();

window.onscroll = function () {
  myFunction();
};

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (document.documentElement.scrollTop > 60) {
    header.style.borderBottom = "1px solid rgb(220, 220, 220)";
  } else {
    header.style.border = "none";
  }
}
