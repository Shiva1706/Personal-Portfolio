 var type= new Typed('.typing-text',{
    strings:['front-end developer', 'flutter developer', 'learner'],
    typeSpeed:50,
    loop:true
    });

let themeColor = document.querySelectorAll('.theme span');
themeColor.forEach(color => color.addEventListener('click',() =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
    }));
    $(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });


    $('a[href*="#]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },
        500,'linear'
        )
    });
});

