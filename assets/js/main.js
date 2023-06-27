(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $(".menu-open , .offcanvas-overlay").click(function () {
      $(".offcanvas-area , .offcanvas-overlay").addClass("active");
    });
    $(".menu-close , .offcanvas-overlay").click(function () {
      $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
    });

    // ----Tab---
    $(document).ready(function () {
      // Show the first tab by default
      $(".tab-content:first").show();

      // Handle tab click event
      $(".tab").click(function () {
        // Remove active class from all tabs
        $(".tab").removeClass("active-tab");

        // Add active class to the clicked tab
        $(this).addClass("active-tab");

        // Hide all tab content
        $(".tab-content").hide();

        // Show the clicked tab content
        var tabId = $(this).attr("data-tab");
        $("#" + tabId).show();
      });
    });

    // ---accordion ---
    $(".accordion .accordion-body").hide();

    $(".accordion .accordion-title").click(function () {
      var accordionBody = $(this).next(".accordion-body");
      var accordionIcon = $(this).find(".accordion-icon");

      accordionBody.slideToggle();
      accordionIcon.toggleClass("fa-plus fa-minus");
    });

    // ---------========= Ticket section start ========= ---------
    $(".ticket_slider").owlCarousel({
      nav: true,
      dot: false,
      loop: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsiveClass: true,
      navText: [
        "<i class='far fa-arrow-left'></i>",
        "<i class='far fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 1,
          margin: 15,
        },
        768: {
          items: 2,
        },
        991: {
          items: 3,
          margin: 20,
        },
        1200: {
          items: 3,
          margin: 30,
        },
      },
    });

    new VenoBox({
      selector: ".video-play",
    });
  });

  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
})(jQuery);
