console.log("JS works")
$('.toggle-button').on('click', function(){
    $('ul').toggle(200, function(){
        $('.toggle-button').toggle()
    })
    console.log("hello")
})

$(document).ready(function(){

    $('.project-photo').hover(
        function(){
            $(this).animate({
                marginTop: '-=10%',
                width: '170px',
                height: '170px',
            })
        }, 

        function(){
            $(this).animate({
                marginTop: '0%',
                width: '150px',
                height: '150px',
            })
        }, 
    )
})