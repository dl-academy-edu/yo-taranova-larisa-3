const slider = document.querySelector('.slider')

const wrapper = slider.querySelector('.slider__wrapper');

const innerWrapper = slider.querySelector('.slider__inner_wrapper');

const pagination = slider.querySelector('.slider__pagination');

const buttonBack = document.querySelector('.slider__button_back_js');

const buttonNext = document.querySelector('.slider__button_next_js');

const slides = [...document.querySelectorAll('.slider__slide')];
const slidesCount = slides.length;

let slidesWidth = wrapper.offsetWidth;



slides.forEach(slide => {
    slide.style.width = `${slidesWidth}px`;
})

function setActiveSlide(index) {
    if ( index < 0 || index >= slidesCount ) return;
    innerWrapper.style.transform = `translateX(${index * slidesWidth * (-1)}px)`;

    activeSlideIndex = index;
}

buttonNext.addEventListener('click', () => {
    setActiveSlide(activeSlideIndex + 1);
})

buttonBack.addEventListener('click', () => {
    setActiveSlide(activeSlideIndex - 1);
})

setActiveSlide(1)