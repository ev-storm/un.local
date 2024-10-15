
document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.segment-swiper', {
		autoplay: {
			delay: 4000,
		},

		navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
		},
		pagination: {
				el: '.swiper-pagination',
				clickable: true,
		},
		mousewheel: true,
		keyboard: true,
});


	const btnSlide = document.querySelectorAll('.btn-slide');

btnSlide.forEach((button) => {
    button.addEventListener('click', () => {
        const showButtons = document.querySelectorAll('.btn-slide.show');
        const showButtonArray = Array.from(showButtons);
        const index = showButtonArray.indexOf(button);

        // Убираем класс 'active' у всех кнопок
        btnSlide.forEach((btn) => btn.classList.remove('active'));
        
        // Добавляем класс 'active' к нажатой кнопке
        button.classList.add('active');

        // Переходим к слайду, если индекс валиден
        if (index !== -1) {
            swiper.slideTo(index);
        }
    });
});

// Обработчик события slideChange для обновления текста
swiper.on('slideChange', () => {
	const activeIndex = swiper.activeIndex; // Получаем индекс активного слайда
	const activeButton = btnSlide[activeIndex]; // Находим соответствующую кнопку

	// Обновляем текст в элементе с классом 'text-podsegment'
	const textPodsegment = document.querySelector('.text-podsegment');
	if (textPodsegment && activeButton) {
			textPodsegment.textContent = activeButton.textContent; // Обновляем текст
	}

	// Убираем класс 'active' у всех кнопок
	btnSlide.forEach((btn) => btn.classList.remove('active'));

	// Добавляем класс 'active' к текущей кнопке
	if (activeButton) {
			activeButton.classList.add('active');
	}
});

// Функция для обновления активной кнопки на основе текущего слайда
function updateActiveButton() {
    const activeIndex = swiper.activeIndex; 
    const activeButtons = document.querySelectorAll('.btn-slide.show');
    const activeButtonArray = Array.from(activeButtons);

    // Убираем класс 'active' у всех кнопок
    activeButtonArray.forEach((btn) => btn.classList.remove('active'));

    // Добавляем класс 'active' к кнопке, соответствующей активному индексу
    if (activeButtonArray[activeIndex]) {
        activeButtonArray[activeIndex].classList.add('active');
    }
		
}

