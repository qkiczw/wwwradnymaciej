$(document).ready(function () {
    const $page = $('body, html');
    const $getLink = $('.navbar-nav>li>a');
    const $getNavCollapse = $('.navbar-collapse');
    const $navbar = $('.navbar-nav');
    const $navLinks = $navbar.find('a');
    const $window = $(window);
    const $scrollToTopBtn = $('.scroll-to-top-btn');


    function navHide() {
        $getNavCollapse.collapse('hide');
    }
    $getLink.on('click', navHide);

    //odejmuje 100 px od sekcji do której przenosi # po id
    function mobileWidth() {
        const windowWidth = $(window).width();
        if ( windowWidth <= 768){
            return 100;
        } else if ( windowWidth > 768 && windowWidth <= 992){
            return  -75;
        }
        else {
            return 0;
        }
    }

    function scrollToSection() {
        const animationTime = 700;
        const anchor = $(this).attr('href');
        console.log(anchor)
        $(this)
            .parent()
            .addClass('active')
            .siblings()
            .removeClass('active');
        $page.animate({ scrollTop: $(anchor).offset().top - mobileWidth()}, animationTime);
    }
    $navLinks.on('click', scrollToSection);


    function toggleScrollToTopVisibility() {
        if ($(this).scrollTop() > 500) {
            $scrollToTopBtn.fadeIn(750);
        } else {
            $scrollToTopBtn.fadeOut();
        }
    };
    $window.on('scroll', toggleScrollToTopVisibility);

    function scrollMeToTop() {
        $page.animate({ scrollTop: 0 }, 1000)
    }
    $scrollToTopBtn.on('click', scrollMeToTop);
});

