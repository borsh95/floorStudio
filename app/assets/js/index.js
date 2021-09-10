"use strict";
// break points site
const break_desctop = 1920,
	break_desctopMid = 1450,
	break_desctopMin = 1230,
	break_table = 1024,
	break_mobile = 768,
	break_tel = 480;


/***** INITIALIZING PLUGINS ******/
// скрол страницы к нужной координате
let scrollingWindow = scrollWindow();

//fixed header
if (isElem('header')) {
	let fixedHeader = showHeader('header');

	function showHeader(el) {
		const $el = (typeof el === 'string') ? document.querySelector(el) : el;
		const $menu = $el.querySelector('.category-nav__menu');

		const htmlEl = document.documentElement;
		let offsetTopEl = $el.getBoundingClientRect().height;

		window.addEventListener('scroll', function () {
			if (window.pageYOffset > offsetTopEl + 40) {
				show();
			} else {
				fixed();
			}
		})

		window.addEventListener('resize', function () {
			offsetTopEl = $el.getBoundingClientRect().height;
		})

		function show() {
			if ($el.classList.contains('fixed')) return;

			if (window.innerWidth > 1024) {
				htmlEl.style.paddingTop = $el.offsetHeight + "px";
			} else {
				htmlEl.style.paddingTop = $el.offsetHeight + "px";
			}


			$el.classList.add('fixed');
		}

		function fixed() {
			if (!$el.classList.contains('fixed')) return;

			$el.classList.remove('fixed');
			htmlEl.style.paddingTop = '';
		}

		return {
			show,
			fixed,
		}
	}
}

// 	main slider 
if (isElem('.fullScreenSlider')) {
	const sliderNode = document.querySelector('.fullScreenSlider');

	const swiper = new Swiper(sliderNode, {
		effect: "coverflow",
		speed: 700,
		spaceBetween: 20,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		allowTouchMove: false,
		navigation: {
			nextEl: sliderNode.parentElement.querySelector('.slider-arr--next'),
			prevEl: sliderNode.parentElement.querySelector('.slider-arr--prev'),
		},
		pagination: {
			el: sliderNode.parentElement.querySelector('.slider-pagination'),
			clickable: true,
		},
		on: {
			beforeInit: function () {
				console.log(this.defaults)
			}
		}
	});
}
// 	main slider 
if (isElem('.mainSlider')) {
	const sliderNode = document.querySelector('.mainSlider');
	const swiper = new Swiper(sliderNode, {
		grabCursor: true,
		loop: true,
		noSwipingClass: 'btnGo',
		watchSlidesVisibility: true,
		watchOverflow: true,
		speed: 1000,
		autoplay: {
			delay: 4000,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
		},
		pagination: {
			el: sliderNode.parentElement.querySelector('.slider-pagination'),
		}
	});
}

// products slider	
if (isElem('.productsSlider')) {
	const $sliderNodes = document.querySelectorAll('.productsSlider');

	for (let $sliderNode of $sliderNodes) {
		const swiper = new Swiper($sliderNode, {
			loop: true,
			grabCursor: true,
			loopAdditionalSlides: 1,
			slidesPerView: 4,
			spaceBetween: 30,
			noSwipingClass: 'btn',
			watchSlidesProgress: true,
			watchOverflow: true,
			breakpoints: {
				300: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				769: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1025: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				1231: {
					slidesPerView: 4,
					spaceBetween: 30,
				}
			},
			pagination: {
				el: $sliderNode.parentElement.querySelector('.slider-pagination'),
			}
		});
	}
}
// products slider	
if (isElem('.similarSlider')) {
	const $sliderNodes = document.querySelectorAll('.similarSlider');

	for (let $sliderNode of $sliderNodes) {
		const swiper = new Swiper($sliderNode, {
			grabCursor: true,
			slidesPerView: 4,
			spaceBetween: 30,
			noSwipingClass: 'btn',
			watchSlidesProgress: true,
			breakpoints: {
				300: {
					slidesPerView: 1,
					spaceBetween: 20,
					initialSlide: 1,
				},
				[break_mobile + 1]: {
					initialSlide: 1,
					slidesPerView: 2,
					spaceBetween: 30,
				},
				[break_table + 1]: {
					slidesPerView: 3,
					spaceBetween: 25,
				},
				[break_desctopMin + 1]: {
					slidesPerView: 4,
					spaceBetween: 30,
				}
			}
		});
	}
}

