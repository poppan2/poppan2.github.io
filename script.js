console.log("JS works")
$('.toggle-button').on('click', function(){
    $('ul').toggle(200, function(){
        $('.toggle-button').toggle()
    })
})


// $(document).ready(function(){
//     $('.project-photo').hover(
//         function(){
//             $(this).animate({
//                 marginTop: '-=10%',
//                 width: '170px',
//                 height: '170px',
//             })
//         }, 

//         function(){
//             $(this).animate({
//                 marginTop: '0%',
//                 width: '150px',
//                 height: '150px',
//             })
//         }, 
//     )
// })

// Changing html when widow size changes
$(document).ready(function(){
    $(window).on('resize', function(){
        var win = $(this);
        if(win.width() >= 992){
            $('.skill-icon').removeClass('fa-5x')
            $('.skill-icon').addClass('fa-7x')
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
        }
    })

})


