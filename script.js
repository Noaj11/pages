$(function(){


    $(".productThumbSlider").slick({
      slidesToShow: 4,
      arrows: false,
      vertical: true,
      asNavFor: ".productLargeSlider",
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            vertical: false,
          },
        },
      ],
    });
    $(".productLargeSlider").slick({
      slidesToShow: 1,
      arrows: false,
      asNavFor: ".productThumbSlider",
    });


})