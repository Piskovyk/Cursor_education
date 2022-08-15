


let = pageSlider = new Swiper('.page', {

    //Мої класи
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    //Вертикальний скрол
    direction: 'vertical',

    //К-сть слайдів для показу
    slidesPerView: 'auto',

    //Вкл.ппаралакс
    parallax: true,

    keyboard: {
        //вкл. - викл.
        enabled: true,
        //вкл. - викл.
        //тільки коли спойлер в межах вьюпорта
        onlyinViwport: true,
        //вкл. - викл.
        //управління клавіатр.
        pageUpDown: true,
    },

    //Управління колесом миші
    mousewheel: {
        //Чутливість
        sensitivity: 1,
    },

    //Відключення ф-лу коли мало слайдів
    watchOverflow: true,

    speed: 800,

    //Оновити слайдер при додавання елеметів слайдера
    observer: true,

    //Оновити свайпер при зміні, елементів батьківських, свайпера
    observeParents: true,

    //Оновити слайдер при зміні елементів, дочірних 
    observeSliderChildren: true,

    //Буліти,навігація.прогресбар.нтеперешнє положення
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: 'page__bullet_active',
    },
    //Скрол
    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        draggable: true,
    },
    //Відключення автоініціалізації
    init: false,

    //Подія 
    on: {
        //Подія ініціалізації
        init: function () {
            menuSlider();
            wrapper.classList.add('_loaded');
            setScrollType();
        },
        //Подія зміни слайдів
        slideChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },
        resize: function () {
            setScrollType();
        },
    },
})

let menuLinks = document.querySelectorAll('.menu_link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener("click", function (e) {
                menuSliderRemove();
                pageSlider.slideTo(index, 800);
                menuLink.classList.add('_active');
                e.preventDefault();
            });
        }
    }
}

function menuSliderRemove() {
    let menuLinkActive = document.querySelector('.menu_link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

function setScrollType() {

    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free');
        pageSlider.params.freeMode = false;
    }

    for (let index = 0; index < pageSlider.slides.length; index++) {
        const pageSlide = pageSlider.slides[index];
        const pageSlideContent = pageSlide.querySelector('.screen__content');

        if (pageSlideContent) {
            const pageSlideContentHeight = pageSlideContent.offsetHeight;
            if (pageSlideContentHeight > window.innerHeight) {
                wrapper.classList.add('_free');
                pageSlider.params.freeMode = true;
                break;
            }
        }
    }
}

pageSlider.init();