$(document).ready(function(){

    //cont1 > animals
    $cont1 = [
        ["science_news_2.jpg", "SCIENCECORONAVIRUS COVERAGE", "Why donating COVID-19 booster shots isn’t that easy"],
        ["science_news_3.jpg", "SCIENCECORONAVIRUS COVERAGE", "Battles over masks are pitting parents against governors"],
        ["science_news_4.jpg", "SCIENCE", "New fossil reveals prehistoric flying reptile's secrets"],
        ["science_news_5.jpg", "SCIENCECORONAVIRUS COVERAGE", "What full FDA approval of Pfizer’s vaccine means"],
        ["science_news_6.jpg", "SCIENCECORONAVIRUS COVERAGE", "People with breakthrough infections can spread Delta easily"],
        ["science_news_7.jpg", "SCIENCECORONAVIRUS COVERAGE", "How does COVID-19 affect the brain? A troubling picture emerges."],
        ["science_news_8.jpg", "SCIENCECORONAVIRUS COVERAGE", "The U.S. plans to authorize boosters—but many already got a third dose"],
        ["science_news_9.jpg", "SCIENCE", "Fossil egg from prehistoric giant turtle reveals baby inside"],
        ["science_news_10.jpg", "SCIENCENAT GEO EXPLORES", "How the hunt for a 'missing planet' revealed asteroids in our solar system"],
        ["science_news_11.jpg", "SCIENCE", "Ripples in Saturn's rings reveal the planet's giant, slushy core"],
        
    ];

    for(v of $cont1){
        $("#cont1 .cont1_list").append(`
        <div class="box">
            <div class="img" style="background-image:url(./img/science/${v[0]})"></div>
            <div class="inpo">
                <div class="tit">${v[1]}</div>
                <div class="txt">${v[2]}</div>
                <div class="more">READ MORE&nbsp;&nbsp;→</div>
            </div>
        </div>
        `);
    }

});