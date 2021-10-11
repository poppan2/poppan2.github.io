console.log("JS works")
$('.toggle-button').on('click', function(){
    $('ul').toggle(200, function(){
        $('.toggle-button').toggle()
    })
    console.log("hello")
})