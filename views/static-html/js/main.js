// MODAL FUNCTION FOR EMAIL SIGN UP BELOW

$(document).ready(function () {
    console.log("ready!");

    $('#myModal').modal({
        keyboard: true,
        show: false,
    })
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })

    $('.blue-box').mouseover(function () {
        console.log("you clicked me!")
        $('.blue-box').addClass('grower').removeClass('shrink')
    })
    $('.blue-box').mouseout(function () {
        console.log("you clicked me!")

        $('.blue-box').addClass('shrink').removeClass('grower')
    })

    $('.podcast-card').mouseenter(function () {
        console.log("you clicked me!")
        $(this).children('a').children('.podcast-image-writing').children('.written-content').addClass('grower').removeClass('shrink')
    })
    $('.podcast-card').mouseleave(function () {
        console.log("you clicked me!")

        $(this).children('a').children('.podcast-image-writing').children('.written-content').addClass('shrink').removeClass('grower')
    })
    $('head').append('<meta property="og:locale:THIS IS A TEST" content="fr_FR" />')

});


// $('.comments').on('click','.hide-replies',function(){
//     $(this).closest('.comment').find('.replies').hide();
// })