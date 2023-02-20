$("#preloader").fadeOut();
$(document).ready(function ($) {
  $(".modal .modal-body").addClass("mCustomScrollbar");
});
/*-------------------------------------------------*/
$(window).scroll(function () {
  if ($(window).scrollTop() >= 70) {
    $(".header").addClass("sticky");
    $("#scroll-up").fadeIn(200);
  } else {
    $(".header").removeClass("sticky");
    $("#scroll-up").fadeOut(200);
  }
});
$("#scroll-up").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 500);
});
/*----------------Mobile Menu---------------------*/
$("#menu-right").click(function () {
  $("#menu-right").toggleClass("active");
  $(".main-navigation").attr("id", "mobile-menu");
  $("#mobile-menu").toggleClass("active");
  $("#mobile-menu ul").attr("id", "accordion");
  mobile_nav();
});
function mobile_nav() {
  $(".sub-menu").parent("li").addClass("has-child");
  $("<div class='fa fa-angle-down submenu-toogle'></div>").insertAfter(
    ".has-child > a"
  );
  $(".has-child a+.submenu-toogle").on("click", function (ev) {
    ev.stopPropagation();
    var $this = $(this);
    if ($this.next().hasClass("show")) {
      $this.next().removeClass("show");
      $this.next().slideUp(350);
    } else {
      $this.parent().parent().find("ul").removeClass("show");
      $this.parent().parent().find("ul").slideUp(350);
      $this.next().toggleClass("show");
      $this.next().slideToggle(350);
    }
  });
}
/*-----------------Slider------------------------*/
$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  nav: true,
  dots: false,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  slideSpeed: 8000,
  paginationSpeed: 800,
  items: 1,
  navText: [
    "<i class='fa fa-long-arrow-left'></i>",
    "<i class='fa fa-long-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
/*---------------testimonials-----------------*/
$("#testimonial-slider").owlCarousel({
  loop: true,
  autoplay: true,
  nav: false,
  dots: false,
  margin: 15,
  animateOut: "fadeOutLeft",
  animateIn: "zoomIn",
  navText: [
    "<i class='fa fa-long-arrow-left'></i>",
    "<i class='fa fa-long-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    600: {
      items: 1,
      dots: false,
    },
    1000: {
      items: 1,
      loop: true,
    },
  },
});
/*---------------blog-----------------*/
$("#blog-slider").owlCarousel({
  loop: false,
  autoplay: false,
  nav: false,
  dots: false,
  animateOut: "fadeOutLeft",
  animateIn: "zoomIn",
  navText: [
    "<i class='fa fa-long-arrow-left'></i>",
    "<i class='fa fa-long-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      loop: true,
      autoplay: true,
      dots: false,
    },
    600: {
      items: 2,
      loop: true,
      autoplay: true,
      dots: false,
    },
    1000: {
      items: 3,
      loop: true,
    },
  },
});
/************************************************/
$(function () {
  $("input, textarea").on("cut copy paste", function (e) {
    e.preventDefault();
    rNotify({
      messageType: "error",
      message: "cut,copy and Paste Not Allowed",
    });
  });
  $("input, textarea").on("drop", function (e) {
    e.preventDefault();
    rNotify({
      messageType: "error",
      message: "Select & drop is not Allowed!",
    });
  });
  /* */
});
/**************Validation*********************/
jQuery(document).ready(function ($) {
  let options = {
    rules: {
      name: {
        required: true,
        regex: /^[a-zA-Z\s]+$/,
      },
      message: {
        required: true,
        regex: /^[a-zA-Z0-9_\.\,\(\)\?\&\+\=\-\{\}\"\'\s]*$/,
      },
      location: {
        required: true,
        regex: /^[a-zA-Z\s]+$/,
      },
      email: {
        required: true,
        regex:
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      },
      phone: {
        required: true,
        regex: /^[0-9]+$/,
        minlength: 10,
      },
    },
    // Specify the validation error messages
    messages: {
      name: {
        required: "Please enter your name",
        regex: "Please enter characters only",
      },
      message: {
        required: "Please enter your message",
        regex: "URL / Special characters not allowed",
      },
      location: {
        required: "Please enter your city",
        regex: "Please enter characters only",
      },
      email: {
        required: "Please enter your mail address",
        regex: "Invalid email address",
      },
      phone: {
        required: "Please enter your contact no.",
        regex: "Mobile No. contains only numbers",
        minlength: "Mobile No. must be at least 10 characters long",
      },
    },
  };
  $("form").each(function () {
    $(this).validate(options);
  });
  $.validator.addMethod("regex", function (value, element, regexp) {
    return this.optional(element) || regexp.test(value);
  });
});
/************* Online API ***********/
// setTimeout(function () {
//   $.getScript("https://www.google.com/recaptcha/api.js");
$(".fmap").append(
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2224060154444!2d77.17869661507973!3d28.502955582469106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce16057968a67%3A0xa22a007098e4464d!2schattarpur%20mandir!5e0!3m2!1sen!2sin!4v1578034903555!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0; " allowfullscreen=""></iframe>'
);
// });
