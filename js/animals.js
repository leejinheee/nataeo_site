$(document).ready(function(){

    //cont1 > animals
    $cont1 = [
        ["animal_news_2.jpg", "ANIMALS", "Why some female humming birds masquerade as males"],
        ["animal_news_3.jpg", "ANIMALS", "To save kelp forests, scientists try breeding sea stars"],
        ["animal_news_4.jpg", "ANIMALS", "Zoo animals get COVID-19 vaccines across the U.S."],
        ["animal_news_5.jpg", "ANIMALS", "Rattlesnakes trick humans into thinking they’re closer than they are"],
        ["animal_news_6.jpg", "ANIMALS", "Meet the incredible ice worm, which lives in glaciers"],
        ["animal_news_7.jpg", "ANIMALS", "Why mammal pregnancies are so diverse"],
        ["animal_news_8.jpg", "ANIMALS", "Photographing the sleepless effort to save a cheetah"],
        ["animal_news_9.jpg", "ANIMALS", "Photos show how people are working to protect cheetahs"],
        ["animal_news_10.jpg", "MAGAZINEWILDLIFE WATCH", "How you can help fight the illegal cheetah cub trade"],
        ["animal_news_11.jpg", "MAGAZINEWILDLIFE WATCH", "Cheetah cubs poached and sold as pets, Instagram props"],
        
    ];

    for(v of $cont1){
        $("#cont1 .cont1_list").append(`
        <div class="box">
            <div class="img" style="background-image:url(./img/animals/${v[0]})"></div>
            <div class="inpo">
                <div class="tit">ANIMALS</div>
                <div class="txt">${v[2]}</div>
                <div class="more">READ MORE&nbsp;&nbsp;→</div>
            </div>
        </div>
        `);
    }

});