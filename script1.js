
// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("show");

});



// CAROUSEL

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;



// CREATE DOTS

slides.forEach((_, i)=>{

let dot = document.createElement("div");

dot.classList.add("dot");

if(i===0) dot.classList.add("active");

dot.addEventListener("click",()=>{

index=i;

showSlide(index);

});

dotsContainer.appendChild(dot);

});


const dots = document.querySelectorAll(".dot");



function showSlide(i){

slides.forEach(slide=>slide.style.opacity="0");

dots.forEach(dot=>dot.classList.remove("active"));

slides[i].style.opacity="1";

dots[i].classList.add("active");

}


nextBtn.addEventListener("click",()=>{

index++;

if(index>=slides.length) index=0;

showSlide(index);

});


prevBtn.addEventListener("click",()=>{

index--;

if(index<0) index=slides.length-1;

showSlide(index);

});



// AUTO SLIDE

setInterval(()=>{

index++;

if(index>=slides.length) index=0;

showSlide(index);

},5000);





<script>

const highlightTrack = document.getElementById("highlightTrack");

function scrollHighlight(direction){

const cardWidth =
highlightTrack.querySelector(".highlight-card").offsetWidth + 25;

highlightTrack.scrollBy({

left: direction * cardWidth * 2,
behavior: "smooth"

});

}

</script>