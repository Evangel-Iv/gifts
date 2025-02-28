function toggleMenu() {
    const navList = document.querySelector('.navbar__list');
    
    navList.classList.toggle('navbar__list--active'); // Переключение класса для отображения меню
}

const sliderWrapper = document.querySelector('.brands-slider__wrapper');
const slides = document.querySelectorAll('.brands-slider__item');
const prevButton = document.querySelector('.brands-slider__button--prev');
const nextButton = document.querySelector('.brands-slider__button--next');

let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * (100 / slides.length);
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});