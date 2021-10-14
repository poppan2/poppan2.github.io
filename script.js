$('.right-icon').on('click', function(){
    $('ul').css('display', 'flex')
    $('.right-icon').css('display', 'none')
    $('.cross-icon').css('display', 'flex')   
})

$('.cross-icon').on('click', function(){
    $('ul').css('display', 'none')
    $('.right-icon').css('display', 'flex')
    $('.cross-icon').css('display', 'none')   
})

$('.animation').ripples({
    resolution: 512,
    dropRadius: 20, 
    perturbance: 0.04,
});

setInterval(function() {
    var $el = $('.animation');
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 20;
    var strength = 0.04 + Math.random() * 0.04;

    $el.ripples('drop', x, y, dropRadius, strength);
}, 400);

// Changing html when widow size changes
    $(window).on('resize', function(event){
        event.preventDefault()
        let win = $(this);
        if(win.width() >= 992){
            $('.skill-icon').removeClass('fa-5x')
            $('.skill-icon').addClass('fa-9x')
            $('.project-photo').hover(
                function(){
                    $(this).animate({
                        marginTop: '-=5%',
                        marginRight: '-=5%',
                        width: '270px',
                        height: '150px',
                    }, 200)
                }, 
                
                function(){
                    $(this).animate({
                        marginTop: '0%',
                        marginRight: '0%',
                        width: '250px',
                        height: '125px',
                    }, 100)
                }, 
            )
        }
    })


