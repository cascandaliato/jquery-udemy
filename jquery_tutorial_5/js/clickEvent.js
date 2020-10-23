$("#firstBtn, #target").on("click", function(e) {
  $("#statement").hide();
   // $("#box").toggle();
  // $("#box").slideDown(2000);
  // $("#box").slideUp(2000);
  // $("#box").slideToggle();
  // $("#box").fadeIn(1000);
  // $("#box").fadeOut(1000);
  // $("#box").fadeTo(1000, 1);
  $("#box").fadeToggle(1000);
});