// Подписываемся на событие смены слайда
swiper.on('slideChange', updateActiveButton);

	const menuBar = document.querySelectorAll('.menu-bar');
	const underMenu = document.querySelectorAll('.under-menu');

	const segments = document.querySelectorAll('.segment');
	const categories = document.querySelectorAll('.categories');

	const btnSlides = document.querySelectorAll('.btn-slide');
	const segmentSlides = document.querySelectorAll('.segment-slide');

	const combinationMapping = {
			"Фармацевтика-Картонная коробка": { 
					btn: [0, 1, 2, 3, 4],
					slide: [0, 1, 2, 3, 4] 
			},
			"БАД-Картонная коробка": { 
					btn: [0, 1, 2, 4],
					slide: [0, 1, 2, 4], 
			},
			"Косметика и парфюмерия-Картонная коробка": { 
					btn: [0, 5, 4],
					slide: [0, 5, 4] 
			},
			"Стоматология-Картонная коробка": { 
					btn: [19, 20, 21, 4],
					slide: [19, 20, 21, 4]
			},
			"Витамины-Картонная коробка": { 
					btn: [0, 1, 2, 4],
					slide: [0, 1, 2, 4], 
			},
			"Продукты питания-Картонная коробка": { 
					btn: [6, 7, 8, 9, 10, 4],
					slide: [6, 7, 8, 9, 10, 4] 
			},
			"Кондитерские изделия-Картонная коробка": { 
					btn: [11, 12, 13, 14, 4],
					slide: [11, 12, 13, 14, 4] 
			},
			"Замороженные продукты-Картонная коробка": { 
					btn: [15, 16, 17, 18, 4],
					slide: [15, 16, 17, 18, 4] 
			},
			"Промышленный-Картонная коробка": { 
					btn: [22, 23, 24, 25, 26, 27],
					slide: [22, 23, 24, 25, 26, 27] 
			},

			"Фармацевтика-Этикетка": { 
					btn: [28, 29, 30],
					slide: [28, 29, 30]
			},
			"БАД-Этикетка": { 
					btn: [28, 29, 31],
					slide: [28, 29, 31]
			},
			"Витамины-Этикетка": { 
					btn: [28, 29, 31],
					slide: [28, 29, 31]
			},
			"Стоматология-Этикетка": { 
				btn: [28, 32, 33, 34],
				slide: [28, 32, 33, 34]
			},
			"Косметика и парфюмерия-Этикетка": { 
					btn: [28, 29, 35, 36],
					slide: [28, 29, 35, 36]
			},
			"Продукты питания-Этикетка": { 
					btn: [37, 38, 39, 40, 41, 42],
					slide: [37, 38, 39, 40, 41, 42]
			},
			"Кондитерские изделия-Этикетка": { 
					btn: [43, 44, 45, 46],
					slide: [43, 44, 45, 46]
			},
			"Замороженные продукты-Этикетка": { 
					btn: [47, 37, 48],
					slide: [47, 37, 48]
			},
			"Промышленный-Этикетка": { 
					btn: [49, 50, 51, 52, 53, 54],
					slide: [49, 50, 51, 52, 53, 54]
			},
	};

	function updateDisplay() {
			// Найти активный сегмент и категорию
			

			const activeSegment = document.querySelector('.segment.active');
			const activeCategory = document.querySelector('.categories.active');

			if (activeSegment && activeCategory) {
					const segmentValue = activeSegment.getAttribute('value');
					const categoryValue = activeCategory.getAttribute('value');
					const key = `${segmentValue}-${categoryValue}`;

					// Сброс видимости
					btnSlides.forEach(btn => btn.classList.remove('show'));
					segmentSlides.forEach(slide => slide.classList.remove('show'));

					// Получить соответствующие слайды и кнопки из маппинга
					if (combinationMapping.hasOwnProperty(key)) {
							const config = combinationMapping[key];
							config.btn.forEach(index => {
									btnSlides[index].classList.add('show');
							});
							config.slide.forEach(index => {
									segmentSlides[index].classList.add('show');
							});
					}
					swiper.update();
			}

			const activeUnderMenu = document.querySelector('.under-menu.active');
			const activeMenuBar = document.querySelector('.menu-bar.active');

			if (activeUnderMenu && activeMenuBar) {
				const underMenuValue = activeUnderMenu.getAttribute('value');
				const menuBarValue = activeMenuBar.getAttribute('value');
				const key = `${underMenuValue}-${menuBarValue}`;

				// Сброс видимости
				btnSlides.forEach(btn => btn.classList.remove('show'));
				segmentSlides.forEach(slide => slide.classList.remove('show'));

				// Получить соответствующие слайды и кнопки из маппинга
				if (combinationMapping.hasOwnProperty(key)) {
						const config = combinationMapping[key];
						config.btn.forEach(index => {
								btnSlides[index].classList.add('show');
						});
						config.slide.forEach(index => {
								segmentSlides[index].classList.add('show');
						});
				}
				swiper.update();
		}
	}


	segments.forEach(segment => {
			segment.addEventListener('click', function() {
					segments.forEach(seg => seg.classList.remove('active'));
					this.classList.add('active');
					updateDisplay();
			});
	});

	categories.forEach(category => {
			category.addEventListener('click', function() {
					categories.forEach(cat => cat.classList.remove('active'));
					this.classList.add('active');
					updateDisplay();
			});
	});

	menuBar.forEach(menuBar => {
		menuBar.addEventListener('click', function() {
				categories.forEach(men => men.classList.remove('active'));
				this.classList.add('active');
				updateDisplay();
		});
	});

	underMenu.forEach(underMenu => {
		underMenu.addEventListener('click', function() {
				categories.forEach(und => und.classList.remove('active'));
				this.classList.add('active');
				updateDisplay();
		});
	});

	updateDisplay();

});