// gallery slider	
if (isElem('.gallery')) {
	const thumbsSliderNode = document.querySelector('.gallery__thumbs'),
		fullSliderNode = document.querySelector('.gallery__slider');


	/* thumbs */
	let galleryThumbs = new Swiper(thumbsSliderNode, {
		spaceBetween: 30,
		slidesPerView: "auto",
		watchSlidesProgress: true,
		freeMode: {
			enabled: true,
			sticky: true,
		},
		breakpoints: {
			300: {
				direction: 'horizontal',
			},
			[break_table + 1]: {
				direction: 'vertical',
				slidesPerView: "auto",
			}
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		},
		mousewheel: true,
	});

	let galleryFull = new Swiper(fullSliderNode, {
		spaceBetween: 10,
		slidesPerView: "auto",
		// autoplay: {
		// 	delay: 5000
		// },
		navigation: {
			prevEl: fullSliderNode.parentElement.querySelector('.slider-arr--prev'),
			nextEl: fullSliderNode.parentElement.querySelector('.slider-arr--next'),
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
}

//slinky header menu
if (isElem('header .bro-menu')) {
	const $menu = document.querySelector('header .bro-menu');
	const menu = broMenu($menu);
	const mediaQuery = window.matchMedia('(max-width: 1230px)');

	toggleMenu();

	mediaQuery.addListener(toggleMenu)

	function toggleMenu() {
		if (mediaQuery.matches) {
			menu.init();

		} else {
			menu.destroy();
		}
	}
}

// window modal
if (isElem('.v-modal')) {
	modalWindow();
}

//инициализация ползунков
if (isElem('.js-slider')) {
	const sliderList = document.querySelectorAll('.js-slider');

	for (const slider of sliderList) {
		sliderFromTo(slider);
	}
}

// accardion
if (isElem('.accardion')) {
	const accardions = document.querySelectorAll('.accardion');
	const accardionPlagin = accardion();

	for (const item of accardions) {
		accardionPlagin().init(item);
	}
}

// tel mask
if (document.querySelector('input[type="tel"]')) {
	const inputsTel = document.querySelectorAll('input[type="tel"]');
	const im = new Inputmask('+375 (99) 999-99-99');
	im.mask(inputsTel);
}

// number slider
if (isElem('.number-slider')) {
	const numberSliders = document.querySelectorAll('.number-slider');

	for (const slider of numberSliders) {
		numberSlider(slider);
	}
}

// фильтрация элементов
if (isElem('.js-bFilter')) {

	for (const $el of document.querySelectorAll('.js-bFilter')) {
		bFilter($el);
	}
}

// bTabs
if (isElem('.b-tabs')) {
	const tabs = document.querySelectorAll('.b-tabs');

	for (const tab of tabs) {

		bTabs(tab);
	}
}

/****** CUSTOM PLUGIN ******/

//Hamburger открытия мобильного меню
if (isElem('.header__hamburger')) {
	const hamburgerBtn = document.querySelector('.header__hamburger');
	const burgerBlock = document.querySelector('.header__burger');
	const burgerInner = burgerBlock.querySelector('.header__burger-inner');
	const bodyEl = document.querySelector('body');
	const header = document.querySelector('header');

	hamburgerBtn.addEventListener('click', function () {
		this.classList.toggle('active');

		burgerBlock.style.top = header.offsetHeight + 'px';

		let isActive = this.classList.contains('active');
		burgerBlock.classList[isActive ? 'add' : 'remove']('open');
		burgerInner.style.maxHeight = (isActive) ? `calc(100vh - ${header.offsetHeight}px)` : '';
		bodyEl.style.overflow = (isActive) ? 'hidden' : '';
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth > 1230 && burgerBlock.classList.contains('open')) {
			hamburgerBtn.classList.remove('active');
			burgerBlock.classList.remove('open');
			bodyEl.style.overflow = '';
		}
	});

	burgerBlock.addEventListener('click', function (e) {
		if (!e.target.contains(burgerBlock)) return;

		hamburgerBtn.classList.remove('active');
		burgerBlock.classList.remove('open');
		bodyEl.style.overflow = '';
	});
}

// под меню с гамбургером внутри основного меню
if (isElem('.menu__item--drop')) {
	const menuDrop = document.querySelector('.menu__item--drop');
	const toggle = menuDrop.querySelector('.menu__item-toggle');
	const linkbtn = menuDrop.querySelector('.menu__item-toggle ~ .menu__link');
	const itemMenuList = document.querySelectorAll('.menu__item:not(.menu__item--drop)');


	toggle.addEventListener('click', function () {
		toggle.classList.toggle('active');
		menuDrop.classList.toggle('active');
	});

	linkbtn.addEventListener('click', function (e) {
		e.preventDefault();
		toggle.classList.toggle('active');
		menuDrop.classList.toggle('active');
	});

	document.addEventListener('click', function (ev) {
		if (!ev.target.closest('.menu__item--drop')) {
			if (menuDrop.classList.contains('active')) {
				toggle.classList.remove('active');
				menuDrop.classList.remove('active');
			}
		}
	})
}

// v-up кнопка вверх
(function () {
	document.querySelector('body').insertAdjacentHTML('afterbegin', `
		<div class="v-up"></div>
	`);

	const btnDown = document.querySelector('.v-up');
	let vUpTriggerTimer = 0;

	vUp(btnDown, getScroledWindow);

	btnDown.addEventListener('click', function () {
		//backToTop(-45, 0);
		scrollingWindow.startAmimationScroll(1);
	});

	window.addEventListener('scroll', function () {
		clearTimeout(vUpTriggerTimer);
		vUpTriggerTimer = setTimeout(() => {
			vUp(btnDown, getScroledWindow);
		}, 200)
	});

	//пролистываине окна вверх при клике на кнопку
	function vUp(btn, scroled) {
		if (scroled() > (window.innerHeight / 2)) {
			btn.classList.add('active');
		} else if (scroled() < (window.innerHeight / 2) || btn.classList.contains('active')) {
			btn.classList.remove('active');
		}
	}

	//прокрутка окна вверх вниз
	function backToTop(interval, to) {
		if (window.pageYOffset <= to) return;

		window.scrollBy(0, interval);
		setTimeout(() => {
			backToTop(interval, to)
		}, 0);
	}

	//на сколько прокручено окно
	function getScroledWindow() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
}());

//	modal window
function modalWindow() {
	const body = document.querySelector('body'),
		modalEls = document.querySelectorAll('.v-modal'),
		btnOpenClassName = "js-openModal",
		btnCloseClassName = 'js-closeModal';

	document.addEventListener('click', function (e) {
		if (e.target.closest(`.${btnOpenClassName}`) && e.target.dataset.typeModal) {
			e.preventDefault();
			const typeModal = e.target.dataset['typeModal'];

			for (let $modal of modalEls) {

				if ($modal.dataset && $modal.dataset['typeModal'] === typeModal) {
					$modal.classList.add('active');

					e.preventDefault();
					const scrollBarWidth = window.innerWidth - body.offsetWidth;
					body.style.overflow = 'hidden';
					body.style.paddingRight = scrollBarWidth + "px";
					break;
				}
			}
		}
		else if (e.target.classList.contains('v-modal__inner') || e.target.closest(`.${btnCloseClassName}`)) {
			e.target.closest('.v-modal').classList.remove('active');
			body.style.overflow = '';
			body.style.paddingRight = "";
		}
	});
}

/***** FUNCTION PLUGIN ******/

//slinky menu
function broMenu(selector, options) {
	const $menu = typeof selector === "string" ? document.querySelector(selector) : selector;
	const $level_1 = $menu.lastElementChild;
	const $subMenuList = $menu.querySelectorAll('li > ul');
	const $subMenuLink = $menu.querySelectorAll('li > a');
	let activated;

	let defaulOptions = {
		arrow: `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M12.219 2.281L10.78 3.72 18.062 11H2v2h16.063l-7.282 7.281 1.438 1.438 9-9 .687-.719-.687-.719z" />
			</svg>
		`
	}

	Object.assign(defaulOptions, options);

	let $activeUl;
	let translate = 0;

	const method = {
		init() {
			if (activated) return;

			$menu.classList.add('bro-menu');

			for (let submenu of $subMenuList) {
				const link = submenu.parentElement.querySelector('li > a');
				link.classList.add('bro-menu__next');
				submenu.classList.add('bro-menu__submenu');

				_addBtnBack(submenu, link);
				_addBtnNext(link);

				activated = true;
			}

			for (const $link of $subMenuLink) {
				$link.classList.add('active');
			}

			$menu.addEventListener('click', clickHandler);

			window.addEventListener('resize', _setHeighMenu);
		},

		destroy() {
			if (!activated) return;

			/* Удаляем обработчики событий */
			$menu.removeEventListener('click', clickHandler);
			window.removeEventListener('resize', _setHeighMenu);

			/* Удаляем классы плагина на ссылках и кнопку назад */
			for (const $link of $menu.querySelectorAll('.link')) {
				if ($link.classList.contains('bro-menu__back')) {
					$link.closest('li').remove();
					continue;
				}

				$link.classList.remove('link');
				$link.classList.remove('bro-menu__next');
			}

			/* Удаляем классы плагина на вложеных менюшках	*/
			for (const $subMenu of $menu.querySelectorAll('.bro-menu__submenu')) {
				$subMenu.classList.remove('bro-menu__submenu')
			}

			/* Удаляем стрелки в ссылках */
			for (const $arr of $menu.querySelectorAll('.bro-menu__arr')) {
				$arr.remove();
			}



			$activeUl && $activeUl.classList.remove('active');

			$menu.style.height = '';
			$level_1.style.transform = ``;
			translate = 0;
			activated = false;
		}
	}

	function clickHandler(e) {
		const target = e.target;

		if (target.closest('.bro-menu__next')) {
			e.preventDefault();

			const $nestedMenu = target.closest('li').querySelector('ul');

			if ($activeUl) $activeUl.classList.remove('active');

			$nestedMenu.classList.add('active');
			$nestedMenu.style.visibility = 'visible';
			translate -= 100;

			$level_1.style.transform = `translateX(${translate}%)`;
			$activeUl = $nestedMenu;

			scrollToVisible($activeUl);
			_setHeighMenu();
		}
		else if (target.closest('.bro-menu__back')) {
			e.preventDefault();

			const $upperMenu = $activeUl.parentElement.closest('ul');
			$upperMenu.classList.add('active');

			$activeUl.style.visibility = '';

			translate += 100;

			$level_1.style.transform = `translateX(${translate}%)`;
			$activeUl.classList.remove('active');
			$activeUl = $upperMenu;
			_setHeighMenu();
		}
	}

	function _addBtnNext(elem) {
		elem.classList.add('link')
		elem.insertAdjacentHTML('beforeend', `
			${defaulOptions.arrow}
		`);

		elem.lastElementChild.classList.add('bro-menu__arr');
	}

	function _addBtnBack(elem, link) {
		const href = link.getAttribute('href');

		elem.insertAdjacentHTML('afterbegin', `
			<li>
				<a class="bro-menu__back link" ${(href) ? `href=${href}` : ''}>
					${defaulOptions.arrow}
					${link.textContent}
				</a>
			</li>
		`);
	}

	function _setHeighMenu() {
		if (!$activeUl) return;

		$menu.style.height = $activeUl.offsetHeight + "px";
	}

	function scrollToVisible(el) {
		if (_getPosAbsWindow(el) > window.pageYOffset) return;

		backToTop(-10, _getPos(el));
	}

	function _getPosAbsWindow(elem) {
		const offsetTop = elem.getBoundingClientRect().top;

		return offsetTop - window.pageYOffset;
	}

	function _getPos(el) {
		return el.getBoundingClientRect().top + window.pageYOffset;
	}

	function backToTop(interval, to) {
		if (window.pageYOffset <= to) return;

		window.scrollBy(0, interval);
		setTimeout(() => {
			backToTop(interval, to)
		}, 0);
	}

	return method;
}

function sliderFromTo(selector) {
	const $el = (typeof selector === 'string') ? document.querySelector(selector) : selector;
	const $sliderPrice = $el.querySelector('.js-slider-handles'),
		$inputs = $el.querySelectorAll('.js-slider-input'),
		min = +$inputs[0].getAttribute('min') || 0,
		max = +$inputs[1].getAttribute('max') || 1000,
		start = +$el.dataset.sliderStart || 0,
		end = +$el.dataset.sliderEnd || 1000,
		step = +$el.dataset.sliderStep || 1;

	noUiSlider.create($sliderPrice, {
		start: [start, end],
		connect: true,
		step: step,
		range: {
			'min': [min],
			'max': [max]
		}
	});

	$sliderPrice.noUiSlider.on('update', function (values, handle) {
		$inputs[handle].value = (+values[handle]).toFixed(1);
	});

	$inputs.forEach(function (input, index) {
		input.addEventListener('change', function (e) {
			setRangeSlider(index, e.currentTarget.value)
		});
	});

	function setRangeSlider(i, value) {
		let arr = [null, null];
		arr[i] = value;

		$sliderPrice.noUiSlider.set(arr);
	}
}

// treeMenu('.categoryMenu ul')

// function treeMenu(menu) {
// 	const $el = (typeof menu === "string") ? document.querySelector(menu) : menu;

// 	for (const $li of $el.querySelectorAll('li')) {

// 	}

// 	$el.onclick = (e) => {
// 		if (!e.target.closest('a')) return;

// 		e.preventDefault();
// 		console.log(e.target);
// 	}
// }

//accardion
function accardion() {
	let headerDom = document.querySelector('header');

	return function () {
		let _mainElement = {}, // .accordion 
			_items = {}; // .accordion-item 

		return {
			init: function (element) {
				_mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
				_items = _mainElement.querySelectorAll('.accardion__item');
				_setupListeners(_mainElement, 'click', _clickHandler);
			}
		}

		function _clickHandler(e) {
			if (!e.target.closest('.accardion__item-header')) return;

			e.preventDefault();

			let header = e.target.closest('.accardion__item-header'),
				item = header.closest('.accardion__item'),
				itemActive = _getItem(_items, 'open');

			if (itemActive === undefined) {
				item.classList.add('open');
			} else {
				itemActive.classList.remove('open');

				if (itemActive !== item) {
					item.classList.add('open');

					scrollToVisible(item);
				}
			}
		}
	}

	function _setupListeners(elem, event, handler) {
		elem.addEventListener(event, handler);
	}

	function scrollToVisible(el) {
		if (_getPos(el) > window.pageYOffset) return;
		backToTop(-10, _getPos(el) - headerDom.offsetHeight - 30);
	}

	function _getPos(el) {
		return el.getBoundingClientRect().top + window.pageYOffset;
	}

	function _getItem(elements, className) {
		var element = undefined;
		elements.forEach(function (item) {
			if (item.classList.contains(className)) {
				element = item;
			}
		});
		return element;
	};

	function backToTop(interval, to) {
		if (window.pageYOffset <= to) return;

		window.scrollBy(0, interval);
		setTimeout(() => {
			backToTop(interval, to)
		}, 0);
	}
}

// bTabs
function bTabs(target) {
	let _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
		_eventTabsShow,
		_showTab = function (tabsLinkTarget) {
			var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
			tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
			tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.b-tabs__link.active');
			tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.b-tabs__pane.active');
			// если следующая вкладка равна активной, то завершаем работу
			if (tabsLinkTarget === tabsLinkActive) return;
			// удаляем классы у текущих активных элементов
			if (tabsLinkActive !== null) tabsLinkActive.classList.remove('active');

			if (tabsPaneShow !== null) tabsPaneShow.classList.remove('active');
			// добавляем классы к элементам (в завимости от выбранной вкладки)
			tabsLinkTarget.classList.add('active');
			tabsPaneTarget.classList.add('active');
			document.dispatchEvent(_eventTabsShow);
		},
		_switchTabTo = function (tabsLinkIndex) {
			var tabsLinks = _elemTabs.querySelectorAll('.b-tabs__link');
			if (tabsLinks.length > 0) {
				if (tabsLinkIndex > tabsLinks.length) {
					tabsLinkIndex = tabsLinks.length;
				} else if (tabsLinkIndex < 1) {
					tabsLinkIndex = 1;
				}
				_showTab(tabsLinks[tabsLinkIndex - 1]);
			}
		};

	_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

	_elemTabs.addEventListener('click', function (e) {
		var tabsLinkTarget = e.target;
		// завершаем выполнение функции, если кликнули не по ссылке
		if (!tabsLinkTarget.classList.contains('b-tabs__link')) return;

		e.preventDefault();
		_showTab(tabsLinkTarget);
	});

	return {
		showTab: function (target) {
			_showTab(target);
		},
		switchTabTo: function (index) {
			_switchTabTo(index);
		}
	}

};

// анимация скрола окна браузера
function scrollWindow() {
	let scrollAnimationId;
	let currentScroll = window.pageYOffset;
	let scrolls = false;

	function startAmimationScroll(newScrollY) {
		if (!scrolls) {
			currentScroll = window.pageYOffset;
			scrolls = true;
		}

		const deltaScroll = (newScrollY - currentScroll);

		currentScroll += deltaScroll * 0.15;
		window.scrollTo(0, currentScroll);

		if (Math.abs(deltaScroll) > 5) {
			scrollAnimationId = window.requestAnimationFrame(function () {
				startAmimationScroll(newScrollY);
			})
		} else {
			window.scrollTo(0, newScrollY);
			stopAnimationScroll();
			scrolls = false;
		}
	}

	function stopAnimationScroll() {
		window.cancelAnimationFrame(scrollAnimationId);
		scrollAnimationId = undefined;
	}

	return {
		startAmimationScroll,
		stopAnimationScroll,
	}
}

// number slider 
function numberSlider(selector) {
	const $el = typeof selector === 'string' ? document.querySelector(selector)
		: selector,
		input = $el.querySelector('.js-number-slider-input'),
		min = input.getAttribute('min');

	$el.addEventListener('click', clickHander);

	function clickHander(e) {
		if (e.target.closest('.js-number-slider-add')) {
			const old = +parseFloat(input.value) + 1;
			input.value = isFinite(old) ? old : min;
		}
		else if (e.target.closest('.js-number-slider-reduce')) {
			const old = +parseFloat(input.value) - 1;
			input.value = (+input.value <= +min) ? min : +parseFloat(input.value) - 1;
		}
	}
}

// bFilter
function bFilter(selector) {
	const $el = (typeof selector === 'string') ? document.querySelector(selector) : selector;
	const $filterableList = $el.querySelectorAll('.js-bFilter__filterable');

	_changeFilter($el.querySelector('[data-bfilter].active'));


	$el.addEventListener('click', function (e) {
		const filterBtn = e.target.closest('[data-bfilter]');

		if (filterBtn) {
			if (filterBtn.classList.contains('active')) return;

			$el.querySelector('[data-bfilter].active').classList.remove('active');
			filterBtn.classList.add('active');

			_changeFilter(filterBtn);
		}
	});

	function _changeFilter(activeToggle) {
		const filterClass = 'f-' + activeToggle.dataset['bfilter'];

		for (const filterable of $filterableList) {
			filterable.classList.remove('hide');

			if (!filterable.classList.contains(filterClass) && filterClass !== 'f-all') {
				filterable.classList.add('hide');
			}
		}
	}
}

/****** UTILS ******/
function isElem(selector) {
	return (document.querySelector(selector)) ? true : false;
}