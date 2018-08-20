window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("header").classList.add('scroll');
        document.querySelector("header").style.backgroundColor = "#FFF";
        document.querySelector("header .wrap").style.height = '80px';
    } else {
      document.querySelector("header").classList.remove('scroll');
      document.querySelector("header").style.backgroundColor = "rgba(0,0,0,0)";
      document.querySelector("header .wrap").style.height = '200px';
    }
};

$(function(){
    $('.close').click(function(){
      $('.popup_container').hide();
    });

    $(".gnb_anchor a").click(function(e){
    	e.preventDefault();
    	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 80) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
    });

    $('#myBtn').click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });

    $('.gallery').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
});
