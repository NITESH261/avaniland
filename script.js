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







// LOCATION CAROUSEL

const slider = document.getElementById("locationsSlider");

document.getElementById("locNext").onclick = () => {

slider.scrollLeft += 320;

};

document.getElementById("locPrev").onclick = () => {

slider.scrollLeft -= 320;

};





// BLOG CAROUSEL

const blogSlider = document.getElementById("blogsSlider");

document.getElementById("blogNext").onclick = () => {

blogSlider.scrollLeft += 320;

};

document.getElementById("blogPrev").onclick = () => {

blogSlider.scrollLeft -= 320;

};





// MODAL ELEMENTS

const modal = document.getElementById("enquiryModal");
const closeBtn = document.getElementById("closeModal");
const openBtn = document.getElementById("openModal");


// AUTO OPEN AFTER 5 SECONDS

window.onload = () => {

setTimeout(() => {

modal.style.display = "flex";

}, 5000);

};


// CLOSE MODAL

closeBtn.onclick = () => {

modal.style.display = "none";

};


// OPEN VIA FLOAT BUTTON

openBtn.onclick = () => {

modal.style.display = "flex";

};


// CLOSE IF CLICK OUTSIDE

window.onclick = (e) => {

if(e.target == modal){

modal.style.display = "none";

}

};







function scrollHighlight(direction){
	
const highlightTrack = document.getElementById("highlightTrack");
const cardWidth =
highlightTrack.querySelector(".highlight-card").offsetWidth + 25;

highlightTrack.scrollBy({

left: direction * cardWidth * 2,
behavior: "smooth"

});

}



function scrollLocations(direction){

const container = document.getElementById("locationsTrack");

const cardWidth =
container.querySelector(".location-card").offsetWidth + 25;

container.scrollBy({

left: direction * cardWidth * 2,
behavior: "smooth"

});

}





function scrollDreamPlots(direction){

const container =
document.getElementById("dreamplotsTrack");

const cardWidth =
container.querySelector(".dream-card").offsetWidth + 25;

container.scrollBy({

left: direction * cardWidth * 2,
behavior: "smooth"

});

}






<script>
const slider = document.getElementById("blogsSlider");

document.getElementById("blogNext").onclick = () => {
slider.scrollBy({ left: 340, behavior: "smooth" });
};

document.getElementById("blogPrev").onclick = () => {
slider.scrollBy({ left: -340, behavior: "smooth" });
};
</script>
