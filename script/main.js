// Section1 slideshow
$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
});

//Section2 date Counters
var date1 = new Date("02/04/2022");
var date2 = new Date();
var difference = (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
$(".dateCounter1")[0].innerHTML = Math.round(difference) + " DAYS";

var date1 = new Date("03/04/2022");
var date2 = new Date();
var difference = (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
$(".dateCounter2")[0].innerHTML = Math.round(difference) + " DAYS";

//Section4 fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  caption: function (fancybox, carousel, slide) {
    return (
      `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
    );
  },
});

//AOS
AOS.init();

//Media share
$("#shareIcons").jsSocials({
  url: "http://mohammedyounusmushfiq.tk",
  text: "Mohammed Younus Mushfiq",
  showLabel: false,
  showCount: false,
  shares: ["twitter", "facebook", "linkedin", "whatsapp"]
})