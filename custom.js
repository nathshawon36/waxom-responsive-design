$(function(){
// video
$('.venobox').venobox(); 

// counter
$('.counter').counterUp({
    delay: 5,
    time: 2000
});

// blog slider
$('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    centerMode:true,
    centerPadding:false,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          }
      ]
});


});