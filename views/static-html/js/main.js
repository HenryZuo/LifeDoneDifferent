// MODAL FUNCTION FOR EMAIL SIGN UP BELOW

$( document ).ready(function() {
    console.log( "ready!" );
   
    $('#myModal').modal({
        keyboard: true,
        show: false,
    })
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
});