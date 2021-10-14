$('.hamburger-icon').on('click', function(){
    $('ul').css('display', 'flex')
    $('.hamburger-icon').css('display', 'none')
    $('.cross-icon').css('display', 'flex')   
})

$('.cross-icon').on('click', function(){
    $('ul').css('display', 'none')
    $('.hamburger-icon').css('display', 'flex')
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



