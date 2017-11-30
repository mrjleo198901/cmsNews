// ---------------------------------------
// Custom JS
// ---------------------------------------

// Preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

// Init Fastclick
$(function() {
    FastClick.attach(document.body);
});
$(document).ready(function(){
    $(this).scrollTop(0);
});
// -----------------------------
// Navbar fade
// -----------------------------

$(function() {
    var navbar = $('.navbar');
    if (navbar.hasClass("is-transparent")) {
        $(window).scroll(function() {
            if (navbar.offset().top > 250) {
                navbar.removeClass("is-transparent");
            } else {
                navbar.addClass("is-transparent");
            }
        });
    } else {
        return;
    }
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
		$(".navbar").removeClass("no-transparent");
       
    } else {
        $(".navbar").addClass("no-transparent");
    }
});

// -----------------------------
//  Smooth scroll
// ----------------------------
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

// -----------------------------
//  CSS3 Transition
// -----------------------------
$('*').each(function(){
	if($(this).attr('data-animation')) {
		var $animationName = $(this).attr('data-animation'),
			$animationDelay = "delay-"+$(this).attr('data-animation-delay');
		$(this).appear(function() {
			$(this).addClass('animated').addClass($animationName);
			$(this).addClass('animated').addClass($animationDelay);
		});
	}
});

// -----------------------------
// Twitter
// -----------------------------
$(".twitter-feed").tweet({
    join_text: "auto",
    username: ["getbootstrap"],
    modpath: "php/twitter/",
    count: 6,
    loading_text: "loading ...",
    template: "{text}{time}{user}",        
    auto_join_text_default: " ", //We said,
    auto_join_text_ed: " ", //We 
    auto_join_text_ing: " ", //We were 
    auto_join_text_reply: " ", //We replied 
    auto_join_text_url: " " //We were checking out 
 });

//Carousel for tweets
$('.tweet_list').slick({  
    fade: true,
    slide: 'ul>li',
    autoplay: true,
    autoplaySpeed: 5000
});

// -----------------------------
// Slick
// -----------------------------

$('.slider').slick({
    slide: 'ul>li',
    autoplay: true,
    autoplaySpeed: 5000
});

//Quotes
$('.quote-list').slick({
    slide: 'ul>li',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false
});

