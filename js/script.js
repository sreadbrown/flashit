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

$(function() {
  $(".modulocard").click(function() {
    $(".afront").slideToggle();
    $(".aback").slideToggle();
  });
});

$(function() {
  $(".operatorscard").click(function() {
    $(".bfront").slideToggle();
    $(".bback").slideToggle();
  });
});
$(function() {
  $(".nancard").click(function() {
    $(".cfront").slideToggle();
    $(".cback").slideToggle();
  });
});
$(function() {
  $(".namecard").click(function() {
    $(".dfront").slideToggle();
    $(".dback").slideToggle();
  });
});
$(function() {
  $(".functioncard").click(function() {
    $(".efront").slideToggle();
    $(".eback").slideToggle();
  });
});



// $(function() {
//   $(".clickable2").click(function() {
//     $("#faded").fadeOut();
//     $("#notThere").fadeIn();
//   });
// });
