let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let thumbnails = document.getElementsByClassName("demo");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    thumbnails[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}



const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#main-menu");

document.addEventListener("DOMContentLoaded", () => {
  
  menuBtn.addEventListener("click", (event) => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle("show");  
    event.stopPropagation(); 
  });

 
  document.addEventListener("click", (event) => {
   
    if (!menu.contains(event.target) && event.target !== menuBtn) {
      menu.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});
