$(document).ready(function () {
    const $page = $('body, html');
    const $getLink = $('.navbar-nav>li>a');
    const $getNavCollapse = $('.navbar-collapse');
    const $navbar = $('.navbar-nav');
    const $navLinks = $navbar.find('a');
    const $window = $(window);
    const $scrollToTopBtn = $('.scroll-to-top-btn');
    const $familyPic01 = $('.family-pic-01');
    const $familyPic02 = $('.family-pic-02');
    const $familyPic03 = $('.family-pic-03');
    const $electionProg01 = $('.election-prog-01');
    const $electionProg02 = $('.election-prog-02');
    const $electionProg03 = $('.election-prog-03');

    function navHide() {
        $getNavCollapse.collapse('hide');
    }
    $getLink.on('click', navHide);

    //subtracts px from id on small screens
    function mobileWidth() {
        const windowWidth = $(window).width();
        if ( windowWidth <= 768){
            return 100;
        }
        else {
            return 0;
        }
    }

    function scrollToSection() {
        const animationTime = 700;
        const anchor = $(this).attr('href');
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

    $(".candidate-slogan").animate({ right: '0' }, 1000);

    function familyImage01Visibility() {
        if ($(this).scrollTop() > 350) {
            $familyPic01.animate({left: '0'}, 1000);
        }
    };
    function familyImage03Visibility() {
        if ($(this).scrollTop() > 550) {
            $familyPic03.animate({ left: '0' }, 1500);
        }
    };
    function familyImage02Visibility() {
        if ($(this).scrollTop() > 350) {
            $familyPic02.animate({ right: '0' }, 2000);
        }
    };
    $window.on('scroll', familyImage01Visibility);
    $window.on('scroll', familyImage03Visibility);
    $window.on('scroll', familyImage02Visibility);

    function electionProg01Visibility() {
        if ($(this).scrollTop() > 1600) {
            // $electionProg01.fadeIn(1500);
            $electionProg01.fadeTo(1500, 1)
        }
    };
    $window.on('scroll', electionProg01Visibility);
    
    function electionProg02Visibility() {
        if ($(this).scrollTop() > 1850) {
            // $electionProg02.fadeIn(1500);
            $electionProg02.fadeTo(1500, 1)

        }
    };
    $window.on('scroll', electionProg02Visibility);

    function electionProg03Visibility() {
        if ($(this).scrollTop() > 2050) {
            // $electionProg03.fadeIn(1500);
            $electionProg03.fadeTo(1500, 1)

        }
    };
    $window.on('scroll', electionProg03Visibility);

    function checkPos() {
        
        console.log('Ypos', $window.scrollTop())
    };

    $window.on('scroll', checkPos);
});

