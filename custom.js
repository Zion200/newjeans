$(function(){

     

    $('.menu li').on('mouseover',function(){
        $(this).find('.submenu').stop().slideDown(300);
    });
    $('.menu li').on('mouseout',function(){
        $(this).find('.submenu').stop().slideUp(300);
    });

    $('nav .submenu > .hs').on('click',function(){
        $('.howsweetimg').show();
    });
    $('header .musicname > .hs2').on('click',function(){
        $('.howsweetimg').show();
    });
    $('.howsweetimg .xx').on('click',function(){
        $('.howsweetimg').hide();
    });
    //musicname


    $('header .album9 > li').on('click',function(){
        var tg = $(this);
        var i = tg.index();
        $('header .box1 a ').hide();
        $('.box2 .musictitle1').fadeOut(200);
        $('header .box1 a ').eq(i).show();
    });
   
    $('header .box1 a').on('click',function(){
        var tg = $(this);
        var i = tg.index();
        $('.box2 .musictitle1').hide();
        $('.box2 .musictitle1').eq(i).fadeIn(200);
       
    });
    $('.musicname .x').on('click',function(){
        var tg = $(this);
        var i = tg.index();
        $('.box2 .musictitle1').fadeOut(200);
        //$('.box2 .musictitle1').eq(i).fadeOut(300);
    });

    //뉴진스 img35 이미지
    $('main .Micon > li').on('click',function(){
        var tg = $(this);
        var i = tg.index();
        $('main .simgbox a ').hide();
        $('main .simgbox a ').eq(i).fadeIn(800);
    });

    $('nav .Rlogo li ').on('click',function(){
        $('.members').show();
    });

    $('nav .Rlogo li ').on('click',function(){
        var tg = $(this);
        var i = tg.index();
        $('.memimg a').hide();
        $('.memimg a').eq(i).show();
    });
    $('.members .mx').on('click',function(){
        $('.members').hide();
    });
    
});