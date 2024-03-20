// Animate aos
AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99, 
    offset: 120, 
    delay: 0, 
    duration: 1500, 
    easing: 'ease',
    once: false,
    mirror: false, 
    anchorPlacement: 'top-bottom',
});

// slider recomment

var swiper = new Swiper(".myRecomment", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
        breakpoints: {
                320: {
                slidesPerView: 1,
                spaceBetween: 0,
                },
                480: {
                slidesPerView: 1,
                spaceBetween: 0,
                },
                640: {
                slidesPerView: 1,
                spaceBetween: 0,
                }
            },
    }
);

// slider art-picture
var swiper = new Swiper(".myArt", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
      breakpoints: {
              320: {
              slidesPerView: 1,
              spaceBetween: 0,
              },
              480: {
              slidesPerView: 1,
              spaceBetween: 0,
              },
              640: {
              slidesPerView: 1,
              spaceBetween: 0,
              }
          },
  }
);

var swiper = new Swiper(".myPtGallery", {
  breakpoints: {
      320: {
      slidesPerView: 2,
      spaceBetween: 30
      },
      480: {
      slidesPerView: 3,
      spaceBetween: 30
      },
      640: {
      slidesPerView: 4,
      spaceBetween: 30,
      }
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 1500,
  },
});

// Slider Shop-detail

var swiper = new Swiper(".cartSliderItem", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".cartSlider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  loop: true,
});

// slider about

var swiper = new Swiper(".ourExperts", {
  breakpoints: {
      320: {
      slidesPerView: 2,
      spaceBetween: 30
      },
      480: {
      slidesPerView: 2,
      spaceBetween: 30
      },
      640: {
      slidesPerView: 2,
      spaceBetween: 30,
      },
      960: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
  loop: true,
  autoplay: {
    duration: 1500,
  }
});

// Window Scroll - Header PC

$(window).scroll(function () { 
  if( $(window).scrollTop() > 500 ) {
    $('.header-navbar').addClass('header-navbar-scroll');
    $('.logo').addClass('logo-scroll');
  }
  else {
      $('.header-navbar').removeClass('header-navbar-scroll');
      $('.logo').removeClass('logo-scroll');
  }
})

// window scroll - Header Mobile Tablet
$(window).scroll(function () { 
  if( $(window).scrollTop() > 400 ) {
    $('.header-mobile').addClass('header-mobile-scroll');
  }
  else {
      $('.header-mobile').removeClass('header-mobile-scroll');
  }
})

// headermobile - mobileList

const barsIcon = document.querySelector('.bars');
const closeIcon = document.querySelector('.close-mobile-list');
const mobileList = document.querySelector('.mobile-list');
const overlay = document.querySelector('.overlay');

barsIcon.onclick = () => {
  mobileList.style.display = 'block';
  mobileList.style.animation = 'rightToLeft linear 0.5s forwards';
  overlay.style.display = 'block';
}

closeIcon.onclick = () => {
  mobileList.style.animation = 'leftToRight linear 0.5s forwards';
  overlay.style.display = 'none';
}

//  Validate form register in Contact

const inputElements = document.querySelectorAll('.form-input');
const formMessenger = document.querySelector('.form-messenger');

[...inputElements].forEach(element => {
    element.onblur = () => {
        if(element.value == '') {
            element.style.border = 'solid 1px red';
        }else {
            element.style.border= 'solid 1px #003961';
        }
    }
})

// nice-Select

$(document).ready(function() {
  $('.filter-select').niceSelect();
});

// Fancybox in gallery

Fancybox.bind("#gallery a", {
	groupAll : true, 
	on : {
	  ready : (fancybox) => {
		console.log(`fancybox #${fancybox.id} is ready!`);
	  }
	}
});

// Select product quantity in shop

const quantityNumber = document.querySelector('.quantity-detail span');
const quantityPlus = document.querySelector('.quantityPlus');
const quantityMinus = document.querySelector('.quantityMinus');
const priceProduct = document.querySelector('.product-detail-price');
const priceProductCurrent = document.querySelector('.product-detail-price').textContent;
let i = 1;

quantityPlus.addEventListener('click', () => {
  i = i + 1;
  quantityNumber.innerHTML = i;
  totalPrice();
})

quantityMinus.addEventListener('click', () => {
  if(i <= 0) {
    i = 0;
    quantityNumber.innerHTML = i;
    totalPrice();
  }else {
    i = i - 1;
    quantityNumber.innerHTML = i;
    totalPrice();
  }
})

function totalPrice() {
  priceProduct.innerHTML = priceProductCurrent*i;
}






