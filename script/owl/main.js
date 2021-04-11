function troca(){
    document.getElementById("filmep").src = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xYijVAPunk6neVW2KHKE4Lp45ZU.jpg";
}






$('.owl-carousel').owlCarousel({
    loop:false,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})