// Typewriter Effect
const title = "Happy Birthday to My Dear 🎉";
const typewriter = document.getElementById("typewriter");
let i = 0;

function typeWriterEffect() {
  if (i < title.length) {
    typewriter.textContent += title.charAt(i);
    i++;
    setTimeout(typeWriterEffect, 80);
  }
}
typeWriterEffect();

// Page transition
function nextPage(currentId, nextId) {
  document.getElementById(currentId).classList.add('hidden');
  document.getElementById(nextId).classList.remove('hidden');
  launchConfetti();
}

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlides() {
  slides.forEach(s => s.style.display = "none");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 2500);
}
showSlides();
