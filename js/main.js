$(function () {

  $('.top-slider__inner').slick({
    fade: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="87" height="87" viewBox="0 0 87 87" xmlns="http://www.w3.org/2000/svg"><path d="M54.375 21.75L32.625 43.5L54.375 65.25" stroke="white" stroke - width="3.625"></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="87" height="87" viewBox="0 0 87 87"xmlns="http://www.w3.org/2000/svg"><path d="M32.625 21.75L54.375 43.5L32.625 65.25" stroke="white" stroke- width="3.625"></svg></button>',
    responsive: [
      {
        breakpoint: 950,
        settings: {
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  })
  $('.novetly__slider-items, .stock-slider__items').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.125 9.25L13.875 18.5L23.125 27.75"  stroke ="#343F24" stroke - width="2.6825" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.875 9.25L23.125 18.5L13.875 27.75" stroke ="#343F24" stroke - width="2.6825" /></svg ></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
          dots: true,
          infinite: true
        }
      }
    ]
  })

 $('.info__btn').on('click', function () {
  $('.info__inner').toggleClass('info__inner--close')
 });

  $(".star").rateYo({
    rating: 3.6,
    starWitdh: "17px",
    readOnly: true,
    starSvg: '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9604 6.54449C16.6998 5.72926 15.2651 5.543 13.7459 5.34196C12.9133 5.23273 11.9672 5.10926 11.6818 4.89767C11.3942 4.68767 10.9932 3.8239 10.6386 3.06038C9.99379 1.67212 9.38329 0.362476 8.52955 0.360365L8.51372 0.357727C7.66736 0.371974 7.05053 1.66578 6.39465 3.03927C6.03321 3.79857 5.62217 4.65917 5.33565 4.8676C5.04597 5.07391 4.09988 5.19 3.2646 5.29131C1.74706 5.47598 0.310258 5.64906 0.0422094 6.46006C-0.22584 7.27107 0.822612 8.26781 1.93385 9.32101C2.54382 9.90038 3.23452 10.5568 3.34322 10.8945C3.45192 11.2322 3.26777 12.1693 3.10683 12.993C2.8124 14.4936 2.53433 15.9146 3.22239 16.4227C3.38702 16.5404 3.59386 16.6 3.83816 16.5947C4.54047 16.5837 5.55093 16.037 6.52762 15.5072C7.25948 15.1073 8.08948 14.6561 8.45884 14.6519C8.81606 14.6519 9.6487 15.1157 10.3832 15.5247C11.3821 16.0792 12.4157 16.6533 13.1191 16.6417C13.3386 16.6385 13.5259 16.5821 13.6789 16.4718C14.3712 15.9732 14.1074 14.5527 13.8293 13.0463C13.6763 12.221 13.5048 11.2818 13.613 10.9441C13.7248 10.608 14.4235 9.96 15.0392 9.38486C16.1605 8.34168 17.219 7.35971 16.9604 6.54449Z" fill="#F2C94C"/></svg>'
  });

  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--active')
  })

})