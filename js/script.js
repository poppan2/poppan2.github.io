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

$('.tdl-info-button').on('click', function(){
    $('.to-do-list-photo').css('display', 'none')
    $('.to-do-list-info').css('display', 'block')
    $('.tdl-back-button').css('display', 'flex')
    $('.tdl-info-button').css('display', 'none')
})

$('.tdl-back-button').on('click', function(){
    $('.to-do-list-photo').css('display', 'flex')
    $('.to-do-list-info').css('display', 'none')
    $('.tdl-back-button').css('display', 'none')
    $('.tdl-info-button').css('display', 'flex')
})

$('.fb-info-button').on('click', function(){
    $('.fb-photo').css('display', 'none')
    $('.fb-info').css('display', 'block')
    $('.fb-back-button').css('display', 'flex')
    $('.fb-info-button').css('display', 'none')
})

$('.fb-back-button').on('click', function(){
    $('.fb-photo').css('display', 'flex')
    $('.fb-info').css('display', 'none')
    $('.fb-back-button').css('display', 'none')
    $('.fb-info-button').css('display', 'flex')
})

$('.ri-info-button').on('click', function(){
    $('.ri-photo').css('display', 'none')
    $('.ri-info').css('display', 'block')
    $('.ri-back-button').css('display', 'flex')
    $('.ri-info-button').css('display', 'none')
})

$('.ri-back-button').on('click', function(){
    $('.ri-photo').css('display', 'flex')
    $('.ri-info').css('display', 'none')
    $('.ri-back-button').css('display', 'none')
    $('.ri-info-button').css('display', 'flex')
})

$('.ff-info-button').on('click', function(){
    $('.ff-photo').css('display', 'none')
    $('.ff-info').css('display', 'block')
    $('.ff-back-button').css('display', 'flex')
    $('.ff-info-button').css('display', 'none')
})

$('.ff-back-button').on('click', function(){
    $('.ff-photo').css('display', 'flex')
    $('.ff-info').css('display', 'none')
    $('.ff-back-button').css('display', 'none')
    $('.ff-info-button').css('display', 'flex')
})

$('.pc-info-button').on('click', function(){
    $('.pc-photo').css('display', 'none')
    $('.pc-info').css('display', 'block')
    $('.pc-back-button').css('display', 'flex')
    $('.pc-info-button').css('display', 'none')
})

$('.pc-back-button').on('click', function(){
    $('.pc-photo').css('display', 'flex')
    $('.pc-info').css('display', 'none')
    $('.pc-back-button').css('display', 'none')
    $('.pc-info-button').css('display', 'flex')
})
$('.ai-info-button').on('click', function(){
    $('.ai-photo').css('display', 'none')
    $('.ai-info').css('display', 'block')
    $('.ai-back-button').css('display', 'flex')
    $('.ai-info-button').css('display', 'none')
})

$('.ai-back-button').on('click', function(){
    $('.ai-photo').css('display', 'flex')
    $('.ai-info').css('display', 'none')
    $('.ai-back-button').css('display', 'none')
    $('.ai-info-button').css('display', 'flex')
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



