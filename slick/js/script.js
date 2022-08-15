$(document).ready(function () {
	$('.slider').slick({
		arrows: true,             //Стрілки, керування//
		dots: true,               //Крапка, управління//
		//adaptiveHeight: true,     Рівняня по найвищому слайду СSS '.slick-track{alighn-items:flex-start;}' 
		slidesToShow: 3,          //К-сть показуваних слайдів//
		//slidesToscroll:3,         К-сть перемикаємих слайдів// 
		//speed: 100,                Швидкість перемикання слайдів// 
		//infinite:true,            Нескынченысть слайдера CSS (false) .slick-disabled{opacity:0.2;}// 
		//initialSlide:0,           Головний слайд//		
		//autoplay: true,           Автовідтворення слайда//
		//easing:'ease',                Тип анімації при змінні слайда// 
		//autoplaySpeed: 1500,          швидкість перемиканя слайдів (добре з infinite) //

		//pauseOnFocus: true,               з
		//pauseOnHover: true,                а
		//pauseOnDotsHover: true,              замовчуванням, зупинка слайдера //

		//draggable:false,                   для ПК       - прокрутка слайдів - курсором//   

		//swipe:false,                       для планшету - прокрутка слайдів//        
		//touchThreshold:5,                  при 'swipe:true' при 5> менше рухати пальцем//
		//touchMove:true,                    керуємо перемиканя слайдів свайпом// 

		waiteForAnimate: true,             //користувач керує сам ш-сть перемикання// 
		centerMode: true,
		//variableWidth:true,                зображення без відступів (авт. адаптив з slideToshow, and centr ...)//

		//rows:2,                            к-сть зображень в одному слайду// 
		//slidesPerRow:2,                    коротко, то стовпці (к-сть слайдів) //

		//vertical:true,                     вертикальна прокрутка CSS (.slick-track {display:block;} .slider__item {height:225px} )// 
		//verrticalSwiping:true,//              


		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]

		//mobileFirst:talse,//
		//appendArrows:$('.class'),//
		//appendDots:$('class'),//

	});
});

