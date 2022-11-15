$(document).ready(function(){

    //cont1 > animals
    $cont1 = [
        ["travel_news_2.jpg", "PAID CONTENT", "Keep Jackson Hole wild"],
        ["travel_news_3.jpg", "TRAVEL", "See the power of the threatened Colorado River in Canyonlands"],
        ["travel_news_4.jpg", "PAID CONTENT", "The protectors and promoters of Japan's National Parks"],
        ["travel_news_5.jpg", "TRAVEL", "Fires feast on a national park in Northern California"],
        ["travel_news_6.jpg", "TRAVELPLANET POSSIBLE", "Here’s where you can be a volunteer scientist"],
        ["travel_news_7.jpg", "TRAVELFAMILY", "See the best of the West at these family ranches"],
        ["travel_news_8.jpg", "TRAVEL", "Can science solve the seaweed problem on Mexican beaches?"],
        ["travel_news_9.jpg", "TRAVEL", "Rare goats thrive in this idyllic mountain village tucked away in Slovenia"],
        ["travel_news_10.jpg", "PAID CONTENT", "Canada’s best road trips: Chasing fall colors in Ontario and Quebec"],
        ["travel_news_11.jpg", "TRAVELPLANET POSSIBLE", "Canada’s salmon are at risk. How can tourists help?"],
        
    ];

    for(v of $cont1){
        $("#cont1 .cont1_list").append(`
        <div class="box">
            <div class="img" style="background-image:url(./img/travel/${v[0]})"></div>
            <div class="inpo">
                <div class="tit">${v[1]}</div>
                <div class="txt">${v[2]}</div>
                <div class="more">READ MORE&nbsp;&nbsp;→</div>
            </div>
        </div>
        `);
    }

});