//Brands
$('.brands').slick({
  slide: 'ul>li',
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// -----------------------------
// Isotope filtering
// -----------------------------
$(function(){
    var $container = $('.isotope');
    // init
    $container.imagesLoaded( function() {
        $container.isotope({ 
            itemSelector: ".item",
            masonry: {
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer"
            }
        });
    });
    // filter items when filter link is clicked
    $('#filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
});

// -----------------------------
// Masonry /Blog List/
// ----------------------------
$(function(){
    var $masonry = $('#list-masonry');
    // init
    $masonry.imagesLoaded( function() {
        $masonry.isotope({ 
            itemSelector: "#list-masonry>div",
            masonry: {
                columnWidth: "#list-masonry>div"                
                }
        });
    });    
});

// -----------------------------
// Count To
// -----------------------------
$('.number').appear(function() {
    $('.number').countTo();
});

// -----------------------------
// Magnific Popup
// -----------------------------
$('.ajax-popup-link').magnificPopup({
    type: 'ajax',
    midClick: true,
    closeBtnInside: true,
    showCloseBtn: false,
    preloader: true,
    fixedContentPos: false,
    gallery: {
        enabled: true,
        arrowMarkup: '',
        preload: [1,2]
    },
    callbacks: {
        ajaxContentAdded: function() {
            // Slider in popup
            $('.popup-slider').slick({
                slide: 'ul>li',
                dots: true,
                arrows: false,
                customPaging: function(slick,index) {
                    return '<a>' + ++index + '</a>';
               },
               onInit: function() {
                   // same height for popup-slider and project-wrap
                    var $equalizer = $('.equalizer');
                    var maxHeight = 0;
                    $equalizer.each(function() {
                        maxHeight = Math.max(maxHeight, $(this).outerHeight());
                    });
                    $equalizer.css({ height: maxHeight + 'px' });
               }
            });
            this.content.find('.fa-close').on('click',function(e){
                e.preventDefault();
                $.magnificPopup.close();
            });
        },
        buildControls: function () {
            var magnificPopup = $.magnificPopup.instance;
            $('body').on('click', '.fa-angle-double-left', function() {
                magnificPopup.prev();
            });
            $('body').on('click', '.fa-angle-double-right', function() {
                magnificPopup.next();
            });            
        },        
        close: function() {
            console.log('Close');
        }
    }
});

// -----------------------------
// Easy Pie Chart
// -----------------------------
$('.chart').appear(function() {
    $('.chart').easyPieChart({
        barColor: "#fff",//default, set optionaly in html data-bar-color option
        trackColor: "transparent",
        //scaleColor: "#CCC",
        scaleLength: 0,
        lineCap: "square",
        lineWidth: 5,
        animate: 2000,
        onStart: function() {
            $('.percent').countTo({
                speed: 2000
            });
        }
    });
});

// -----------------------------
// call-to section
// Chrome Fix Repair
// Remove fixed background-attachment
// ----------------------------
$(function () {
    var mozilla = /firefox/.test(navigator.userAgent.toLowerCase());
    if (mozilla == false) {
        $(".call-to").css({"background-attachment":"scroll"});
    }
});
//window load events
function load() {
        console.log("load event detected!");
      }
      window.onload = load;
	  
	  
	// -----------------------------
// video
// -----------------------------  
	  
$('#video').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
	$('video').click(function() {
  if ($(this).get(0).play) {
    $(this).get(0).play();
  }
  else {
    $(this).get(0).play();
  }
});
})
	  
	  
	  
	  ! function(e) {
    "use strict";

    function t() {
        return !!("ontouchstart" in window) || !!("onmsgesturechange" in window) && !!window.navigator.maxTouchPoints
    }

    function i() {
        e("#mobile-menu-button").on("click", function(t) {
            t.preventDefault(), e("#mobile-menu").slideToggle(300)
        })
    }

    function a() {
        e(window).width() < 992 ? e("#menu").length > 0 && e("#mobile-menu").length < 1 && (e("#menu").clone().attr({
            id: "mobile-menu",
            "class": ""
        }).insertAfter("#header"), e("#mobile-menu .megamenu > a").on("click", function(t) {
            t.preventDefault(), e(this).toggleClass("open").next("div").slideToggle(300)
        }), e("#mobile-menu .dropdown > a").on("click", function(t) {
            t.preventDefault(), e(this).toggleClass("open").next("ul").slideToggle(300)
        })) : e("#mobile-menu").hide()
    }

    function n() {
        e(".menu li.search a").on("click", function(t) {
            t.preventDefault(), e(".menu li.search a").hasClass("open") || (e("#search-form").fadeIn().addClass("open"), e("#search-form").append('<a class="close" href="#">x</a>')), e("#search-form a.close").on("click", function(t) {
                t.preventDefault(), e("#search-form").fadeOut().removeClass("open")
            })
        }), e(window).scroll(function() {
            e("#search-form").fadeOut(300)
        })
    }

    function o() {
        var t = e("#header").innerHeight() + 20;
        e("#header").clone().attr({
            id: "header-sticky",
            "class": ""
        }).insertAfter("header"), e(window).scroll(function() {
            e(window).scrollTop() > t ? (e("#header-sticky").slideDown(300).addClass("header-sticky"), e("#header .menu ul, #header .menu .megamenu-container").css({
                visibility: "hidden"
            })) : (e("#header-sticky").slideUp(100).removeClass("header-sticky"), e("#header .menu ul, #header .menu .megamenu-container").css({
                visibility: "visible"
            }))
        }), e("#header-sticky .menu li.search a").on("click", function(t) {
            t.preventDefault(), e("#header-sticky .menu li.search a").hasClass("open") || (e("#header-sticky #search-form").fadeIn().addClass("open"), e("#header-sticky #search-form").append('<a class="close" href="#">x</a>')), e("#search-form a.close").on("click", function(t) {
                t.preventDefault(), e("#header-sticky #search-form").fadeOut().removeClass("open")
            })
        }), e(window).scroll(function() {
            e("#header-sticky #search-form").fadeOut(300)
        })
    }

    function s() {
        e(".progress .progress-bar:in-viewport").each(function() {
            e(this).hasClass("animated") || (e(this).addClass("animated"), e(this).animate({
                width: e(this).attr("data-width") + "%"
            }, 2e3))
        })
    }

    function r() {
        "undefined" != typeof e.fn.easyPieChart && e(".pie-chart:in-viewport").each(function() {
            e(this).easyPieChart({
                animate: 1500,
                lineCap: "square",
                lineWidth: e(this).attr("data-line-width"),
                size: e(this).attr("data-size"),
                barColor: e(this).attr("data-bar-color"),
                trackColor: e(this).attr("data-track-color"),
                scaleColor: "transparent",
                onStep: function(t, i, a) {
                    e(this.el).find(".pie-chart-percent .value").text(Math.round(a))
                }
            })
        })
    }

    function l() {
        "undefined" != typeof e.fn.jQuerySimpleCounter && e(".counter .counter-value:in-viewport").each(function() {
            e(this).hasClass("animated") || (e(this).addClass("animated"), e(this).jQuerySimpleCounter({
                start: 0,
                end: e(this).attr("data-value"),
                duration: 2e3
            }))
        })
    }

   
    
    e(document).ready(function() {
        if (o(), "undefined" != typeof e.fn.superfish && e(".menu").superfish({
                delay: 500,
                animation: {
                    opacity: "show",
                    height: "show"
                },
                speed: "fast",
                autoArrows: !0
            }), i(), a(), n(), "undefined" != typeof e.fn.fancybox && e(".fancybox").fancybox({
                prevEffect: "none",
                nextEffect: "none"
            }), "undefined" != typeof e.fn.revolution && e(".rev_slider").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 9e3,
                navigation: {
                    arrows: {
                        style: "custom",
                        enable: !0,
                        hide_onmobile: !0,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        style: "custom",
                        enable: !0,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        direction: "horizontal",
                        space: 10,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 60
                    },
                    touch: {
                        touchenabled: "on",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    }
                },
                gridwidth: 1170,
                gridheight: 720
            }), "undefined" != typeof e.fn.owlCarousel) {
            var s = e(".owl-carousel.horizontal-timeline").owlCarousel({
                singleItem: !0,
                slideSpeed: 500,
                autoPlay: !1,
                stopOnHover: !0,
                navigation: !1,
                navigationText: !1,
                pagination: !1,
                paginationNumbers: !1,
                mouseDrag: !1,
                touchDrag: !1,
                transitionStyle: "fade"
            }).data("owlCarousel");
            e(".horizontal-timeline-controls li a").each(function() {
                e(this).on("click", function(t) {
                    t.preventDefault();
                    var i = e(this).attr("data-slide");
                    return e(".horizontal-timeline-controls li a").removeClass("active"), e(this).addClass("active"), s.goTo(i - 1), !1
                })
            });
            var r = e(".owl-carousel.testimonials-slider").owlCarousel({
                singleItem: !0,
                slideSpeed: 500,
                autoPlay: !0,
                stopOnHover: !0,
                navigation: !1,
                navigationText: !1,
                pagination: !1,
                paginationNumbers: !1,
                mouseDrag: !1,
                touchDrag: !0,
                transitionStyle: "fade"
            });
            e(".next").on("click", function() {
                r.trigger("owl.next")
            }), e(".prev").on("click", function() {
                r.trigger("owl.prev")
            });
            var l = e(".owl-carousel.projects-slider").owlCarousel({
                singleItem: !0,
                slideSpeed: 500,
                autoPlay: !0,
                stopOnHover: !0,
                navigation: !1,
                navigationText: !1,
                pagination: !1,
                paginationNumbers: !1,
                mouseDrag: !1,
                touchDrag: !0,
                transitionStyle: "fade"
            });
            e(".next").on("click", function() {
                l.trigger("owl.next")
            }), e(".prev").on("click", function() {
                l.trigger("owl.prev")
            }), e(".owl-carousel.images-slider").owlCarousel({
                singleItem: !0,
                slideSpeed: 200,
                autoPlay: !0,
                stopOnHover: !0,
                navigation: !1,
                navigationText: !1,
                pagination: !0,
                paginationNumbers: !1,
                mouseDrag: !1,
                touchDrag: !0,
                transitionStyle: "fade"
            }), e(".owl-carousel.images-slider-2").owlCarousel({
                singleItem: !0,
                slideSpeed: 200,
                autoPlay: !0,
                stopOnHover: !0,
                navigation: !1,
                navigationText: !1,
                pagination: !0,
                paginationNumbers: !1,
                mouseDrag: !1,
                touchDrag: !0,
                transitionStyle: "fade"
            }), e(".owl-carousel.logos-slider").owlCarousel({
                items: 5,
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [991, 4],
                itemsTablet: [767, 2],
                itemsMobile: [479, 1],
                slideSpeed: 500,
                autoPlay: !0,
                stopOnHover: !0,
                navigation: !0,
                navigationText: !1,
                pagination: !1,
                paginationNumbers: !1,
                mouseDrag: !0,
                touchDrag: !0,
                transitionStyle: !1
            })
        }
 h(), m()
    })
}(window.jQuery);
