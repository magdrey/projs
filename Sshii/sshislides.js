/*
var slideIndex = 1;
showSlides (slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("meetpr");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = "none";}
    for( i = 0; i < dots.length; i++) {
        dots[i].className.replace("active", "");}
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += "active";
}
*/
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = Array.from(document.querySelectorAll(".dot"));


let slideIndex = 1;

function plusSlides(e) {
    let num;

    if (e.target === prevBtn) num = -1;
    if (e.target === nextBtn) num = 1;

    showSlides((slideIndex += num));
}

function currentSlide(e) {
    if (e.target == dots[0]) showSlides((slideIndex = 1));
    if (e.target == dots[1]) showSlides((slideIndex = 2));
    if (e.target == dots[2]) showSlides((slideIndex = 3));
    if (e.target == dots[3]) showSlides((slideIndex = 4));
    if (e.target == dots[4]) showSlides((slideIndex = 5));
    if (e.target == dots[5]) showSlides((slideIndex = 6));
    if (e.target == dots[6]) showSlides((slideIndex = 7));
}

function showSlides(n) {
    const slides = Array.from(document.querySelectorAll(".meetpr"));

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach((meetpr) => meetpr.classList.remove("is-active"));
    dots.forEach((dot) => dot.classList.remove("is-active"));

    slides[slideIndex - 1].classList.add("is-active");
    dots[slideIndex - 1].classList.add("is-active");
}
prevBtn.addEventListener("click", plusSlides);
nextBtn.addEventListener("click", plusSlides);
dots.forEach((dot) => dot.addEventListener("click", currentSlide));

/*
 window.onload = function autoplay() {

    
        const slides = Array.from(document.querySelectorAll(".meetpr"));
    setInterval(function(){
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;{ slideIndex++}
    
        slides.forEach((meetpr) => meetpr.classList.remove("is-active"));
        dots.forEach((dot) => dot.classList.remove("is-active"));
    
        slides[slideIndex - 1].classList.add("is-active");
        dots[slideIndex - 1].classList.add("is-active"); }, 4000);
    
   
}

function showSlides(n) {
    const slides = Array.from(document.querySelectorAll(".meetpr"));

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach((meetpr) => meetpr.classList.remove("is-active"));
    dots.forEach((dot) => dot.classList.remove("is-active"));

    slides[slideIndex - 1].classList.add("is-active");
    dots[slideIndex - 1].classList.add("is-active");
    if (!nextBtn.classList.contains('is-active')) {
        currentSlide = 1;
        slideIndex();
    } else {
        currentSlide++;
        slideIndex();
    }
}*/