"use strict"; // break points site

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var break_desctop = 1920,
    break_desctopMid = 1450,
    break_desctopMin = 1230,
    break_table = 1024,
    break_mobile = 768,
    break_tel = 480;
/***** INITIALIZING PLUGINS ******/
// скрол страницы к нужной координате

var scrollingWindow = scrollWindow(); //fixed header

if (isElem('header')) {
  var showHeader = function showHeader(el) {
    var $el = typeof el === 'string' ? document.querySelector(el) : el;
    var $menu = $el.querySelector('.category-nav__menu');
    var htmlEl = document.documentElement;
    var offsetTopEl = $el.getBoundingClientRect().height;
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > offsetTopEl + 40) {
        show();
      } else {
        fixed();
      }
    });
    window.addEventListener('resize', function () {
      offsetTopEl = $el.getBoundingClientRect().height;
    });

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
      show: show,
      fixed: fixed
    };
  };

  var fixedHeader = showHeader('header');
} // 	main slider 


if (isElem('.fullScreenSlider')) {
  var sliderNode = document.querySelector('.fullScreenSlider');
  var swiper = new Swiper(sliderNode, {
    effect: "coverflow",
    speed: 700,
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    allowTouchMove: false,
    navigation: {
      nextEl: sliderNode.parentElement.querySelector('.slider-arr--next'),
      prevEl: sliderNode.parentElement.querySelector('.slider-arr--prev')
    },
    pagination: {
      el: sliderNode.parentElement.querySelector('.slider-pagination'),
      clickable: true
    },
    on: {
      beforeInit: function beforeInit() {
        console.log(this.defaults);
      }
    }
  });
} // 	main slider 


if (isElem('.mainSlider')) {
  var _sliderNode = document.querySelector('.mainSlider');

  var _swiper = new Swiper(_sliderNode, {
    grabCursor: true,
    loop: true,
    noSwipingClass: 'btnGo',
    watchSlidesVisibility: true,
    watchOverflow: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },
    pagination: {
      el: _sliderNode.parentElement.querySelector('.slider-pagination')
    }
  });
} // products slider	


if (isElem('.productsSlider')) {
  var $sliderNodes = document.querySelectorAll('.productsSlider');

  var _iterator = _createForOfIteratorHelper($sliderNodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var $sliderNode = _step.value;

      var _swiper2 = new Swiper($sliderNode, {
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
            spaceBetween: 20
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          1231: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
        pagination: {
          el: $sliderNode.parentElement.querySelector('.slider-pagination')
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} // products slider	


if (isElem('.similarSlider')) {
  var _$sliderNodes = document.querySelectorAll('.similarSlider');

  var _iterator2 = _createForOfIteratorHelper(_$sliderNodes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _breakpoints;

      var _$sliderNode = _step2.value;

      var _swiper3 = new Swiper(_$sliderNode, {
        grabCursor: true,
        slidesPerView: 4,
        spaceBetween: 30,
        noSwipingClass: 'btn',
        watchSlidesProgress: true,
        breakpoints: (_breakpoints = {
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
            initialSlide: 1
          }
        }, _defineProperty(_breakpoints, break_mobile + 1, {
          initialSlide: 1,
          slidesPerView: 2,
          spaceBetween: 30
        }), _defineProperty(_breakpoints, break_table + 1, {
          slidesPerView: 3,
          spaceBetween: 25
        }), _defineProperty(_breakpoints, break_desctopMin + 1, {
          slidesPerView: 4,
          spaceBetween: 30
        }), _breakpoints)
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // gallery slider	


if (isElem('.gallery')) {
  var thumbsSliderNode = document.querySelector('.gallery__thumbs'),
      fullSliderNode = document.querySelector('.gallery__slider');
  /* thumbs */

  var galleryThumbs = new Swiper(thumbsSliderNode, {
    spaceBetween: 30,
    slidesPerView: "auto",
    watchSlidesProgress: true,
    freeMode: {
      enabled: true,
      sticky: true
    },
    breakpoints: _defineProperty({
      300: {
        direction: 'horizontal'
      }
    }, break_table + 1, {
      direction: 'vertical',
      slidesPerView: "auto"
    }),
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    mousewheel: true
  });
  var galleryFull = new Swiper(fullSliderNode, {
    spaceBetween: 10,
    slidesPerView: "auto",
    // autoplay: {
    // 	delay: 5000
    // },
    navigation: {
      prevEl: fullSliderNode.parentElement.querySelector('.slider-arr--prev'),
      nextEl: fullSliderNode.parentElement.querySelector('.slider-arr--next')
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
} //slinky header menu


if (isElem('header .bro-menu')) {
  var toggleMenu = function toggleMenu() {
    if (mediaQuery.matches) {
      menu.init();
    } else {
      menu.destroy();
    }
  };

  var $menu = document.querySelector('header .bro-menu');
  var menu = broMenu($menu);
  var mediaQuery = window.matchMedia('(max-width: 1230px)');
  toggleMenu();
  mediaQuery.addListener(toggleMenu);
} // window modal


if (isElem('.v-modal')) {
  modalWindow();
} //инициализация ползунков


if (isElem('.js-slider')) {
  var sliderList = document.querySelectorAll('.js-slider');

  var _iterator3 = _createForOfIteratorHelper(sliderList),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var slider = _step3.value;
      sliderFromTo(slider);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
} // accardion


if (isElem('.accardion')) {
  var accardions = document.querySelectorAll('.accardion');
  var accardionPlagin = accardion();

  var _iterator4 = _createForOfIteratorHelper(accardions),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var item = _step4.value;
      accardionPlagin().init(item);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
} // tel mask


if (document.querySelector('input[type="tel"]')) {
  var inputsTel = document.querySelectorAll('input[type="tel"]');
  var im = new Inputmask('+375 (99) 999-99-99');
  im.mask(inputsTel);
} // number slider


if (isElem('.number-slider')) {
  var numberSliders = document.querySelectorAll('.number-slider');

  var _iterator5 = _createForOfIteratorHelper(numberSliders),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _slider = _step5.value;
      numberSlider(_slider);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
} // фильтрация элементов


if (isElem('.js-bFilter')) {
  var _iterator6 = _createForOfIteratorHelper(document.querySelectorAll('.js-bFilter')),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var $el = _step6.value;
      bFilter($el);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
} // bTabs


if (isElem('.b-tabs')) {
  var tabs = document.querySelectorAll('.b-tabs');

  var _iterator7 = _createForOfIteratorHelper(tabs),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var tab = _step7.value;
      bTabs(tab);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
}
/****** CUSTOM PLUGIN ******/
//Hamburger открытия мобильного меню


if (isElem('.header__hamburger')) {
  var hamburgerBtn = document.querySelector('.header__hamburger');
  var burgerBlock = document.querySelector('.header__burger');
  var burgerInner = burgerBlock.querySelector('.header__burger-inner');
  var bodyEl = document.querySelector('body');
  var header = document.querySelector('header');
  hamburgerBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    burgerBlock.style.top = header.offsetHeight + 'px';
    var isActive = this.classList.contains('active');
    burgerBlock.classList[isActive ? 'add' : 'remove']('open');
    burgerInner.style.maxHeight = isActive ? "calc(100vh - ".concat(header.offsetHeight, "px)") : '';
    bodyEl.style.overflow = isActive ? 'hidden' : '';
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
} // под меню с гамбургером внутри основного меню


if (isElem('.menu__item--drop')) {
  var menuDrop = document.querySelector('.menu__item--drop');
  var toggle = menuDrop.querySelector('.menu__item-toggle');
  var linkbtn = menuDrop.querySelector('.menu__item-toggle ~ .menu__link');
  var itemMenuList = document.querySelectorAll('.menu__item:not(.menu__item--drop)');
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
  });
} // v-up кнопка вверх


(function () {
  document.querySelector('body').insertAdjacentHTML('afterbegin', "\n\t\t<div class=\"v-up\"></div>\n\t");
  var btnDown = document.querySelector('.v-up');
  var vUpTriggerTimer = 0;
  vUp(btnDown, getScroledWindow);
  btnDown.addEventListener('click', function () {
    //backToTop(-45, 0);
    scrollingWindow.startAmimationScroll(1);
  });
  window.addEventListener('scroll', function () {
    clearTimeout(vUpTriggerTimer);
    vUpTriggerTimer = setTimeout(function () {
      vUp(btnDown, getScroledWindow);
    }, 200);
  }); //пролистываине окна вверх при клике на кнопку

  function vUp(btn, scroled) {
    if (scroled() > window.innerHeight / 2) {
      btn.classList.add('active');
    } else if (scroled() < window.innerHeight / 2 || btn.classList.contains('active')) {
      btn.classList.remove('active');
    }
  } //прокрутка окна вверх вниз


  function backToTop(interval, to) {
    if (window.pageYOffset <= to) return;
    window.scrollBy(0, interval);
    setTimeout(function () {
      backToTop(interval, to);
    }, 0);
  } //на сколько прокручено окно


  function getScroledWindow() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
})(); //	modal window


function modalWindow() {
  var body = document.querySelector('body'),
      modalEls = document.querySelectorAll('.v-modal'),
      btnOpenClassName = "js-openModal",
      btnCloseClassName = 'js-closeModal';
  document.addEventListener('click', function (e) {
    if (e.target.closest(".".concat(btnOpenClassName)) && e.target.dataset.typeModal) {
      e.preventDefault();
      var typeModal = e.target.dataset['typeModal'];

      var _iterator8 = _createForOfIteratorHelper(modalEls),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var $modal = _step8.value;

          if ($modal.dataset && $modal.dataset['typeModal'] === typeModal) {
            $modal.classList.add('active');
            e.preventDefault();
            var scrollBarWidth = window.innerWidth - body.offsetWidth;
            body.style.overflow = 'hidden';
            body.style.paddingRight = scrollBarWidth + "px";
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    } else if (e.target.classList.contains('v-modal__inner') || e.target.closest(".".concat(btnCloseClassName))) {
      e.target.closest('.v-modal').classList.remove('active');
      body.style.overflow = '';
      body.style.paddingRight = "";
    }
  });
}
/***** FUNCTION PLUGIN ******/
//slinky menu


function broMenu(selector, options) {
  var $menu = typeof selector === "string" ? document.querySelector(selector) : selector;
  var $level_1 = $menu.lastElementChild;
  var $subMenuList = $menu.querySelectorAll('li > ul');
  var $subMenuLink = $menu.querySelectorAll('li > a');
  var activated;
  var defaulOptions = {
    arrow: "\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n\t\t\t<path d=\"M12.219 2.281L10.78 3.72 18.062 11H2v2h16.063l-7.282 7.281 1.438 1.438 9-9 .687-.719-.687-.719z\" />\n\t\t\t</svg>\n\t\t"
  };
  Object.assign(defaulOptions, options);
  var $activeUl;
  var translate = 0;
  var method = {
    init: function init() {
      if (activated) return;
      $menu.classList.add('bro-menu');

      var _iterator9 = _createForOfIteratorHelper($subMenuList),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var submenu = _step9.value;
          var link = submenu.parentElement.querySelector('li > a');
          link.classList.add('bro-menu__next');
          submenu.classList.add('bro-menu__submenu');

          _addBtnBack(submenu, link);

          _addBtnNext(link);

          activated = true;
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      var _iterator10 = _createForOfIteratorHelper($subMenuLink),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var $link = _step10.value;
          $link.classList.add('active');
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      $menu.addEventListener('click', clickHandler);
      window.addEventListener('resize', _setHeighMenu);
    },
    destroy: function destroy() {
      if (!activated) return;
      /* Удаляем обработчики событий */

      $menu.removeEventListener('click', clickHandler);
      window.removeEventListener('resize', _setHeighMenu);
      /* Удаляем классы плагина на ссылках и кнопку назад */

      var _iterator11 = _createForOfIteratorHelper($menu.querySelectorAll('.link')),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var $link = _step11.value;

          if ($link.classList.contains('bro-menu__back')) {
            $link.closest('li').remove();
            continue;
          }

          $link.classList.remove('link');
          $link.classList.remove('bro-menu__next');
        }
        /* Удаляем классы плагина на вложеных менюшках	*/

      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      var _iterator12 = _createForOfIteratorHelper($menu.querySelectorAll('.bro-menu__submenu')),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var $subMenu = _step12.value;
          $subMenu.classList.remove('bro-menu__submenu');
        }
        /* Удаляем стрелки в ссылках */

      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      var _iterator13 = _createForOfIteratorHelper($menu.querySelectorAll('.bro-menu__arr')),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var $arr = _step13.value;
          $arr.remove();
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }

      $activeUl && $activeUl.classList.remove('active');
      $menu.style.height = '';
      $level_1.style.transform = "";
      translate = 0;
      activated = false;
    }
  };

  function clickHandler(e) {
    var target = e.target;

    if (target.closest('.bro-menu__next')) {
      e.preventDefault();
      var $nestedMenu = target.closest('li').querySelector('ul');
      if ($activeUl) $activeUl.classList.remove('active');
      $nestedMenu.classList.add('active');
      $nestedMenu.style.visibility = 'visible';
      translate -= 100;
      $level_1.style.transform = "translateX(".concat(translate, "%)");
      $activeUl = $nestedMenu;
      scrollToVisible($activeUl);

      _setHeighMenu();
    } else if (target.closest('.bro-menu__back')) {
      e.preventDefault();
      var $upperMenu = $activeUl.parentElement.closest('ul');
      $upperMenu.classList.add('active');
      $activeUl.style.visibility = '';
      translate += 100;
      $level_1.style.transform = "translateX(".concat(translate, "%)");
      $activeUl.classList.remove('active');
      $activeUl = $upperMenu;

      _setHeighMenu();
    }
  }

  function _addBtnNext(elem) {
    elem.classList.add('link');
    elem.insertAdjacentHTML('beforeend', "\n\t\t\t".concat(defaulOptions.arrow, "\n\t\t"));
    elem.lastElementChild.classList.add('bro-menu__arr');
  }

  function _addBtnBack(elem, link) {
    var href = link.getAttribute('href');
    elem.insertAdjacentHTML('afterbegin', "\n\t\t\t<li>\n\t\t\t\t<a class=\"bro-menu__back link\" ".concat(href ? "href=".concat(href) : '', ">\n\t\t\t\t\t").concat(defaulOptions.arrow, "\n\t\t\t\t\t").concat(link.textContent, "\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t"));
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
    var offsetTop = elem.getBoundingClientRect().top;
    return offsetTop - window.pageYOffset;
  }

  function _getPos(el) {
    return el.getBoundingClientRect().top + window.pageYOffset;
  }

  function backToTop(interval, to) {
    if (window.pageYOffset <= to) return;
    window.scrollBy(0, interval);
    setTimeout(function () {
      backToTop(interval, to);
    }, 0);
  }

  return method;
}

function sliderFromTo(selector) {
  var $el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  var $sliderPrice = $el.querySelector('.js-slider-handles'),
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
      setRangeSlider(index, e.currentTarget.value);
    });
  });

  function setRangeSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    $sliderPrice.noUiSlider.set(arr);
  }
} // treeMenu('.categoryMenu ul')
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
  var headerDom = document.querySelector('header');
  return function () {
    var _mainElement = {},
        // .accordion 
    _items = {}; // .accordion-item 

    return {
      init: function init(element) {
        _mainElement = typeof element === 'string' ? document.querySelector(element) : element;
        _items = _mainElement.querySelectorAll('.accardion__item');

        _setupListeners(_mainElement, 'click', _clickHandler);
      }
    };

    function _clickHandler(e) {
      if (!e.target.closest('.accardion__item-header')) return;
      e.preventDefault();

      var header = e.target.closest('.accardion__item-header'),
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
  };

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
  }

  ;

  function backToTop(interval, to) {
    if (window.pageYOffset <= to) return;
    window.scrollBy(0, interval);
    setTimeout(function () {
      backToTop(interval, to);
    }, 0);
  }
} // bTabs


