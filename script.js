//discount
var discount = document.querySelector(".discount")
var closex = document.getElementById("close")

closex .addEventListener("click",function(){
    discount.style.display="none"
    
})

//sidenav
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")


menuicon.addEventListener("click", function(){
    sidenav.style.right=0

})
    

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll('.slider-image');
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlides, 3000); // Auto-slide every 3 seconds


//scroll


var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
        
            e.target.src="./images/redheart.png"
        }
        else{
            e.target.src="./images/blackheart.png"
        }
    })
})

window.addEventListener("scroll", function() {
    var elements = document.querySelectorAll(".initial-scroll-animate");
    var windowHeight = window.innerHeight;

    elements.forEach(function(el) {
        var elbound = el.getBoundingClientRect();

        // Check if the element is within view
        if (windowHeight > elbound.top - 100) {
            el.classList.remove("reveal-scroll-animate"); // Reveal the element by removing the class
        } else {
            el.classList.add("reveal-scroll-animate"); // Optionally re-add the class if the element goes out of view
        }
    });
});
//mostwanted

const sliderWrapper = document.querySelector('.most-wanted-wrapper');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlide = 0;
const slidesToShow = 4; // Adjust this number based on how many slides are visible at once
const totalSlides = document.querySelectorAll('.most-wanted-container').length;

// Calculate the width of each slide
const slideWidth = document.querySelector('.most-wanted-container').clientWidth;

// Function to update slide position
function updateSlidePosition() {
    const offset = -(currentSlide * slideWidth);
    sliderWrapper.style.transform = `translateX(${offset}px)`;
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - slidesToShow) {
        currentSlide++;
        updateSlidePosition();
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
    }
});


