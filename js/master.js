

//--------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
	
	const swiper = new Swiper('.about-swiper', {
			speed: 1000,
			direction: 'vertical',
			spaceBetween: 45,
			pagination: {
					el: '.swiper-pagination',
					clickable: true,
			},
			mousewheel: true,
			keyboard: false,
			on: {
					slideChange: function () {
							updateActiveButton(this.activeIndex);
					}
			}
	});

	const buttons = document.querySelectorAll('.menu-bar-con .bar-item');
	buttons.forEach(button => {
			button.addEventListener('click', function () {
					const slideIndex = parseInt(this.getAttribute('data-slide'), 10);
					swiper.slideTo(slideIndex);
					updateActiveButton(slideIndex);
			});
	});

	function updateActiveButton(index) {
			buttons.forEach(btn => btn.classList.remove('active'));
			buttons[index].classList.add('active');
	}
});

document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.about-carts-swiper', {
		slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

	});

});







// КАТЕГОРИИ
function toggleActiveAndMove(className) {
	document.querySelectorAll('.menu-bar, .categories').forEach(item => {
			item.classList.remove('active');
	});

	document.querySelectorAll(`.${className}`).forEach(item => {
			item.classList.add('active');
	});

	// Обновляем текстовые категории
	const activeCategory = document.querySelector('.categories.active');
	if (activeCategory) {
			const value = activeCategory.getAttribute('value');
			const textCategories = document.querySelector('.text-categories');
			const textNav = document.querySelector('.text-categories-nav');

			textCategories.classList.remove('move');
			textCategories.textContent = value;
			textNav.textContent = value;
			setTimeout(() => {
					textCategories.classList.add('move');
			}, 10);
	}

	// Выводим активные значения в консоль
	logActiveValues();
}


document.querySelectorAll('.menu-bar, .categories').forEach(element => {
	element.addEventListener('click', function() {
			this.classList.forEach(cls => {
					if (cls.startsWith('i-')) {
							toggleActiveAndMove(cls);
					}
			});
	});
});

// СЕГМЕНТЫ
document.querySelectorAll('.segment, .under-menu').forEach(item => {
	item.addEventListener('click', function() {
			const className = Array.from(this.classList).find(cls => cls.startsWith('i-'));
			if (!className) return;
			
			document.querySelectorAll('.under-menu, .segment').forEach(elem => {
					elem.classList.remove('active');
			});

			document.querySelectorAll(`.${className}`).forEach(elem => {
					elem.classList.add('active');
			});

			const activeSegment = document.querySelector('.segment.active');
			if (activeSegment) {
					const value = activeSegment.getAttribute('value');
					const textSegment = document.querySelector('.text-segment');
					const textNav = document.querySelector('.text-segment-nav');

					textSegment.classList.remove('move');
					textSegment.textContent = value;
					textNav.textContent = value;
					setTimeout(() => {
							textSegment.classList.add('move');
					}, 10);
			}

			// Выводим активные значения в консоль
			logActiveValues();
	});
});




//about image
document.querySelector('.wrapper').addEventListener('mousemove', function(e) {
	const rect = e.currentTarget.getBoundingClientRect();
	const offsetX = e.clientX - rect.left;
	const width = rect.width;

	// Рассчитываем процент для сдвига clip-path
	const percentage = (offsetX / width) * 100;

	const redDiv = document.querySelector('.cover');
	
	// Изменяем область обрезки в зависимости от позиции курсора
	redDiv.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
});






//скрыть слайды
document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.button');
	const slides = document.querySelectorAll('.segment-slide');

	buttons.forEach((button, index) => {
			button.addEventListener('click', () => {
					slides.forEach(slide => slide.classList.remove('active'));
					slides[index].classList.add('active');
			});
	});

	// По умолчанию активируйте первый слайд
	slides[0].classList.add('active');
});