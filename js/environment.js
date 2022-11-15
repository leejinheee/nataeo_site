$(document).ready(function(){

    //cont1 > animals
    $cont1 = [
        ["environ_news_2.jpg", "ENVIRONMENT", "Climate change comes for a favorite summer pastime: fishing"],
        ["environ_news_3.jpg", "ENVIRONMENT", "How many 'natural' disasters can one city endure?"],
        ["environ_news_4.jpg", "ENVIRONMENT", "Wildfire smoke is transforming clouds, making rainfall less likely"],
        ["environ_news_5.jpg", "ENVIRONMENT", "Why New England rarely sees hurricane threats like Henri"],
        ["environ_news_6.jpg", "ENVIRONMENT", "Siberia’s wildfires are unlocking extreme carbon pollution"],
        ["environ_news_7.jpg", "ENVIRONMENTPLANET POSSIBLE", "5 possible climate futures—from the optimistic to the strange"],
        ["environ_news_8.jpg", "ENVIRONMENTPLANET POSSIBLE", "In Wyoming, fences are coming down to make way for wildlife"],
        ["environ_news_9.jpg", "ENVIRONMENT", "‘Megadrought’ hits water supply in western U.S."],
        ["environ_news_10.jpg", "ENVIRONMENT", "Wildfire smoke linked to higher COVID-19 death rates"],
        ["environ_news_11.jpg", "ENVIRONMENT", "Does Smokey Bear need a makeover?"],
        
    ];

    for(v of $cont1){
        $("#cont1 .cont1_list").append(`
        <div class="box">
            <div class="img" style="background-image:url(./img/environment/${v[0]})"></div>
            <div class="inpo">
                <div class="tit">${v[1]}</div>
                <div class="txt">${v[2]}</div>
                <div class="more">READ MORE&nbsp;&nbsp;→</div>
            </div>
        </div>
        `);
    }

});