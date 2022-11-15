$(document).ready(function(){

    //cont1 > animals
    $cont1 = [
        ["history_news_2.jpg", "HISTORY & CULTURECORONAVIRUS COVERAGE", "CDC, FDA, NIH—what’s the difference?"],
        ["history_news_3.jpg", "HISTORY & CULTURE", "What Afghanistan and the world could lose with the Taliban's return"],
        ["history_news_4.jpg", "HISTORY & CULTURE", "A week after Haiti’s deadly earthquake, hope is hard to find"],
        ["history_news_5.jpg", "HISTORY & CULTURERACE IN AMERICA", "The most popular music festival you've probably never heard of"],
        ["history_news_6.jpg", "HISTORY & CULTURE", "Historic images show the centuries-long struggle for Afghanistan"],
        ["history_news_7.jpg", "HISTORY & CULTURE", "How centuries of strife shaped modern Afghanistan"],
        ["history_news_8.jpg", "HISTORY & CULTURE", "How the Taliban swiftly retook power in Afghanistan"],
        ["history_news_9.jpg", "HISTORY & CULTURE", "As the Taliban return, Afghanistan's past threatens its future"],
        ["history_news_10.jpg", "HISTORY & CULTURE", "The Taliban destroyed Afghanistan's ancient treasures. Will history repeat itself?"],
        ["history_news_11.jpg", "HISTORY & CULTURE", "500 years after Aztec rule, Mexico confronts a complicated anniversary"],
        
    ];

    for(v of $cont1){
        $("#cont1 .cont1_list").append(`
        <div class="box">
            <div class="img" style="background-image:url(./img/history/${v[0]})"></div>
            <div class="inpo">
                <div class="tit">${v[1]}</div>
                <div class="txt">${v[2]}</div>
                <div class="more">READ MORE&nbsp;&nbsp;→</div>
            </div>
        </div>
        `);
    }

});