document.addEventListener('DOMContentLoaded', function () {
	const categories = document.querySelectorAll('.categories');
	const menuBars = document.querySelectorAll('.menu-bar');

	categories.forEach(category => {
			category.addEventListener('click', function () {
					// Удаляем класс active у всех категорий
					categories.forEach(cat => cat.classList.remove('active'));
					// Добавляем класс active к текущей категории
					this.classList.add('active');

					// Сравниваем значение и переключаем активные элементы в меню
					const value = this.getAttribute('value');
					menuBars.forEach(menuBar => {
							if (menuBar.getAttribute('value') === value) {
									menuBar.classList.add('active');
							} else {
									menuBar.classList.remove('active');
							}
					});
			});
	});

	menuBars.forEach(menuBar => {
			menuBar.addEventListener('click', function () {
					// Удаляем класс active у всех меню
					menuBars.forEach(mb => mb.classList.remove('active'));
					// Добавляем класс active к текущему меню
					this.classList.add('active');

					// Сравниваем значение и переключаем активные элементы в категориях
					const value = this.getAttribute('value');
					categories.forEach(category => {
							if (category.getAttribute('value') === value) {
									category.classList.add('active');
							} else {
									category.classList.remove('active');
							}
					});
			});
	});

	
});

// document.addEventListener('DOMContentLoaded', function () {

// 	const swiper = new Swiper('.segment-swiper', {
// 		autoplay: {
// 			delay: 4000,
// 		},

// 		navigation: {
// 				nextEl: '.swiper-button-next',
// 				prevEl: '.swiper-button-prev',
// 		},
// 		pagination: {
// 				el: '.swiper-pagination',
// 				clickable: true,
// 		},
// 		mousewheel: true,
// 		keyboard: true,
// });


// 	const btnSlides = document.querySelectorAll('.btn-slide');
// 	const segments = document.querySelectorAll('.segment');
// 	const categories = document.querySelectorAll('.categories');
// 	const menuBars = document.querySelectorAll('.menu-bar');
// 	const underMenus = document.querySelectorAll('.under-menu');
// 	const segmentSlides = document.querySelectorAll('.segment-slide');
// 	const textPodsegment = document.querySelector('.text-podsegment');

// 	const combinationMapping = {
// 			"Фармацевтика-Картонная коробка": { 
// 					btn: [0, 1, 2, 3, 4], slide: [0, 1, 2, 3, 4] 
// 			},
// 			"БАД-Картонная коробка": { 
// 					btn: [0, 1, 2, 4], slide: [0, 1, 2, 4]
// 			},
// 			"Косметика и парфюмерия-Картонная коробка": { 
// 					btn: [0, 5, 4], slide: [0, 5, 4] 
// 			},
// 			"Стоматология-Картонная коробка": { 
// 					btn: [19, 20, 21, 4], slide: [19, 20, 21, 4]
// 			},
// 			"Витамины-Картонная коробка": { 
// 					btn: [0, 1, 2, 4], slide: [0, 1, 2, 4]
// 			},
// 			"Продукты питания-Картонная коробка": { 
// 					btn: [6, 7, 8, 9, 10, 4], slide: [6, 7, 8, 9, 10, 4] 
// 			},
// 			"Кондитерские изделия-Картонная коробка": { 
// 					btn: [11, 12, 13, 14, 4], slide: [11, 12, 13, 14, 4] 
// 			},
// 			"Замороженные продукты-Картонная коробка": { 
// 					btn: [15, 16, 17, 18, 4], slide: [15, 16, 17, 18, 4]
// 			},
// 			"Промышленный-Картонная коробка": { 
// 					btn: [22, 23, 24, 25, 26, 27], slide: [22, 23, 24, 25, 26, 27] 
// 			}
// 	};

// 	// Функция для обновления активной кнопки и текста
// 	function updateActiveButton() {
// 			const activeIndex = swiper.activeIndex; 
// 			const activeButton = btnSlides[activeIndex]; // Находим соответствующую кнопку

// 			// Обновляем текст
// 			if (textPodsegment && activeButton) {
// 					textPodsegment.textContent = activeButton.textContent;
// 			}

// 			// Убираем класс 'active' у всех кнопок и добавляем к текущей
// 			btnSlides.forEach((btn) => btn.classList.remove('active'));
// 			if (activeButton) {
// 					activeButton.classList.add('active');
// 			}
// 	}