function bTabs(target) {
  var _elemTabs = typeof target === 'string' ? document.querySelector(target) : target,
      _eventTabsShow,
      _showTab = function _showTab(tabsLinkTarget) {
    var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
    tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
    tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.b-tabs__link.active');
    tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.b-tabs__pane.active'); // если следующая вкладка равна активной, то завершаем работу

    if (tabsLinkTarget === tabsLinkActive) return; // удаляем классы у текущих активных элементов

    if (tabsLinkActive !== null) tabsLinkActive.classList.remove('active');
    if (tabsPaneShow !== null) tabsPaneShow.classList.remove('active'); // добавляем классы к элементам (в завимости от выбранной вкладки)

    tabsLinkTarget.classList.add('active');
    tabsPaneTarget.classList.add('active');
    document.dispatchEvent(_eventTabsShow);
  },
      _switchTabTo = function _switchTabTo(tabsLinkIndex) {
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

  _eventTabsShow = new CustomEvent('tab.show', {
    detail: _elemTabs
  });

  _elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target; // завершаем выполнение функции, если кликнули не по ссылке

    if (!tabsLinkTarget.classList.contains('b-tabs__link')) return;
    e.preventDefault();

    _showTab(tabsLinkTarget);
  });

  return {
    showTab: function showTab(target) {
      _showTab(target);
    },
    switchTabTo: function switchTabTo(index) {
      _switchTabTo(index);
    }
  };
}

; // анимация скрола окна браузера

