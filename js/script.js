window.onscroll = function() {scrollFunction()};

function initialize() {
    var mapLocation = new google.maps.LatLng('37.553446', '126.924886'); // 지도에서 가운데로 위치할 위도와 경도
    var markLocation = new google.maps.LatLng('37.553446', '126.924886'); // 마커가 위치할 위도와 경도
     
    var mapOptions = {
      center: mapLocation, // 지도에서 가운데로 위치할 위도와 경도(변수)
      zoom: 18, // 지도 zoom단계
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), // id: map-canvas, body에 있는 div태그의 id와 같아야 함
        mapOptions);
     
    var size_x = 60; // 마커로 사용할 이미지의 가로 크기
    var size_y = 60; // 마커로 사용할 이미지의 세로 크기
     
    // 마커로 사용할 이미지 주소
    var image = new google.maps.MarkerImage( 'http://www.larva.re.kr/home/img/boximage3.png',
                        new google.maps.Size(size_x, size_y),
                        '',
                        '',
                        new google.maps.Size(size_x, size_y));
     
    var marker;
    marker = new google.maps.Marker({
           position: markLocation, // 마커가 위치할 위도와 경도(변수)
           map: map,
           icon: image, // 마커로 사용할 이미지(변수)
//             info: '말풍선 안에 들어갈 내용',
           title: '갤러리 카페 <화가 난다>' // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
    });
     
    var content = "여기는 갤러리 카페,<br> 화가 난다 입니다."; // 말풍선 안에 들어갈 내용
     
    // 마커를 클릭했을 때의 이벤트. 말풍선 뿅~
    var infowindow = new google.maps.InfoWindow({ content: content});

    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map,marker);
    });
     

     
  }
  google.maps.event.addDomListener(window, 'load', initialize);

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
