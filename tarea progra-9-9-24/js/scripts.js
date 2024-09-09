// Cambiar el color de fondo con el selector
const bgColorPicker = document.getElementById('bg-color-picker');
bgColorPicker.addEventListener('input', function() {
    document.body.style.backgroundColor = bgColorPicker.value;
});

// Carrusel sin Bootstrap
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);

// Mostrar la primera diapositiva
showSlide(currentSlide);
