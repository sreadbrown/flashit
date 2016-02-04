// $("#card").flip() {
//     axis: 'x',
//     trigger: 'hover'
// });


$(function() {
  $(".javacard").click(function() {
    $(".front").slideToggle();
    $(".back").slideToggle();
  });
});




// $(function() {
//   $(".clickable2").click(function() {
//     $("#faded").fadeOut();
//     $("#notThere").fadeIn();
//   });
// });
