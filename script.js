let slideIndex = 0;
showSlides();

// Automatic slideshow
function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Call again after 3 seconds
    setTimeout(showSlides, 3000);
}

// Optional: manual controls (Next/Previous buttons)
function plusSlides(n) {
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex += n;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;

    slides[slideIndex - 1].style.display = "block";
}

// Optional: go to specific slide (dots)
function currentSlide(n) {
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex = n;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;

    slides[slideIndex - 1].style.display = "block";
}


// ======================
// Modal Functions
// ======================
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal kung mag-click sa labas ng content
window.onclick = function(event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = "none";
    }
  }
}

//testinonial niggers

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.testimonial-card');
  let currentIndex = 0;

  document.getElementById('next-btn').addEventListener('click', () => {
    slides[currentIndex].classList.remove('active');
    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;
    slides[currentIndex].classList.add('active');
  });
});