function scrollWindow() {
  var scrollAnimationId;
  var currentScroll = window.pageYOffset;
  var scrolls = false;

  function startAmimationScroll(newScrollY) {
    if (!scrolls) {
      currentScroll = window.pageYOffset;
      scrolls = true;
    }

    var deltaScroll = newScrollY - currentScroll;
    currentScroll += deltaScroll * 0.15;
    window.scrollTo(0, currentScroll);

    if (Math.abs(deltaScroll) > 5) {
      scrollAnimationId = window.requestAnimationFrame(function () {
        startAmimationScroll(newScrollY);
      });
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
    startAmimationScroll: startAmimationScroll,
    stopAnimationScroll: stopAnimationScroll
  };
} // number slider 


function numberSlider(selector) {
  var $el = typeof selector === 'string' ? document.querySelector(selector) : selector,
      input = $el.querySelector('.js-number-slider-input'),
      min = input.getAttribute('min');
  $el.addEventListener('click', clickHander);

  function clickHander(e) {
    if (e.target.closest('.js-number-slider-add')) {
      var old = +parseFloat(input.value) + 1;
      input.value = isFinite(old) ? old : min;
    } else if (e.target.closest('.js-number-slider-reduce')) {
      var _old = +parseFloat(input.value) - 1;

      input.value = +input.value <= +min ? min : +parseFloat(input.value) - 1;
    }
  }
} // bFilter


function bFilter(selector) {
  var $el = typeof selector === 'string' ? document.querySelector(selector) : selector;
  var $filterableList = $el.querySelectorAll('.js-bFilter__filterable');

  _changeFilter($el.querySelector('[data-bfilter].active'));

  $el.addEventListener('click', function (e) {
    var filterBtn = e.target.closest('[data-bfilter]');

    if (filterBtn) {
      if (filterBtn.classList.contains('active')) return;
      $el.querySelector('[data-bfilter].active').classList.remove('active');
      filterBtn.classList.add('active');

      _changeFilter(filterBtn);
    }
  });

  function _changeFilter(activeToggle) {
    var filterClass = 'f-' + activeToggle.dataset['bfilter'];

    var _iterator14 = _createForOfIteratorHelper($filterableList),
        _step14;

    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var filterable = _step14.value;
        filterable.classList.remove('hide');

        if (!filterable.classList.contains(filterClass) && filterClass !== 'f-all') {
          filterable.classList.add('hide');
        }
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  }
}
/****** UTILS ******/


function isElem(selector) {
  return document.querySelector(selector) ? true : false;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJyZWFrX2Rlc2N0b3AiLCJicmVha19kZXNjdG9wTWlkIiwiYnJlYWtfZGVzY3RvcE1pbiIsImJyZWFrX3RhYmxlIiwiYnJlYWtfbW9iaWxlIiwiYnJlYWtfdGVsIiwic2Nyb2xsaW5nV2luZG93Iiwic2Nyb2xsV2luZG93IiwiaXNFbGVtIiwic2hvd0hlYWRlciIsImVsIiwiJGVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJG1lbnUiLCJodG1sRWwiLCJkb2N1bWVudEVsZW1lbnQiLCJvZmZzZXRUb3BFbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsInNob3ciLCJmaXhlZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaW5uZXJXaWR0aCIsInN0eWxlIiwicGFkZGluZ1RvcCIsIm9mZnNldEhlaWdodCIsImFkZCIsInJlbW92ZSIsImZpeGVkSGVhZGVyIiwic2xpZGVyTm9kZSIsInN3aXBlciIsIlN3aXBlciIsImVmZmVjdCIsInNwZWVkIiwic3BhY2VCZXR3ZWVuIiwiY292ZXJmbG93RWZmZWN0Iiwicm90YXRlIiwic3RyZXRjaCIsImRlcHRoIiwibW9kaWZpZXIiLCJzbGlkZVNoYWRvd3MiLCJhbGxvd1RvdWNoTW92ZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwYXJlbnRFbGVtZW50IiwicHJldkVsIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIm9uIiwiYmVmb3JlSW5pdCIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0cyIsImdyYWJDdXJzb3IiLCJsb29wIiwibm9Td2lwaW5nQ2xhc3MiLCJ3YXRjaFNsaWRlc1Zpc2liaWxpdHkiLCJ3YXRjaE92ZXJmbG93IiwiYXV0b3BsYXkiLCJkZWxheSIsInBhdXNlT25Nb3VzZUVudGVyIiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCIkc2xpZGVyTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHNsaWRlck5vZGUiLCJsb29wQWRkaXRpb25hbFNsaWRlcyIsInNsaWRlc1BlclZpZXciLCJ3YXRjaFNsaWRlc1Byb2dyZXNzIiwiYnJlYWtwb2ludHMiLCJpbml0aWFsU2xpZGUiLCJ0aHVtYnNTbGlkZXJOb2RlIiwiZnVsbFNsaWRlck5vZGUiLCJnYWxsZXJ5VGh1bWJzIiwiZnJlZU1vZGUiLCJlbmFibGVkIiwic3RpY2t5IiwiZGlyZWN0aW9uIiwia2V5Ym9hcmQiLCJvbmx5SW5WaWV3cG9ydCIsIm1vdXNld2hlZWwiLCJnYWxsZXJ5RnVsbCIsInRodW1icyIsInRvZ2dsZU1lbnUiLCJtZWRpYVF1ZXJ5IiwibWF0Y2hlcyIsIm1lbnUiLCJpbml0IiwiZGVzdHJveSIsImJyb01lbnUiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJtb2RhbFdpbmRvdyIsInNsaWRlckxpc3QiLCJzbGlkZXIiLCJzbGlkZXJGcm9tVG8iLCJhY2NhcmRpb25zIiwiYWNjYXJkaW9uUGxhZ2luIiwiYWNjYXJkaW9uIiwiaXRlbSIsImlucHV0c1RlbCIsImltIiwiSW5wdXRtYXNrIiwibWFzayIsIm51bWJlclNsaWRlcnMiLCJudW1iZXJTbGlkZXIiLCJiRmlsdGVyIiwidGFicyIsInRhYiIsImJUYWJzIiwiaGFtYnVyZ2VyQnRuIiwiYnVyZ2VyQmxvY2siLCJidXJnZXJJbm5lciIsImJvZHlFbCIsImhlYWRlciIsInRvZ2dsZSIsInRvcCIsImlzQWN0aXZlIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJlIiwidGFyZ2V0IiwibWVudURyb3AiLCJsaW5rYnRuIiwiaXRlbU1lbnVMaXN0IiwicHJldmVudERlZmF1bHQiLCJldiIsImNsb3Nlc3QiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJidG5Eb3duIiwidlVwVHJpZ2dlclRpbWVyIiwidlVwIiwiZ2V0U2Nyb2xlZFdpbmRvdyIsInN0YXJ0QW1pbWF0aW9uU2Nyb2xsIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImJ0biIsInNjcm9sZWQiLCJpbm5lckhlaWdodCIsImJhY2tUb1RvcCIsImludGVydmFsIiwidG8iLCJzY3JvbGxCeSIsInNjcm9sbFRvcCIsImJvZHkiLCJtb2RhbEVscyIsImJ0bk9wZW5DbGFzc05hbWUiLCJidG5DbG9zZUNsYXNzTmFtZSIsImRhdGFzZXQiLCJ0eXBlTW9kYWwiLCIkbW9kYWwiLCJzY3JvbGxCYXJXaWR0aCIsIm9mZnNldFdpZHRoIiwicGFkZGluZ1JpZ2h0Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwiJGxldmVsXzEiLCJsYXN0RWxlbWVudENoaWxkIiwiJHN1Yk1lbnVMaXN0IiwiJHN1Yk1lbnVMaW5rIiwiYWN0aXZhdGVkIiwiZGVmYXVsT3B0aW9ucyIsImFycm93IiwiT2JqZWN0IiwiYXNzaWduIiwiJGFjdGl2ZVVsIiwidHJhbnNsYXRlIiwibWV0aG9kIiwic3VibWVudSIsImxpbmsiLCJfYWRkQnRuQmFjayIsIl9hZGRCdG5OZXh0IiwiJGxpbmsiLCJjbGlja0hhbmRsZXIiLCJfc2V0SGVpZ2hNZW51IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIiRzdWJNZW51IiwiJGFyciIsInRyYW5zZm9ybSIsIiRuZXN0ZWRNZW51IiwidmlzaWJpbGl0eSIsInNjcm9sbFRvVmlzaWJsZSIsIiR1cHBlck1lbnUiLCJlbGVtIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiX2dldFBvc0Fic1dpbmRvdyIsIl9nZXRQb3MiLCJvZmZzZXRUb3AiLCIkc2xpZGVyUHJpY2UiLCIkaW5wdXRzIiwibWluIiwibWF4Iiwic3RhcnQiLCJzbGlkZXJTdGFydCIsImVuZCIsInNsaWRlckVuZCIsInN0ZXAiLCJzbGlkZXJTdGVwIiwibm9VaVNsaWRlciIsImNyZWF0ZSIsImNvbm5lY3QiLCJyYW5nZSIsInZhbHVlcyIsImhhbmRsZSIsInZhbHVlIiwidG9GaXhlZCIsImZvckVhY2giLCJpbnB1dCIsImluZGV4Iiwic2V0UmFuZ2VTbGlkZXIiLCJjdXJyZW50VGFyZ2V0IiwiaSIsImFyciIsInNldCIsImhlYWRlckRvbSIsIl9tYWluRWxlbWVudCIsIl9pdGVtcyIsImVsZW1lbnQiLCJfc2V0dXBMaXN0ZW5lcnMiLCJfY2xpY2tIYW5kbGVyIiwiaXRlbUFjdGl2ZSIsIl9nZXRJdGVtIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJoYW5kbGVyIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJfZWxlbVRhYnMiLCJfZXZlbnRUYWJzU2hvdyIsIl9zaG93VGFiIiwidGFic0xpbmtUYXJnZXQiLCJ0YWJzUGFuZVRhcmdldCIsInRhYnNMaW5rQWN0aXZlIiwidGFic1BhbmVTaG93IiwiZGlzcGF0Y2hFdmVudCIsIl9zd2l0Y2hUYWJUbyIsInRhYnNMaW5rSW5kZXgiLCJ0YWJzTGlua3MiLCJsZW5ndGgiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInNob3dUYWIiLCJzd2l0Y2hUYWJUbyIsInNjcm9sbEFuaW1hdGlvbklkIiwiY3VycmVudFNjcm9sbCIsInNjcm9sbHMiLCJuZXdTY3JvbGxZIiwiZGVsdGFTY3JvbGwiLCJzY3JvbGxUbyIsIk1hdGgiLCJhYnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wQW5pbWF0aW9uU2Nyb2xsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGlja0hhbmRlciIsIm9sZCIsInBhcnNlRmxvYXQiLCJpc0Zpbml0ZSIsIiRmaWx0ZXJhYmxlTGlzdCIsIl9jaGFuZ2VGaWx0ZXIiLCJmaWx0ZXJCdG4iLCJhY3RpdmVUb2dnbGUiLCJmaWx0ZXJDbGFzcyIsImZpbHRlcmFibGUiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FDQTs7Ozs7Ozs7OztBQUNBLElBQUFBLGFBQUEsR0FBQSxJQUFBO0FBQUEsSUFDQUMsZ0JBQUEsR0FBQSxJQURBO0FBQUEsSUFFQUMsZ0JBQUEsR0FBQSxJQUZBO0FBQUEsSUFHQUMsV0FBQSxHQUFBLElBSEE7QUFBQSxJQUlBQyxZQUFBLEdBQUEsR0FKQTtBQUFBLElBS0FDLFNBQUEsR0FBQSxHQUxBO0FBUUE7QUFDQTs7QUFDQSxJQUFBQyxlQUFBLEdBQUFDLFlB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Z0VBQUE7QUFBQSxZQUFBSyxVQUFBO0FBQ0FBLFFBQUFBLFVBQUEsQ0FBQXBQLFNBQUEsQ0FBQU8sTUFBQSxDQUFBLE1BQUE7O0FBRUEsWUFBQSxDQUFBNk8sVUFBQSxDQUFBcFAsU0FBQSxDQUFBQyxRQUFBLENBQUFrUCxXQUFBLENBQUEsSUFBQUEsV0FBQSxLQUFBLE9BQUEsRUFBQTtBQUNBQyxVQUFBQSxVQUFBLENBQUFwUCxTQUFBLENBQUFNLEdBQUEsQ0FBQSxNQUFBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBRUE7OztBQUNBLFNBQUF2QixNQUFBLENBQUFzSixRQUFBLEVBQUE7QUFDQSxTQUFBbEosUUFBQSxDQUFBQyxhQUFBLENBQUFpSixRQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsS0FBQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy8gYnJlYWsgcG9pbnRzIHNpdGVcclxuY29uc3QgYnJlYWtfZGVzY3RvcCA9IDE5MjAsXHJcblx0YnJlYWtfZGVzY3RvcE1pZCA9IDE0NTAsXHJcblx0YnJlYWtfZGVzY3RvcE1pbiA9IDEyMzAsXHJcblx0YnJlYWtfdGFibGUgPSAxMDI0LFxyXG5cdGJyZWFrX21vYmlsZSA9IDc2OCxcclxuXHRicmVha190ZWwgPSA0ODA7XHJcblxyXG5cclxuLyoqKioqIElOSVRJQUxJWklORyBQTFVHSU5TICoqKioqKi9cclxuLy8g0YHQutGA0L7QuyDRgdGC0YDQsNC90LjRhtGLINC6INC90YPQttC90L7QuSDQutC+0L7RgNC00LjQvdCw0YLQtVxyXG5sZXQgc2Nyb2xsaW5nV2luZG93ID0gc2Nyb2xsV2luZG93KCk7XHJcblxyXG4vL2ZpeGVkIGhlYWRlclxyXG5pZiAoaXNFbGVtKCdoZWFkZXInKSkge1xyXG5cdGxldCBmaXhlZEhlYWRlciA9IHNob3dIZWFkZXIoJ2hlYWRlcicpO1xyXG5cclxuXHRmdW5jdGlvbiBzaG93SGVhZGVyKGVsKSB7XHJcblx0XHRjb25zdCAkZWwgPSAodHlwZW9mIGVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xyXG5cdFx0Y29uc3QgJG1lbnUgPSAkZWwucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LW5hdl9fbWVudScpO1xyXG5cclxuXHRcdGNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRcdGxldCBvZmZzZXRUb3BFbCA9ICRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IG9mZnNldFRvcEVsICsgNDApIHtcclxuXHRcdFx0XHRzaG93KCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zml4ZWQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRvZmZzZXRUb3BFbCA9ICRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcblx0XHR9KVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNob3coKSB7XHJcblx0XHRcdGlmICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXhlZCcpKSByZXR1cm47XHJcblxyXG5cdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XHJcblx0XHRcdFx0aHRtbEVsLnN0eWxlLnBhZGRpbmdUb3AgPSAkZWwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGh0bWxFbC5zdHlsZS5wYWRkaW5nVG9wID0gJGVsLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdCRlbC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpeGVkKCkge1xyXG5cdFx0XHRpZiAoISRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpeGVkJykpIHJldHVybjtcclxuXHJcblx0XHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cdFx0XHRodG1sRWwuc3R5bGUucGFkZGluZ1RvcCA9ICcnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHNob3csXHJcblx0XHRcdGZpeGVkLFxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gXHRtYWluIHNsaWRlciBcclxuaWYgKGlzRWxlbSgnLmZ1bGxTY3JlZW5TbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbFNjcmVlblNsaWRlcicpO1xyXG5cclxuXHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKHNsaWRlck5vZGUsIHtcclxuXHRcdGVmZmVjdDogXCJjb3ZlcmZsb3dcIixcclxuXHRcdHNwZWVkOiA3MDAsXHJcblx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0Y292ZXJmbG93RWZmZWN0OiB7XHJcblx0XHRcdHJvdGF0ZTogNTAsXHJcblx0XHRcdHN0cmV0Y2g6IDAsXHJcblx0XHRcdGRlcHRoOiAxMDAsXHJcblx0XHRcdG1vZGlmaWVyOiAxLFxyXG5cdFx0XHRzbGlkZVNoYWRvd3M6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0YWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRuZXh0RWw6IHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tbmV4dCcpLFxyXG5cdFx0XHRwcmV2RWw6IHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tcHJldicpLFxyXG5cdFx0fSxcclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6IHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdG9uOiB7XHJcblx0XHRcdGJlZm9yZUluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmRlZmF1bHRzKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuLy8gXHRtYWluIHNsaWRlciBcclxuaWYgKGlzRWxlbSgnLm1haW5TbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblNsaWRlcicpO1xyXG5cdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoc2xpZGVyTm9kZSwge1xyXG5cdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRub1N3aXBpbmdDbGFzczogJ2J0bkdvJyxcclxuXHRcdHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcclxuXHRcdHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcblx0XHRzcGVlZDogMTAwMCxcclxuXHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdGRlbGF5OiA0MDAwLFxyXG5cdFx0XHRwYXVzZU9uTW91c2VFbnRlcjogdHJ1ZSxcclxuXHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0fSxcclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6IHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gcHJvZHVjdHMgc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLnByb2R1Y3RzU2xpZGVyJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdHNTbGlkZXInKTtcclxuXHJcblx0Zm9yIChsZXQgJHNsaWRlck5vZGUgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJOb2RlLCB7XHJcblx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAxLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRub1N3aXBpbmdDbGFzczogJ2J0bicsXHJcblx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHRcdHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MzAwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2OToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMDI1OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyNSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyMzE6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuLy8gcHJvZHVjdHMgc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLnNpbWlsYXJTbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW1pbGFyU2xpZGVyJyk7XHJcblxyXG5cdGZvciAobGV0ICRzbGlkZXJOb2RlIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRub1N3aXBpbmdDbGFzczogJ2J0bicsXHJcblx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MzAwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHRcdGluaXRpYWxTbGlkZTogMSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha19tb2JpbGUgKyAxXToge1xyXG5cdFx0XHRcdFx0aW5pdGlhbFNsaWRlOiAxLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtfdGFibGUgKyAxXToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtfZGVzY3RvcE1pbiArIDFdOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8gZ2FsbGVyeSBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuZ2FsbGVyeScpKSB7XHJcblx0Y29uc3QgdGh1bWJzU2xpZGVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X190aHVtYnMnKSxcclxuXHRcdGZ1bGxTbGlkZXJOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3NsaWRlcicpO1xyXG5cclxuXHJcblx0LyogdGh1bWJzICovXHJcblx0bGV0IGdhbGxlcnlUaHVtYnMgPSBuZXcgU3dpcGVyKHRodW1ic1NsaWRlck5vZGUsIHtcclxuXHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHRmcmVlTW9kZToge1xyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRzdGlja3k6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0MzAwOiB7XHJcblx0XHRcdFx0ZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcblx0XHRcdH0sXHJcblx0XHRcdFticmVha190YWJsZSArIDFdOiB7XHJcblx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0a2V5Ym9hcmQ6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0b25seUluVmlld3BvcnQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0bW91c2V3aGVlbDogdHJ1ZSxcclxuXHR9KTtcclxuXHJcblx0bGV0IGdhbGxlcnlGdWxsID0gbmV3IFN3aXBlcihmdWxsU2xpZGVyTm9kZSwge1xyXG5cdFx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG5cdFx0Ly8gYXV0b3BsYXk6IHtcclxuXHRcdC8vIFx0ZGVsYXk6IDUwMDBcclxuXHRcdC8vIH0sXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdHByZXZFbDogZnVsbFNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tcHJldicpLFxyXG5cdFx0XHRuZXh0RWw6IGZ1bGxTbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLW5leHQnKSxcclxuXHRcdH0sXHJcblx0XHRrZXlib2FyZDoge1xyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRvbmx5SW5WaWV3cG9ydDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHR0aHVtYnM6IHtcclxuXHRcdFx0c3dpcGVyOiBnYWxsZXJ5VGh1bWJzLFxyXG5cdFx0fSxcclxuXHR9KTtcclxufVxyXG5cclxuLy9zbGlua3kgaGVhZGVyIG1lbnVcclxuaWYgKGlzRWxlbSgnaGVhZGVyIC5icm8tbWVudScpKSB7XHJcblx0Y29uc3QgJG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgLmJyby1tZW51Jyk7XHJcblx0Y29uc3QgbWVudSA9IGJyb01lbnUoJG1lbnUpO1xyXG5cdGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTIzMHB4KScpO1xyXG5cclxuXHR0b2dnbGVNZW51KCk7XHJcblxyXG5cdG1lZGlhUXVlcnkuYWRkTGlzdGVuZXIodG9nZ2xlTWVudSlcclxuXHJcblx0ZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuXHRcdGlmIChtZWRpYVF1ZXJ5Lm1hdGNoZXMpIHtcclxuXHRcdFx0bWVudS5pbml0KCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bWVudS5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyB3aW5kb3cgbW9kYWxcclxuaWYgKGlzRWxlbSgnLnYtbW9kYWwnKSkge1xyXG5cdG1vZGFsV2luZG93KCk7XHJcbn1cclxuXHJcbi8v0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L/QvtC70LfRg9C90LrQvtCyXHJcbmlmIChpc0VsZW0oJy5qcy1zbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2xpZGVyJyk7XHJcblxyXG5cdGZvciAoY29uc3Qgc2xpZGVyIG9mIHNsaWRlckxpc3QpIHtcclxuXHRcdHNsaWRlckZyb21UbyhzbGlkZXIpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gYWNjYXJkaW9uXHJcbmlmIChpc0VsZW0oJy5hY2NhcmRpb24nKSkge1xyXG5cdGNvbnN0IGFjY2FyZGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjYXJkaW9uJyk7XHJcblx0Y29uc3QgYWNjYXJkaW9uUGxhZ2luID0gYWNjYXJkaW9uKCk7XHJcblxyXG5cdGZvciAoY29uc3QgaXRlbSBvZiBhY2NhcmRpb25zKSB7XHJcblx0XHRhY2NhcmRpb25QbGFnaW4oKS5pbml0KGl0ZW0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8gdGVsIG1hc2tcclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKSkge1xyXG5cdGNvbnN0IGlucHV0c1RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKTtcclxuXHRjb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soJyszNzUgKDk5KSA5OTktOTktOTknKTtcclxuXHRpbS5tYXNrKGlucHV0c1RlbCk7XHJcbn1cclxuXHJcbi8vIG51bWJlciBzbGlkZXJcclxuaWYgKGlzRWxlbSgnLm51bWJlci1zbGlkZXInKSkge1xyXG5cdGNvbnN0IG51bWJlclNsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLXNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGNvbnN0IHNsaWRlciBvZiBudW1iZXJTbGlkZXJzKSB7XHJcblx0XHRudW1iZXJTbGlkZXIoc2xpZGVyKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vINGE0LjQu9GM0YLRgNCw0YbQuNGPINGN0LvQtdC80LXQvdGC0L7QslxyXG5pZiAoaXNFbGVtKCcuanMtYkZpbHRlcicpKSB7XHJcblxyXG5cdGZvciAoY29uc3QgJGVsIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1iRmlsdGVyJykpIHtcclxuXHRcdGJGaWx0ZXIoJGVsKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGJUYWJzXHJcbmlmIChpc0VsZW0oJy5iLXRhYnMnKSkge1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi10YWJzJyk7XHJcblxyXG5cdGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcclxuXHJcblx0XHRiVGFicyh0YWIpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqKioqKiBDVVNUT00gUExVR0lOICoqKioqKi9cclxuXHJcbi8vSGFtYnVyZ2VyINC+0YLQutGA0YvRgtC40Y8g0LzQvtCx0LjQu9GM0L3QvtCz0L4g0LzQtdC90Y5cclxuaWYgKGlzRWxlbSgnLmhlYWRlcl9faGFtYnVyZ2VyJykpIHtcclxuXHRjb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19oYW1idXJnZXInKTtcclxuXHRjb25zdCBidXJnZXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpO1xyXG5cdGNvbnN0IGJ1cmdlcklubmVyID0gYnVyZ2VyQmxvY2sucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyLWlubmVyJyk7XHJcblx0Y29uc3QgYm9keUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cdGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5cclxuXHRoYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdGJ1cmdlckJsb2NrLnN0eWxlLnRvcCA9IGhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG5cclxuXHRcdGxldCBpc0FjdGl2ZSA9IHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcclxuXHRcdGJ1cmdlckJsb2NrLmNsYXNzTGlzdFtpc0FjdGl2ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdvcGVuJyk7XHJcblx0XHRidXJnZXJJbm5lci5zdHlsZS5tYXhIZWlnaHQgPSAoaXNBY3RpdmUpID8gYGNhbGMoMTAwdmggLSAke2hlYWRlci5vZmZzZXRIZWlnaHR9cHgpYCA6ICcnO1xyXG5cdFx0Ym9keUVsLnN0eWxlLm92ZXJmbG93ID0gKGlzQWN0aXZlKSA/ICdoaWRkZW4nIDogJyc7XHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPiAxMjMwICYmIGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdGhhbWJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0YnVyZ2VyQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHRib2R5RWwuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0YnVyZ2VyQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKCFlLnRhcmdldC5jb250YWlucyhidXJnZXJCbG9jaykpIHJldHVybjtcclxuXHJcblx0XHRoYW1idXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRidXJnZXJCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRib2R5RWwuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHR9KTtcclxufVxyXG5cclxuLy8g0L/QvtC0INC80LXQvdGOINGBINCz0LDQvNCx0YPRgNCz0LXRgNC+0Lwg0LLQvdGD0YLRgNC4INC+0YHQvdC+0LLQvdC+0LPQviDQvNC10L3RjlxyXG5pZiAoaXNFbGVtKCcubWVudV9faXRlbS0tZHJvcCcpKSB7XHJcblx0Y29uc3QgbWVudURyb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS0tZHJvcCcpO1xyXG5cdGNvbnN0IHRvZ2dsZSA9IG1lbnVEcm9wLnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLXRvZ2dsZScpO1xyXG5cdGNvbnN0IGxpbmtidG4gPSBtZW51RHJvcC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS10b2dnbGUgfiAubWVudV9fbGluaycpO1xyXG5cdGNvbnN0IGl0ZW1NZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtOm5vdCgubWVudV9faXRlbS0tZHJvcCknKTtcclxuXHJcblxyXG5cdHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdG1lbnVEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHRsaW5rYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdG1lbnVEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG5cdFx0aWYgKCFldi50YXJnZXQuY2xvc2VzdCgnLm1lbnVfX2l0ZW0tLWRyb3AnKSkge1xyXG5cdFx0XHRpZiAobWVudURyb3AuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRtZW51RHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vIHYtdXAg0LrQvdC+0L/QutCwINCy0LLQtdGA0YVcclxuKGZ1bmN0aW9uICgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxyXG5cdFx0PGRpdiBjbGFzcz1cInYtdXBcIj48L2Rpdj5cclxuXHRgKTtcclxuXHJcblx0Y29uc3QgYnRuRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52LXVwJyk7XHJcblx0bGV0IHZVcFRyaWdnZXJUaW1lciA9IDA7XHJcblxyXG5cdHZVcChidG5Eb3duLCBnZXRTY3JvbGVkV2luZG93KTtcclxuXHJcblx0YnRuRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vYmFja1RvVG9wKC00NSwgMCk7XHJcblx0XHRzY3JvbGxpbmdXaW5kb3cuc3RhcnRBbWltYXRpb25TY3JvbGwoMSk7XHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodlVwVHJpZ2dlclRpbWVyKTtcclxuXHRcdHZVcFRyaWdnZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR2VXAoYnRuRG93biwgZ2V0U2Nyb2xlZFdpbmRvdyk7XHJcblx0XHR9LCAyMDApXHJcblx0fSk7XHJcblxyXG5cdC8v0L/RgNC+0LvQuNGB0YLRi9Cy0LDQuNC90LUg0L7QutC90LAg0LLQstC10YDRhSDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRg1xyXG5cdGZ1bmN0aW9uIHZVcChidG4sIHNjcm9sZWQpIHtcclxuXHRcdGlmIChzY3JvbGVkKCkgPiAod2luZG93LmlubmVySGVpZ2h0IC8gMikpIHtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0fSBlbHNlIGlmIChzY3JvbGVkKCkgPCAod2luZG93LmlubmVySGVpZ2h0IC8gMikgfHwgYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly/Qv9GA0L7QutGA0YPRgtC60LAg0L7QutC90LAg0LLQstC10YDRhSDQstC90LjQt1xyXG5cdGZ1bmN0aW9uIGJhY2tUb1RvcChpbnRlcnZhbCwgdG8pIHtcclxuXHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPD0gdG8pIHJldHVybjtcclxuXHJcblx0XHR3aW5kb3cuc2Nyb2xsQnkoMCwgaW50ZXJ2YWwpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGJhY2tUb1RvcChpbnRlcnZhbCwgdG8pXHJcblx0XHR9LCAwKTtcclxuXHR9XHJcblxyXG5cdC8v0L3QsCDRgdC60L7Qu9GM0LrQviDQv9GA0L7QutGA0YPRh9C10L3QviDQvtC60L3QvlxyXG5cdGZ1bmN0aW9uIGdldFNjcm9sZWRXaW5kb3coKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0fVxyXG59KCkpO1xyXG5cclxuLy9cdG1vZGFsIHdpbmRvd1xyXG5mdW5jdGlvbiBtb2RhbFdpbmRvdygpIHtcclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxyXG5cdFx0bW9kYWxFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1tb2RhbCcpLFxyXG5cdFx0YnRuT3BlbkNsYXNzTmFtZSA9IFwianMtb3Blbk1vZGFsXCIsXHJcblx0XHRidG5DbG9zZUNsYXNzTmFtZSA9ICdqcy1jbG9zZU1vZGFsJztcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoYC4ke2J0bk9wZW5DbGFzc05hbWV9YCkgJiYgZS50YXJnZXQuZGF0YXNldC50eXBlTW9kYWwpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjb25zdCB0eXBlTW9kYWwgPSBlLnRhcmdldC5kYXRhc2V0Wyd0eXBlTW9kYWwnXTtcclxuXHJcblx0XHRcdGZvciAobGV0ICRtb2RhbCBvZiBtb2RhbEVscykge1xyXG5cclxuXHRcdFx0XHRpZiAoJG1vZGFsLmRhdGFzZXQgJiYgJG1vZGFsLmRhdGFzZXRbJ3R5cGVNb2RhbCddID09PSB0eXBlTW9kYWwpIHtcclxuXHRcdFx0XHRcdCRtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRjb25zdCBzY3JvbGxCYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gYm9keS5vZmZzZXRXaWR0aDtcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyBcInB4XCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndi1tb2RhbF9faW5uZXInKSB8fCBlLnRhcmdldC5jbG9zZXN0KGAuJHtidG5DbG9zZUNsYXNzTmFtZX1gKSkge1xyXG5cdFx0XHRlLnRhcmdldC5jbG9zZXN0KCcudi1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIjtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLyoqKioqIEZVTkNUSU9OIFBMVUdJTiAqKioqKiovXHJcblxyXG4vL3NsaW5reSBtZW51XHJcbmZ1bmN0aW9uIGJyb01lbnUoc2VsZWN0b3IsIG9wdGlvbnMpIHtcclxuXHRjb25zdCAkbWVudSA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcblx0Y29uc3QgJGxldmVsXzEgPSAkbWVudS5sYXN0RWxlbWVudENoaWxkO1xyXG5cdGNvbnN0ICRzdWJNZW51TGlzdCA9ICRtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpID4gdWwnKTtcclxuXHRjb25zdCAkc3ViTWVudUxpbmsgPSAkbWVudS5xdWVyeVNlbGVjdG9yQWxsKCdsaSA+IGEnKTtcclxuXHRsZXQgYWN0aXZhdGVkO1xyXG5cclxuXHRsZXQgZGVmYXVsT3B0aW9ucyA9IHtcclxuXHRcdGFycm93OiBgXHJcblx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuXHRcdFx0PHBhdGggZD1cIk0xMi4yMTkgMi4yODFMMTAuNzggMy43MiAxOC4wNjIgMTFIMnYyaDE2LjA2M2wtNy4yODIgNy4yODEgMS40MzggMS40MzggOS05IC42ODctLjcxOS0uNjg3LS43MTl6XCIgLz5cclxuXHRcdFx0PC9zdmc+XHJcblx0XHRgXHJcblx0fVxyXG5cclxuXHRPYmplY3QuYXNzaWduKGRlZmF1bE9wdGlvbnMsIG9wdGlvbnMpO1xyXG5cclxuXHRsZXQgJGFjdGl2ZVVsO1xyXG5cdGxldCB0cmFuc2xhdGUgPSAwO1xyXG5cclxuXHRjb25zdCBtZXRob2QgPSB7XHJcblx0XHRpbml0KCkge1xyXG5cdFx0XHRpZiAoYWN0aXZhdGVkKSByZXR1cm47XHJcblxyXG5cdFx0XHQkbWVudS5jbGFzc0xpc3QuYWRkKCdicm8tbWVudScpO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgc3VibWVudSBvZiAkc3ViTWVudUxpc3QpIHtcclxuXHRcdFx0XHRjb25zdCBsaW5rID0gc3VibWVudS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpID4gYScpO1xyXG5cdFx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZCgnYnJvLW1lbnVfX25leHQnKTtcclxuXHRcdFx0XHRzdWJtZW51LmNsYXNzTGlzdC5hZGQoJ2Jyby1tZW51X19zdWJtZW51Jyk7XHJcblxyXG5cdFx0XHRcdF9hZGRCdG5CYWNrKHN1Ym1lbnUsIGxpbmspO1xyXG5cdFx0XHRcdF9hZGRCdG5OZXh0KGxpbmspO1xyXG5cclxuXHRcdFx0XHRhY3RpdmF0ZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRzdWJNZW51TGluaykge1xyXG5cdFx0XHRcdCRsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgX3NldEhlaWdoTWVudSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlc3Ryb3koKSB7XHJcblx0XHRcdGlmICghYWN0aXZhdGVkKSByZXR1cm47XHJcblxyXG5cdFx0XHQvKiDQo9C00LDQu9GP0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGB0L7QsdGL0YLQuNC5ICovXHJcblx0XHRcdCRtZW51LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9zZXRIZWlnaE1lbnUpO1xyXG5cclxuXHRcdFx0Lyog0KPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINC/0LvQsNCz0LjQvdCwINC90LAg0YHRgdGL0LvQutCw0YUg0Lgg0LrQvdC+0L/QutGDINC90LDQt9Cw0LQgKi9cclxuXHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubGluaycpKSB7XHJcblx0XHRcdFx0aWYgKCRsaW5rLmNsYXNzTGlzdC5jb250YWlucygnYnJvLW1lbnVfX2JhY2snKSkge1xyXG5cdFx0XHRcdFx0JGxpbmsuY2xvc2VzdCgnbGknKS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbGluaycpO1xyXG5cdFx0XHRcdCRsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2Jyby1tZW51X19uZXh0Jyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qINCj0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDQv9C70LDQs9C40L3QsCDQvdCwINCy0LvQvtC20LXQvdGL0YUg0LzQtdC90Y7RiNC60LDRhVx0Ki9cclxuXHRcdFx0Zm9yIChjb25zdCAkc3ViTWVudSBvZiAkbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuYnJvLW1lbnVfX3N1Ym1lbnUnKSkge1xyXG5cdFx0XHRcdCRzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Jyby1tZW51X19zdWJtZW51JylcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lyog0KPQtNCw0LvRj9C10Lwg0YHRgtGA0LXQu9C60Lgg0LIg0YHRgdGL0LvQutCw0YUgKi9cclxuXHRcdFx0Zm9yIChjb25zdCAkYXJyIG9mICRtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5icm8tbWVudV9fYXJyJykpIHtcclxuXHRcdFx0XHQkYXJyLnJlbW92ZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRcdCRhY3RpdmVVbCAmJiAkYWN0aXZlVWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHQkbWVudS5zdHlsZS5oZWlnaHQgPSAnJztcclxuXHRcdFx0JGxldmVsXzEuc3R5bGUudHJhbnNmb3JtID0gYGA7XHJcblx0XHRcdHRyYW5zbGF0ZSA9IDA7XHJcblx0XHRcdGFjdGl2YXRlZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuXHRcdGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuXHRcdGlmICh0YXJnZXQuY2xvc2VzdCgnLmJyby1tZW51X19uZXh0JykpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgJG5lc3RlZE1lbnUgPSB0YXJnZXQuY2xvc2VzdCgnbGknKS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cclxuXHRcdFx0aWYgKCRhY3RpdmVVbCkgJGFjdGl2ZVVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0JG5lc3RlZE1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdCRuZXN0ZWRNZW51LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcblx0XHRcdHRyYW5zbGF0ZSAtPSAxMDA7XHJcblxyXG5cdFx0XHQkbGV2ZWxfMS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZX0lKWA7XHJcblx0XHRcdCRhY3RpdmVVbCA9ICRuZXN0ZWRNZW51O1xyXG5cclxuXHRcdFx0c2Nyb2xsVG9WaXNpYmxlKCRhY3RpdmVVbCk7XHJcblx0XHRcdF9zZXRIZWlnaE1lbnUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KCcuYnJvLW1lbnVfX2JhY2snKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zdCAkdXBwZXJNZW51ID0gJGFjdGl2ZVVsLnBhcmVudEVsZW1lbnQuY2xvc2VzdCgndWwnKTtcclxuXHRcdFx0JHVwcGVyTWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdCRhY3RpdmVVbC5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XHJcblxyXG5cdFx0XHR0cmFuc2xhdGUgKz0gMTAwO1xyXG5cclxuXHRcdFx0JGxldmVsXzEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGV9JSlgO1xyXG5cdFx0XHQkYWN0aXZlVWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdCRhY3RpdmVVbCA9ICR1cHBlck1lbnU7XHJcblx0XHRcdF9zZXRIZWlnaE1lbnUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9hZGRCdG5OZXh0KGVsZW0pIHtcclxuXHRcdGVsZW0uY2xhc3NMaXN0LmFkZCgnbGluaycpXHJcblx0XHRlbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxyXG5cdFx0XHQke2RlZmF1bE9wdGlvbnMuYXJyb3d9XHJcblx0XHRgKTtcclxuXHJcblx0XHRlbGVtLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYnJvLW1lbnVfX2FycicpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2FkZEJ0bkJhY2soZWxlbSwgbGluaykge1xyXG5cdFx0Y29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblxyXG5cdFx0ZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXHJcblx0XHRcdDxsaT5cclxuXHRcdFx0XHQ8YSBjbGFzcz1cImJyby1tZW51X19iYWNrIGxpbmtcIiAkeyhocmVmKSA/IGBocmVmPSR7aHJlZn1gIDogJyd9PlxyXG5cdFx0XHRcdFx0JHtkZWZhdWxPcHRpb25zLmFycm93fVxyXG5cdFx0XHRcdFx0JHtsaW5rLnRleHRDb250ZW50fVxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9saT5cclxuXHRcdGApO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX3NldEhlaWdoTWVudSgpIHtcclxuXHRcdGlmICghJGFjdGl2ZVVsKSByZXR1cm47XHJcblxyXG5cdFx0JG1lbnUuc3R5bGUuaGVpZ2h0ID0gJGFjdGl2ZVVsLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNjcm9sbFRvVmlzaWJsZShlbCkge1xyXG5cdFx0aWYgKF9nZXRQb3NBYnNXaW5kb3coZWwpID4gd2luZG93LnBhZ2VZT2Zmc2V0KSByZXR1cm47XHJcblxyXG5cdFx0YmFja1RvVG9wKC0xMCwgX2dldFBvcyhlbCkpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2dldFBvc0Fic1dpbmRvdyhlbGVtKSB7XHJcblx0XHRjb25zdCBvZmZzZXRUb3AgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHJcblx0XHRyZXR1cm4gb2Zmc2V0VG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2dldFBvcyhlbCkge1xyXG5cdFx0cmV0dXJuIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGJhY2tUb1RvcChpbnRlcnZhbCwgdG8pIHtcclxuXHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPD0gdG8pIHJldHVybjtcclxuXHJcblx0XHR3aW5kb3cuc2Nyb2xsQnkoMCwgaW50ZXJ2YWwpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGJhY2tUb1RvcChpbnRlcnZhbCwgdG8pXHJcblx0XHR9LCAwKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBtZXRob2Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNsaWRlckZyb21UbyhzZWxlY3Rvcikge1xyXG5cdGNvbnN0ICRlbCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcblx0Y29uc3QgJHNsaWRlclByaWNlID0gJGVsLnF1ZXJ5U2VsZWN0b3IoJy5qcy1zbGlkZXItaGFuZGxlcycpLFxyXG5cdFx0JGlucHV0cyA9ICRlbC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2xpZGVyLWlucHV0JyksXHJcblx0XHRtaW4gPSArJGlucHV0c1swXS5nZXRBdHRyaWJ1dGUoJ21pbicpIHx8IDAsXHJcblx0XHRtYXggPSArJGlucHV0c1sxXS5nZXRBdHRyaWJ1dGUoJ21heCcpIHx8IDEwMDAsXHJcblx0XHRzdGFydCA9ICskZWwuZGF0YXNldC5zbGlkZXJTdGFydCB8fCAwLFxyXG5cdFx0ZW5kID0gKyRlbC5kYXRhc2V0LnNsaWRlckVuZCB8fCAxMDAwLFxyXG5cdFx0c3RlcCA9ICskZWwuZGF0YXNldC5zbGlkZXJTdGVwIHx8IDE7XHJcblxyXG5cdG5vVWlTbGlkZXIuY3JlYXRlKCRzbGlkZXJQcmljZSwge1xyXG5cdFx0c3RhcnQ6IFtzdGFydCwgZW5kXSxcclxuXHRcdGNvbm5lY3Q6IHRydWUsXHJcblx0XHRzdGVwOiBzdGVwLFxyXG5cdFx0cmFuZ2U6IHtcclxuXHRcdFx0J21pbic6IFttaW5dLFxyXG5cdFx0XHQnbWF4JzogW21heF1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JHNsaWRlclByaWNlLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xyXG5cdFx0JGlucHV0c1toYW5kbGVdLnZhbHVlID0gKCt2YWx1ZXNbaGFuZGxlXSkudG9GaXhlZCgxKTtcclxuXHR9KTtcclxuXHJcblx0JGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dCwgaW5kZXgpIHtcclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdHNldFJhbmdlU2xpZGVyKGluZGV4LCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gc2V0UmFuZ2VTbGlkZXIoaSwgdmFsdWUpIHtcclxuXHRcdGxldCBhcnIgPSBbbnVsbCwgbnVsbF07XHJcblx0XHRhcnJbaV0gPSB2YWx1ZTtcclxuXHJcblx0XHQkc2xpZGVyUHJpY2Uubm9VaVNsaWRlci5zZXQoYXJyKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIHRyZWVNZW51KCcuY2F0ZWdvcnlNZW51IHVsJylcclxuXHJcbi8vIGZ1bmN0aW9uIHRyZWVNZW51KG1lbnUpIHtcclxuLy8gXHRjb25zdCAkZWwgPSAodHlwZW9mIG1lbnUgPT09IFwic3RyaW5nXCIpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51KSA6IG1lbnU7XHJcblxyXG4vLyBcdGZvciAoY29uc3QgJGxpIG9mICRlbC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpKSB7XHJcblxyXG4vLyBcdH1cclxuXHJcbi8vIFx0JGVsLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4vLyBcdFx0aWYgKCFlLnRhcmdldC5jbG9zZXN0KCdhJykpIHJldHVybjtcclxuXHJcbi8vIFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vL2FjY2FyZGlvblxyXG5mdW5jdGlvbiBhY2NhcmRpb24oKSB7XHJcblx0bGV0IGhlYWRlckRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IF9tYWluRWxlbWVudCA9IHt9LCAvLyAuYWNjb3JkaW9uIFxyXG5cdFx0XHRfaXRlbXMgPSB7fTsgLy8gLmFjY29yZGlvbi1pdGVtIFxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGluaXQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcblx0XHRcdFx0X21haW5FbGVtZW50ID0gKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCkgOiBlbGVtZW50KTtcclxuXHRcdFx0XHRfaXRlbXMgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY2FyZGlvbl9faXRlbScpO1xyXG5cdFx0XHRcdF9zZXR1cExpc3RlbmVycyhfbWFpbkVsZW1lbnQsICdjbGljaycsIF9jbGlja0hhbmRsZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gX2NsaWNrSGFuZGxlcihlKSB7XHJcblx0XHRcdGlmICghZS50YXJnZXQuY2xvc2VzdCgnLmFjY2FyZGlvbl9faXRlbS1oZWFkZXInKSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0bGV0IGhlYWRlciA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5hY2NhcmRpb25fX2l0ZW0taGVhZGVyJyksXHJcblx0XHRcdFx0aXRlbSA9IGhlYWRlci5jbG9zZXN0KCcuYWNjYXJkaW9uX19pdGVtJyksXHJcblx0XHRcdFx0aXRlbUFjdGl2ZSA9IF9nZXRJdGVtKF9pdGVtcywgJ29wZW4nKTtcclxuXHJcblx0XHRcdGlmIChpdGVtQWN0aXZlID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpdGVtQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHJcblx0XHRcdFx0aWYgKGl0ZW1BY3RpdmUgIT09IGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdHNjcm9sbFRvVmlzaWJsZShpdGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9zZXR1cExpc3RlbmVycyhlbGVtLCBldmVudCwgaGFuZGxlcikge1xyXG5cdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNjcm9sbFRvVmlzaWJsZShlbCkge1xyXG5cdFx0aWYgKF9nZXRQb3MoZWwpID4gd2luZG93LnBhZ2VZT2Zmc2V0KSByZXR1cm47XHJcblx0XHRiYWNrVG9Ub3AoLTEwLCBfZ2V0UG9zKGVsKSAtIGhlYWRlckRvbS5vZmZzZXRIZWlnaHQgLSAzMCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0UG9zKGVsKSB7XHJcblx0XHRyZXR1cm4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2dldEl0ZW0oZWxlbWVudHMsIGNsYXNzTmFtZSkge1xyXG5cdFx0dmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcblx0XHRcdFx0ZWxlbWVudCA9IGl0ZW07XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gYmFja1RvVG9wKGludGVydmFsLCB0bykge1xyXG5cdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8PSB0bykgcmV0dXJuO1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxCeSgwLCBpbnRlcnZhbCk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0YmFja1RvVG9wKGludGVydmFsLCB0bylcclxuXHRcdH0sIDApO1xyXG5cdH1cclxufVxyXG5cclxuLy8gYlRhYnNcclxuZnVuY3Rpb24gYlRhYnModGFyZ2V0KSB7XHJcblx0bGV0IF9lbGVtVGFicyA9ICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldCksXHJcblx0XHRfZXZlbnRUYWJzU2hvdyxcclxuXHRcdF9zaG93VGFiID0gZnVuY3Rpb24gKHRhYnNMaW5rVGFyZ2V0KSB7XHJcblx0XHRcdHZhciB0YWJzUGFuZVRhcmdldCwgdGFic0xpbmtBY3RpdmUsIHRhYnNQYW5lU2hvdztcclxuXHRcdFx0dGFic1BhbmVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYnNMaW5rVGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuXHRcdFx0dGFic0xpbmtBY3RpdmUgPSB0YWJzTGlua1RhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iLXRhYnNfX2xpbmsuYWN0aXZlJyk7XHJcblx0XHRcdHRhYnNQYW5lU2hvdyA9IHRhYnNQYW5lVGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmItdGFic19fcGFuZS5hY3RpdmUnKTtcclxuXHRcdFx0Ly8g0LXRgdC70Lgg0YHQu9C10LTRg9GO0YnQsNGPINCy0LrQu9Cw0LTQutCwINGA0LDQstC90LAg0LDQutGC0LjQstC90L7QuSwg0YLQviDQt9Cw0LLQtdGA0YjQsNC10Lwg0YDQsNCx0L7RgtGDXHJcblx0XHRcdGlmICh0YWJzTGlua1RhcmdldCA9PT0gdGFic0xpbmtBY3RpdmUpIHJldHVybjtcclxuXHRcdFx0Ly8g0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGDINGC0LXQutGD0YnQuNGFINCw0LrRgtC40LLQvdGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyXHJcblx0XHRcdGlmICh0YWJzTGlua0FjdGl2ZSAhPT0gbnVsbCkgdGFic0xpbmtBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRpZiAodGFic1BhbmVTaG93ICE9PSBudWxsKSB0YWJzUGFuZVNob3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdC8vINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGB0Ysg0Log0Y3Qu9C10LzQtdC90YLQsNC8ICjQsiDQt9Cw0LLQuNC80L7RgdGC0Lgg0L7RgiDQstGL0LHRgNCw0L3QvdC+0Lkg0LLQutC70LDQtNC60LgpXHJcblx0XHRcdHRhYnNMaW5rVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR0YWJzUGFuZVRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChfZXZlbnRUYWJzU2hvdyk7XHJcblx0XHR9LFxyXG5cdFx0X3N3aXRjaFRhYlRvID0gZnVuY3Rpb24gKHRhYnNMaW5rSW5kZXgpIHtcclxuXHRcdFx0dmFyIHRhYnNMaW5rcyA9IF9lbGVtVGFicy5xdWVyeVNlbGVjdG9yQWxsKCcuYi10YWJzX19saW5rJyk7XHJcblx0XHRcdGlmICh0YWJzTGlua3MubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGlmICh0YWJzTGlua0luZGV4ID4gdGFic0xpbmtzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGFic0xpbmtJbmRleCA9IHRhYnNMaW5rcy5sZW5ndGg7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0YWJzTGlua0luZGV4IDwgMSkge1xyXG5cdFx0XHRcdFx0dGFic0xpbmtJbmRleCA9IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF9zaG93VGFiKHRhYnNMaW5rc1t0YWJzTGlua0luZGV4IC0gMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRfZXZlbnRUYWJzU2hvdyA9IG5ldyBDdXN0b21FdmVudCgndGFiLnNob3cnLCB7IGRldGFpbDogX2VsZW1UYWJzIH0pO1xyXG5cclxuXHRfZWxlbVRhYnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0dmFyIHRhYnNMaW5rVGFyZ2V0ID0gZS50YXJnZXQ7XHJcblx0XHQvLyDQt9Cw0LLQtdGA0YjQsNC10Lwg0LLRi9C/0L7Qu9C90LXQvdC40LUg0YTRg9C90LrRhtC40LgsINC10YHQu9C4INC60LvQuNC60L3Rg9C70Lgg0L3QtSDQv9C+INGB0YHRi9C70LrQtVxyXG5cdFx0aWYgKCF0YWJzTGlua1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ItdGFic19fbGluaycpKSByZXR1cm47XHJcblxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0X3Nob3dUYWIodGFic0xpbmtUYXJnZXQpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0c2hvd1RhYjogZnVuY3Rpb24gKHRhcmdldCkge1xyXG5cdFx0XHRfc2hvd1RhYih0YXJnZXQpO1xyXG5cdFx0fSxcclxuXHRcdHN3aXRjaFRhYlRvOiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHRcdFx0X3N3aXRjaFRhYlRvKGluZGV4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59O1xyXG5cclxuLy8g0LDQvdC40LzQsNGG0LjRjyDRgdC60YDQvtC70LAg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsFxyXG5mdW5jdGlvbiBzY3JvbGxXaW5kb3coKSB7XHJcblx0bGV0IHNjcm9sbEFuaW1hdGlvbklkO1xyXG5cdGxldCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdGxldCBzY3JvbGxzID0gZmFsc2U7XHJcblxyXG5cdGZ1bmN0aW9uIHN0YXJ0QW1pbWF0aW9uU2Nyb2xsKG5ld1Njcm9sbFkpIHtcclxuXHRcdGlmICghc2Nyb2xscykge1xyXG5cdFx0XHRjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHRzY3JvbGxzID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBkZWx0YVNjcm9sbCA9IChuZXdTY3JvbGxZIC0gY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0Y3VycmVudFNjcm9sbCArPSBkZWx0YVNjcm9sbCAqIDAuMTU7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0aWYgKE1hdGguYWJzKGRlbHRhU2Nyb2xsKSA+IDUpIHtcclxuXHRcdFx0c2Nyb2xsQW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzdGFydEFtaW1hdGlvblNjcm9sbChuZXdTY3JvbGxZKTtcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBuZXdTY3JvbGxZKTtcclxuXHRcdFx0c3RvcEFuaW1hdGlvblNjcm9sbCgpO1xyXG5cdFx0XHRzY3JvbGxzID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzdG9wQW5pbWF0aW9uU2Nyb2xsKCkge1xyXG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjcm9sbEFuaW1hdGlvbklkKTtcclxuXHRcdHNjcm9sbEFuaW1hdGlvbklkID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHN0YXJ0QW1pbWF0aW9uU2Nyb2xsLFxyXG5cdFx0c3RvcEFuaW1hdGlvblNjcm9sbCxcclxuXHR9XHJcbn1cclxuXHJcbi8vIG51bWJlciBzbGlkZXIgXHJcbmZ1bmN0aW9uIG51bWJlclNsaWRlcihzZWxlY3Rvcikge1xyXG5cdGNvbnN0ICRlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG5cdFx0OiBzZWxlY3RvcixcclxuXHRcdGlucHV0ID0gJGVsLnF1ZXJ5U2VsZWN0b3IoJy5qcy1udW1iZXItc2xpZGVyLWlucHV0JyksXHJcblx0XHRtaW4gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpO1xyXG5cclxuXHQkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRlcik7XHJcblxyXG5cdGZ1bmN0aW9uIGNsaWNrSGFuZGVyKGUpIHtcclxuXHRcdGlmIChlLnRhcmdldC5jbG9zZXN0KCcuanMtbnVtYmVyLXNsaWRlci1hZGQnKSkge1xyXG5cdFx0XHRjb25zdCBvbGQgPSArcGFyc2VGbG9hdChpbnB1dC52YWx1ZSkgKyAxO1xyXG5cdFx0XHRpbnB1dC52YWx1ZSA9IGlzRmluaXRlKG9sZCkgPyBvbGQgOiBtaW47XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuanMtbnVtYmVyLXNsaWRlci1yZWR1Y2UnKSkge1xyXG5cdFx0XHRjb25zdCBvbGQgPSArcGFyc2VGbG9hdChpbnB1dC52YWx1ZSkgLSAxO1xyXG5cdFx0XHRpbnB1dC52YWx1ZSA9ICgraW5wdXQudmFsdWUgPD0gK21pbikgPyBtaW4gOiArcGFyc2VGbG9hdChpbnB1dC52YWx1ZSkgLSAxO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gYkZpbHRlclxyXG5mdW5jdGlvbiBiRmlsdGVyKHNlbGVjdG9yKSB7XHJcblx0Y29uc3QgJGVsID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcclxuXHRjb25zdCAkZmlsdGVyYWJsZUxpc3QgPSAkZWwucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJGaWx0ZXJfX2ZpbHRlcmFibGUnKTtcclxuXHJcblx0X2NoYW5nZUZpbHRlcigkZWwucXVlcnlTZWxlY3RvcignW2RhdGEtYmZpbHRlcl0uYWN0aXZlJykpO1xyXG5cclxuXHJcblx0JGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGNvbnN0IGZpbHRlckJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJmaWx0ZXJdJyk7XHJcblxyXG5cdFx0aWYgKGZpbHRlckJ0bikge1xyXG5cdFx0XHRpZiAoZmlsdGVyQnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcclxuXHJcblx0XHRcdCRlbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iZmlsdGVyXS5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0ZmlsdGVyQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0X2NoYW5nZUZpbHRlcihmaWx0ZXJCdG4pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBfY2hhbmdlRmlsdGVyKGFjdGl2ZVRvZ2dsZSkge1xyXG5cdFx0Y29uc3QgZmlsdGVyQ2xhc3MgPSAnZi0nICsgYWN0aXZlVG9nZ2xlLmRhdGFzZXRbJ2JmaWx0ZXInXTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGZpbHRlcmFibGUgb2YgJGZpbHRlcmFibGVMaXN0KSB7XHJcblx0XHRcdGZpbHRlcmFibGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0aWYgKCFmaWx0ZXJhYmxlLmNsYXNzTGlzdC5jb250YWlucyhmaWx0ZXJDbGFzcykgJiYgZmlsdGVyQ2xhc3MgIT09ICdmLWFsbCcpIHtcclxuXHRcdFx0XHRmaWx0ZXJhYmxlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLyoqKioqKiBVVElMUyAqKioqKiovXHJcbmZ1bmN0aW9uIGlzRWxlbShzZWxlY3Rvcikge1xyXG5cdHJldHVybiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpID8gdHJ1ZSA6IGZhbHNlO1xyXG59Il19
