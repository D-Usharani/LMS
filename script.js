
// $(document).ready(function() {
//     $(window).scroll(function() {
//         // sticky navbar on scroll script
//         if (this.scrollY > 20) {
//             $('.navbar').addClass("sticky");
//         } else {
//             $('.navbar').removeClass("sticky");
//         }

//         // scroll-up button show/hide script
//         if (this.scrollY > 500) {
//             $('.scroll-up-btn').addClass("show");
//         } else {
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     // slide-up script
//     $('.scroll-up-btn').click(function() {
//         $('html').animate({scrollTop: 0});
//         // removing smooth scroll on slide-up button click
//         $('html').css("scrollBehavior", "auto");
//     });

//     // toggle menu/navbar script
//     $('.menu-btn').click(function() {
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });

//     // typing text animation script
//     var typed = new Typed(".typing", {
//         strings: ["Innovative", "Creative", "Developer", "Designer", "Interactive web designer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed = new Typed(".typing-2", {
//         strings: ["Innovative", "Creative", "Developer", "Designer", "Interactive web designer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     // owl carousel script
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//             0: {
//                 items: 1,
//                 nav: false
//             },
//             600: {
//                 items: 2,
//                 nav: false
//             },
//             1000: {
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
    
//     // Smooth scrolling for menu links
//     $('.menu-btn').on('click', function(e) {
//         e.preventDefault();
//         const target = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(target).offset().top
//         }, 800); // Adjust the animation speed as needed
//         // Close the mobile menu after clicking a link
//         $('.navbar .menu').removeClass("active");
//         $('.menu-btn i').removeClass("active");
//     });
    
//     // Highlight the active menu item when scrolling to a section
//     $(window).on('scroll', function() {
//         $('.menu-btn').each(function() {
//             const target = $($(this).attr('href'));
//             if (target.length) {
//                 if (target.offset().top <= $(window).scrollTop() + 100) {
//                     $('.menu-btn').removeClass('active');
//                     $(this).addClass('active');
//                 }
//             }
//         });
//     });
// });

   $(document).ready(function() {
            $(window).scroll(function() {
                // sticky navbar on scroll script
                if (this.scrollY > 20) {
                    $('.navbar').addClass("sticky");
                    // Disable the hamburger menu when sticky navbar is active
                    $('.menu-btn').removeClass('active');
                    $('.navbar .menu').removeClass("active");
                } else {
                    $('.navbar').removeClass("sticky");
                }

                // scroll-up button show/hide script
                if (this.scrollY > 500) {
                    $('.scroll-up-btn').addClass("show");
                } else {
                    $('.scroll-up-btn').removeClass("show");
                }
            });

            // slide-up script
            $('.scroll-up-btn').click(function() {
                $('html').animate({scrollTop: 0});
                // removing smooth scroll on slide-up button click
                $('html').css("scrollBehavior", "auto");
            });

            // toggle menu/navbar script
            $('.menu-btn').click(function() {
                $('.navbar .menu').toggleClass("active");
                $('.menu-btn i').toggleClass("active");
            });

            // typing text animation script
            var typed = new Typed(".typing", {
                strings: ["Innovative", "Creative", "Developer", "Designer", "Interactive web designer"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });

            var typed = new Typed(".typing-2", {
                strings: ["Innovative", "Creative", "Developer", "Designer", "Interactive web designer"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });

            // owl carousel script
            $('.carousel').owlCarousel({
                margin: 20,
                loop: true,
                autoplay: true,
                autoplayTimeOut: 2000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: false
                    }
                }
            });

            // Smooth scrolling for menu links
            $('.menu-btn').on('click', function(e) {
                e.preventDefault();
                const target = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 800); // Adjust the animation speed as needed
                // Close the mobile menu after clicking a link
                $('.navbar .menu').removeClass("active");
                $('.menu-btn i').removeClass("active");
            });

            // Highlight the active menu item when scrolling to a section
            $(window).on('scroll', function() {
                $('.menu-btn').each(function() {
                    const target = $($(this).attr('href'));
                    if (target.length) {
                        if (target.offset().top <= $(window).scrollTop() + 100) {
                            $('.menu-btn').removeClass('active');
                            $(this).addClass('active');
                        }
                    }
                });
            });
        });

        //projects
    $(document).ready(function() {
        $(".carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000, // Adjust autoplay speed in milliseconds
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
