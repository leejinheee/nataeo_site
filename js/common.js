$(document).ready(function(){


    /*cont1*/
    //클릭한 곳의 인덱스 번호를 추적하여 해당하는 배열 데이터의 페이지 문서이름을 통해 화면에 노출
    var $url = ["animals.html", "environment.html", "history.html", "science.html", "travel.html"];
    var $clickIndex;

    //브라우저가 로드되면 coverstory.html을 #content라는 공간에 넣겠다.
    $.ajax({
        url : "./" + $url[0],
        success : function(result){
            $(".cont1_list").html(result);
        }
    });

    $("nav li").click(function(){
        $clickIndex = $(this).index();
        console.log($clickIndex);  //0,1,2,3
        $.ajax({
            url : "./" + $url[$clickIndex],
            success : function(result){
                $(".cont1_list").html(result);
            }
        });

        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

   

    //메뉴 클릭시 해당하는 위치로 스크롤바 이동을 시킴
    function resize_move(){
        var $winWidth = $(window).width();  //클릭했을 때 현 시점에서 가로값을 받아온다.
        console.log($winWidth);
        $("html, body").animate({scrollTop:$("#cont1").offset().top},1000);
    }
    $("nav li").not(":last").click(function(){
        resize_move();
        return false;
    }); 



    /*cont2*/
    $cont1 = [
        ["poster_1.jpg", "How viruses shape<br>our world"],
        ["poster_2.jpg", "Why are people so dang<br>obsessed with Mars?"],
        ["poster_4.jpg", "See how new Mars rover<br>will explore the red planet"],
        ["poster_5.jpg", "The era of greyhound<br>racing in the U.S. is coming<br>to an end"],
    ];

    for(v of $cont1){
        $("#cont2 .cont2_list").append(`
        <div class="box" style="background-image: url(./img/${v[0]});">
            <div class="dark">
                <div class="tit">MAGAZINE</div>
                <div class="line"></div>
                <div class="txt">${v[1]}</div>
                <a href="#">Read</a>
            </div>
        </div>
        `);
    }
    
    

});