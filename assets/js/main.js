(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $(".testimonial-sliders").owlCarousel({
      items: 3,
      nav: false,
      loop: false,
      autoplay: true,
      dots: false,
      margin: 120,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      mouseDrag: true,
      touchDrag: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
          margin: 50,
        },
        800: {
          items: 2,
          margin: 60,
        },
        900: {
          items: 2,
          margin: 60,
        },
        1080: {
          items: 3,
          margin: 60,
        },
        1079: {
          items: 3,
        },
      },
    });
  });

  // Show the mobile popup when nav-bar icon is clicked
  $(".nav-bar").on("click", function () {
    $(".mobile-popup").addClass("active");
  });

  // Hide the mobile popup when nav-close icon is clicked
  $(".nav-close").on("click", function () {
    $(".mobile-popup").removeClass("active");
  });

  // Hide the mobile popup when any link in the mobile menu is clicked
  $(".mobile-popup a").on("click", function () {
    $(".mobile-popup").removeClass("active");
  });

  $("").waypoint(function (direction) {
    if (direction == "down") {
      $("").addClass("sticky");
    } else {
      $("").removeClass("sticky");
    }
  });

  jQuery(window).load(function () {});
})(jQuery);
