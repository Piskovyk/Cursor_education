//made Slider
new Swiper('.image-slider', {
    //Стрілки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //Навігація
    //Буліти. теперешнє положення, прогрессбар

    pagination: {
        el: '.swiper-pagination',
        /*
                //Буліти
                clickable: true,
                //Динамічні буліти
                dynamicBullets: true,
                //Кастомні буліти
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>"
                }
            },
        */


        //Фракція
        type: 'fraction',
        //Вивід фракцій
        renderFraction: function (currentClass, totalClass) {
            return 'фото <span class="' + currentClass + '"></span>' +
                ' із ' +
                '<span class="' + totalClass + '"></span>';
        }
    },


    /*
    //Прогресбар
    type: 'progressbar',
    */

    /*//Скрол
    scrollbar: {
        el: '.swiper-scrollbar',
        //Можливість переміщати скролл
        draggable: true,
    },*/

    //Вкл. - Вик.
    //Перетягування на ПК
    simulateTouch: true,
    //Чутливість свайпа
    touchratio: true,
    //Кут перетягуваня свайпа
    touchAngle: 45,
    //Курсор перетягування
    grabCursor: true,

    //Перемикання при кліку на слайд
    slideToClickedSlide: true,

    //Оновити слайдер при додавання елеметів слайдера
    observe: true,

    //Навігація по хешу
    hashnavigation: {
        //Стеження стану
        wathState: true,
    },

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

    //Автовисота
    autoHeight: false,

    //К-сть вібражаємих слайдів
    slidesPerView: 1,


    //Відключення ф-лу коли мало слайдів
    wathOverflow: true,


    //Відступ між слайдами
    spaceBetween: 10,

    /*
    //К-сть перелиствн. слайдів
    slidesPerGroup: 3,
*/

    //К-сть рядів
    slidesPerColumn: 0,

    //Постійний  скрол
    loop: false,

    /*
    //Швидкість
    speed: 800,
*/

    //Вертикальний слайдер
    direction: 'horizontal',

    effect: 'slide',

    /*
    //Ефект перемикання слайдів
    effect: 'fade',
    fadeEffect: {
        //Доповнення до "fade" паралельна зміна прозорості
        crossFade: true
    },
    */

    /*
    //Переворот
    effect: 'flip',
    flipEffect: {
        //Доповнення до "flip" - тінь
        slideShadow: true,
        //Показ тільки активного слайда
        limitRotation: true,
    },
    */

    /*//Куб
    effect: 'cube',
    cubeEffect: {
        //Налаштування тінні
        slideShadow: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
    */

    /*effect: 'coverflow',
    coverflowEffect: {
        //Кут
        rotate: 20,
        //Накладання
        stretch: 50,
        //Тінь
        slideshadow: true,
    },
    */


    /*
        //Адаптив (MobileFirst)
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            
        }
        */

    /*
//Адаптив (Відношення сторін вст/шрн)
breakpoints: {
    '@0.75': {
        slidesPerView: 1,
    },
    '@1.00': {
        slidesPerView: 2,
    },
    '@1.50': {
        slidesPerView: 3,
    },
}
*/


});