// 	// Обработчик для кнопок слайдов
// 	btnSlides.forEach((button) => {
// 			button.addEventListener('click', () => {
// 					const index = Array.from(btnSlides).indexOf(button);
// 					if (index !== -1) {
// 							swiper.slideTo(index);
// 					}
// 			});
// 	});

// 	// Подписываемся на событие slideChange
// 	swiper.on('slideChange', updateActiveButton);

// 	// Общая логика для обновления отображения
// 	function updateDisplay() {
// 			const activeSegment = document.querySelector('.segment.active');
// 			const activeCategory = document.querySelector('.categories.active');
// 			const activeUnderMenu = document.querySelector('.under-menu.active');
// 			const activeMenuBar = document.querySelector('.menu-bar.active');

// 			// Функция для обновления видимости слайдов и кнопок
// 			const updateVisibility = (key) => {
// 					btnSlides.forEach(btn => btn.classList.remove('show'));
// 					segmentSlides.forEach(slide => slide.classList.remove('show'));

// 					if (combinationMapping[key]) {
// 							const config = combinationMapping[key];
// 							config.btn.forEach(index => btnSlides[index].classList.add('show'));
// 							config.slide.forEach(index => segmentSlides[index].classList.add('show'));
// 					}
// 					swiper.update();
// 			};

// 			// Проверяем сегменты и категории
// 			if (activeSegment && activeCategory) {
// 					const segmentValue = activeSegment.getAttribute('value');
// 					const categoryValue = activeCategory.getAttribute('value');
// 					updateVisibility(`${segmentValue}-${categoryValue}`);
// 			}

// 			// Проверяем подменю и меню
// 			if (activeUnderMenu && activeMenuBar) {
// 					const underMenuValue = activeUnderMenu.getAttribute('value');
// 					const menuBarValue = activeMenuBar.getAttribute('value');
// 					updateVisibility(`${underMenuValue}-${menuBarValue}`);
// 			}
// 	}

// 	// Установка обработчиков событий для сегментов и категорий
// 	const addClickListener = (elements) => {
// 			elements.forEach(element => {
// 					element.addEventListener('click', function () {
// 							elements.forEach(el => el.classList.remove('active'));
// 							this.classList.add('active');
// 							updateDisplay();
// 					});
// 			});
// 	};

// 	addClickListener(segments);
// 	addClickListener(categories);
// 	addClickListener(menuBars);
// 	addClickListener(underMenus);

// 	updateDisplay(); // Начальный вызов для инициализации
// });







// СМЕНА ТЕКСТА
function logActiveValues() {

	const activeCategory = document.querySelector('.categories.active');
	const activeSegment = document.querySelector('.segment.active');
	const textDescription = document.querySelector('.text-description');

	const categoryValue = activeCategory ? activeCategory.getAttribute('value') : 'Нет активной категории';
	const segmentValue = activeSegment ? activeSegment.getAttribute('value') : 'Нет активного сегмента';

	const combinationsText = {
			'Картонная коробка БАД': 'Текст для Картонной коробки и БАД',
			'Картонная коробка Косметика и парфюмерия': 'Текст для Картонной коробки Косметика и парфюмерия',
			'Картонная коробка Фармацевтика': 'Текст для Картонной коробки и Фармацевтика',
			'Картонная коробка Стоматология': 'Текст для Картонной коробки и Стомотология',
			'Картонная коробка Продукты питания': 'Текст для Картонной коробки и Продукты питания',
			'Картонная коробка Кондитерские изделия': 'Текст для Картонной коробки и Кондитерские изделия',
			'Картонная коробка Замороженные продукты': 'Текст для Картонной коробки и Замороженные продукты',
			'Картонная коробка Промышленный': 'Текст для Картонной коробки и Промышленный',
			'Картонная коробка Витамины': 'Текст для Картонной коробки и Витамины',
	};

	const activeBtn = `${categoryValue} ${segmentValue}`;
	const descriptionText = combinationsText[activeBtn] || 'Неизвестная комбинация';

	textDescription.textContent = descriptionText;

}
