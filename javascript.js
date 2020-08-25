// Header Scrolling Effect

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//Sliding Menu Indicator

let marker = document.querySelector(".marker");
let menuItem = document.querySelectorAll(".menu");

function indicator(e) {
  marker.classList.add("marker-active");
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

menuItem.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});
