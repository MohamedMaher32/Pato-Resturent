$(window).ready(function(){
    $(".landing").fadeOut(1500)
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop()
        if(scrollTop > 10){
            $(".navbar").addClass("main-bg")
            $(".navbar").removeClass("py-4")
            $(".nav-link").css("color","#fff")
            $(".active").css("color","#111")
            $(".arrow-up").fadeIn(1000)
        }
        else{
            $(".navbar").removeClass("main-bg")
            $(".navbar").addClass("py-4")
            $(".nav-link").css("color","#fff")
            $(".active").css("color","var(--main-color)")
            $(".arrow-up").fadeOut(1000)
        }
    })
    $(".nav-link").click(function(){
        $(this).addClass("active")
        $(this).parent().siblings().children().removeClass("active")
        $(".navbar-collapse").addClass("d-none")
        $(".navbar-collapse").removeClass("d-block")
    })
    $(".navbar-toggler").click(function(){
        // $(".navbar-collapse").addClass("d-block")
        $(".navbar-collapse").removeClass("d-none")
    })
    $(".arrow-up").click(function(){
        $("body,html").animate({scrollTop: "0px"} , 500)
        $(".nav-link").parent().siblings().children().removeClass("active")
    })
    wow = new WOW({offset: 150,})
    wow.init();
    // event watch
    $(".day").countdown("2023/05/01", function(event) {
      $(this).text(event.strftime('%D'));
    });
    $(".hour").countdown("2023/05/01", function(event) {
      $(this).text(event.strftime('%H'));
    });
    $(".minute").countdown("2023/05/01", function(event) {
      $(this).text(event.strftime('%M'));
    });
    $(".second").countdown("2023/05/01", function(event) {
      $(this).text(event.strftime('%S'));
    });
})

