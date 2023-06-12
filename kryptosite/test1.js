ww = 0;

function fix_sticks() {
    if (ww == 0 || $(window).width() != ww) {
        if ($(window).width() >= 768) {
            $(".lines-wrap").css("display", "block");
            $(".line.l .l3").css("height", parseFloat($(".line.c .line-text").css("height")) + 120);
            $(".line.c .l2").css("top", parseFloat($(".line.c .line-text").css("height")) + 80);
            $(".line.r .l3").css("height", parseFloat($(".line.c .line-text").css("height")) + 120);
            
            $(".line.l .square").css("right", parseFloat($(".line.l .l2").css("width")) - (parseFloat($(".line.l .square").css("width")) / 2) + 1);
            $(".line.l .square").css("top", parseFloat($(".line.l .l3").css("height")) + parseFloat($(".line.l .l1").css("height")) + 5);
            $(".line.c .square").css("right", 0 - (parseFloat($(".line.c .square").css("width")) / 2) + .5);
            $(".line.c .square").css("top", parseFloat($(".line.l .l3").css("height")) + parseFloat($(".line.l .l1").css("height")) + 5);
            $(".line.r .square").css("left", parseFloat($(".line.r .l2").css("width")) - (parseFloat($(".line.r .square").css("width")) / 2) + 1);
            $(".line.r .square").css("top", parseFloat($(".line.r .l3").css("height")) + parseFloat($(".line.r .l1").css("height")) + 5);
            
            $(".line .line-name").css("top", parseFloat($(".line .square").css("top")) + parseFloat($(".line .line-name").css("height")) / 1.2);
            
            $(".line.l .line-name").css("right", parseFloat($(".line.l .square").css("right")) - parseFloat($(".line .line-name").css("width")) / 2.2);
            $(".line.c .line-name").css("left", parseFloat($(".line.c .square").css("left")) - parseFloat($(".line .line-name").css("width")) / 3);
            $(".line.r .line-name").css("left", parseFloat($(".line.r .square").css("left")) - parseFloat($(".line .line-name").css("width")) / 2.6);
            
            $(".lines").css("height", parseFloat($(".line .line-name").css("top")) + parseFloat($(".line .line-name").css("height")) * 1.5);
        } else {
            $(".lines-wrap").css("display", "none");
            // $(".line.c .l3").css("height", parseFloat($(".line.c .line-text").height()) * 1 + 110);
            // $(".line.c .l4").css("top", 40 + parseFloat($(".line.c .line-text").height()) * 1 + 110);
            // $(".line.c .square").css("top", 40 + parseFloat($(".line.c .line-text").height() * 1 + 110 - parseFloat($(".line.c .square").height() / 2)));
            // $(".line.c .line-name").css("top", 35 + parseFloat($(".line.c .line-text").height() * 1 + 110 - parseFloat($(".line.c .line-name").height() / 2)));
            // $(".line.c .line-name").css("left", 0 - parseFloat($(".line.c .line-name").width() / 2));
            // $(".line.c .square").css("left", 0 - parseFloat($(".line.c .line-name").width()) + parseFloat($(".line.c .square").width()));
            // $(".line.c .l4").css("width", (0 - parseFloat($(".line.c .l4").css("left"))) + 0 - parseFloat($(".line.c .line-name").width()) + parseFloat($(".line.c .square").width()));
            // $(".line.c .line-img").css("top", parseFloat($(".line.c .l4").css("top")) + 50);
            // $(".line.c .line-img").css("left", parseFloat($(".line.c .line-img").css("left")) - parseFloat($(".line.c .line-img").width() / 2));
        
            // $(".line.l .l3").css("height", parseFloat($(".line.c .line-img").css("top")) + parseFloat($(".line.c .line-img").height() * .75));
            // $(".line.l .l4").css("top", 25 + parseFloat($(".line.l .l3").height()));
            // $(".line.l .line-name").css("top", parseFloat($(".line.l .l4").css("top")) - parseFloat($(".line.l .line-name").height() / 2) - 5);
            // $(".line.l .line-name").css("left", 0 - parseFloat($(".line.l .line-name").width() / 2) + $(window).width() / 20);
            // $(".line.l .square").css("top", parseFloat($(".line.l .l4").css("top")) - parseFloat($(".line.l .square").height() / 2));
            // $(".line.l .square").css("left", 0 - parseFloat($(".line.l .line-name").width()) + parseFloat($(".line.l .square").width()) + $(window).width() / 20);
            // $(".line.l .l4").css("width", (0 - parseFloat($(".line.l .l4").css("left"))) + 0 - parseFloat($(".line.l .line-name").width()) + parseFloat($(".line.l .square").width()) + $(window).width() / 20);
            // $(".line.l .line-img").css("top", parseFloat($(".line.l .l4").css("top")) + 50);
            // $(".line.l .line-img").css("left", parseFloat($(".line.l .line-img").css("left")) - parseFloat($(".line.l .line-img").width() / 2) + $(window).width() / 20);
        
            // $(".line.r .l3").css("height", parseFloat($(".line.l .line-img").css("top")) + parseFloat($(".line.l .line-img").height() * .75));
            // $(".line.r .l4").css("top", 40 + parseFloat($(".line.r .l3").height()));
            // $(".line.r .line-name").css("top", parseFloat($(".line.r .l4").css("top")) - parseFloat($(".line.r .line-name").height() / 2) - 5);
            // $(".line.r .line-name").css("left", 0 - parseFloat($(".line.r .line-name").width() / 2) - $(window).width() / 10);
            // $(".line.r .square").css("top", parseFloat($(".line.r .l4").css("top")) - parseFloat($(".line.r .square").height() / 2));
            // $(".line.r .square").css("right", 0 - parseFloat($(".line.r .line-name").width()) + parseFloat($(".line.r .square").width()) + $(window).width() / 8);
            // $(".line.r .l4").css("width", (0 - parseFloat($(".line.r .l4").css("right"))) + 0 - parseFloat($(".line.r .line-name").width()) + parseFloat($(".line.l .square").width()) + $(window).width() / 8);
            // $(".line.r .line-img").css("top", parseFloat($(".line.r .l4").css("top")) + 50);
            // $(".line.r .line-img").css("left", 0 - parseFloat($(".line.r .line-img").width() / 2) - $(window).width() / 17);
            // $(".lines-wrap").css("height", parseFloat($(".line.r .line-img").css("top")) + parseFloat($(".line.r .line-img").height()));
        }
    }
    ww = $(window).width();
}
fix_sticks();
setInterval(fix_sticks, 500);

