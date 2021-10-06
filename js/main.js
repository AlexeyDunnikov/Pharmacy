$(function () {
  //sliders
  $(".top__list").slick({
    autoplay: true,
    prevArrow: `<button class="top-slider__arrow top-slider__arrow--prev">
              <svg
                class="top-slider__arrow-img"
                width="16"
                height="29"
                viewBox="0 0 16 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.9673 14.1924L14.9422 1.37269C15.2613 1.05741 15.2613 0.551755 14.9422 0.236466C14.6231 -0.0788221 14.1113 -0.0788221 13.7922 0.236466L0.239328 13.6273C-0.0797759 13.9426 -0.0797759 14.4482 0.239328 14.7635L13.7922 28.1484C13.9487 28.3031 14.1595 28.3864 14.3642 28.3864C14.5689 28.3864 14.7796 28.309 14.9362 28.1484C15.2553 27.8331 15.2553 27.3275 14.9362 27.0122L1.9673 14.1924Z"
                  fill="#2F3035"
                />
              </svg>
            </button>`,
    nextArrow: `<button class="top-slider__arrow top-slider__arrow--next">
              <svg
                class="top-slider__arrow-img"
                wwidth="16"
                height="29"
                viewBox="0 0 16 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2143 14.1939L0.239465 27.0137C-0.0796394 27.3289 -0.0796394 27.8346 0.239465 28.1499C0.558568 28.4652 1.07034 28.4652 1.38944 28.1499L14.9423 14.759C15.2614 14.4438 15.2614 13.9381 14.9423 13.6228L1.38944 0.23793C1.2329 0.0832615 1.02217 -2.28882e-05 0.817462 -2.28882e-05C0.612754 -2.28882e-05 0.402025 0.0773125 0.245483 0.23793C-0.0736198 0.553219 -0.0736198 1.05887 0.245483 1.37416L13.2143 14.1939Z"
                  fill="#2F3035"
                />
              </svg>
            </button>`,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".add-slider").slick({
    slidesToShow: 4,

    prevArrow: `<button class="add-slider__arrow add-slider__arrow--prev">
              <svg
                class="add-slider__arrow-img"
                width="16"
                height="29"
                viewBox="0 0 16 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.9673 14.1924L14.9422 1.37269C15.2613 1.05741 15.2613 0.551755 14.9422 0.236466C14.6231 -0.0788221 14.1113 -0.0788221 13.7922 0.236466L0.239328 13.6273C-0.0797759 13.9426 -0.0797759 14.4482 0.239328 14.7635L13.7922 28.1484C13.9487 28.3031 14.1595 28.3864 14.3642 28.3864C14.5689 28.3864 14.7796 28.309 14.9362 28.1484C15.2553 27.8331 15.2553 27.3275 14.9362 27.0122L1.9673 14.1924Z"
                  fill="#2F3035"
                />
              </svg>
            </button>`,
    nextArrow: `<button class="add-slider__arrow add-slider__arrow--next">
              <svg
                class="add-slider__arrow-img"
                wwidth="16"
                height="29"
                viewBox="0 0 16 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2143 14.1939L0.239465 27.0137C-0.0796394 27.3289 -0.0796394 27.8346 0.239465 28.1499C0.558568 28.4652 1.07034 28.4652 1.38944 28.1499L14.9423 14.759C15.2614 14.4438 15.2614 13.9381 14.9423 13.6228L1.38944 0.23793C1.2329 0.0832615 1.02217 -2.28882e-05 0.817462 -2.28882e-05C0.612754 -2.28882e-05 0.402025 0.0773125 0.245483 0.23793C-0.0736198 0.553219 -0.0736198 1.05887 0.245483 1.37416L13.2143 14.1939Z"
                  fill="#2F3035"
                />
              </svg>
            </button>`,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  });

  $(".open-menu-btn").on("click", function () {
    $(".popup-menu").addClass("popup-menu--active");
  });
  $(".popup-menu__close-btn").on("click", function () {
    $(".popup-menu").removeClass("popup-menu--active");
  });

  //tabs
  $(".tab").on("click", function (evt) {
    evt.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find("div")).removeClass(
      "tabs-content--active"
    );
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
  });

  //open authorization
  $(".open__authorization-form-btn").on("click", function (evt) {
    evt.preventDefault();
    $(".authorization-popup").addClass("authorization-popup--active");
  });
  $(".authorization-popup__close").on("click", function (evt) {
    evt.preventDefault();
    $(".authorization-popup").removeClass("authorization-popup--active");
  });

  //catalog-list

  $(".catalog__top-item__link").on("click", function (evt) {
    evt.preventDefault();
    $(this).toggleClass("catalog__top-item__link--active");
  });

  $(".catalog__top__display-btn").on("click", function (evt) {
    var displayType = $(this).attr("data-display");
    $(".catalog__top__display-btn").removeClass(
      "catalog__top__display-btn--active"
    );
    $(this).addClass("catalog__top__display-btn--active");
    if (displayType == "grid") {
      $(".tabs-content").removeClass("tabs-content--rows");
    } else if (displayType == "rows") {
      $(".tabs-content").addClass("tabs-content--rows");
    }
  });

  $(".catalog__top-filter").on("click", function () {
    $(".catalog__tabs").toggleClass("catalog__tabs--active");
  });

  $(".catalog__tab").on("click", function () {
    $(".catalog__tabs").removeClass("catalog__tabs--active");
  });

  //card

  $(".card__content__num-btn--plus").on("click", function () {
    $(".card__content__num").text(
      parseInt($(".card__content__num").text()) + 1
    );
  });
  $(".card__content__num-btn--minus").on("click", function () {
    if (parseInt($(".card__content__num").text()) >= 2) {
      $(".card__content__num").text(
        parseInt($(".card__content__num").text()) - 1
      );
    }
  });

  //about
  $(".about__text-btn").on("click", function () {
    if ($(this).hasClass("about__text-btn--active")) {
      $(this).text("Подробнее...");
    } else {
      $(this).text("Скрыть");
    }
    $(this).toggleClass("about__text-btn--active");
    $(".about__text-add-box").slideToggle(200);
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0 && $(window).width() >= '760') {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
});
