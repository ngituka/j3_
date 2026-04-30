let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    // 1. On cherche l'image qui a actuellement la classe "active"
    let currentSlide = document.querySelector(".slide.active");

    // 2. Si elle existe, on lui retire la classe (elle va fade out)
    if (currentSlide) {
        currentSlide.classList.remove("active");
    }

    // 3. On calcule l'index de la suivante
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }

    // 4. On ajoute "active" à la nouvelle (elle va fade in)
    slides[slideIndex - 1].classList.add("active");

    // On relance
    setTimeout(showSlides, 8000); 
}

showSlides();