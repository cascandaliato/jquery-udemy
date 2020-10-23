$("#btn_main").on("click", function () {
  console.log($(".dope").text());
  $(".dope").text("foo");
  $("#btn_main").val("Double Click Me");
});

$("#btn_main").on("dblclick", function () {
  $(".dope").text("You'll learn how to replace me");
  $("#btn_main").val("Replace");
});

$("#btn_new").on("click", function () {
  $(".dope").html('<b class="cool">bar</b>');
});