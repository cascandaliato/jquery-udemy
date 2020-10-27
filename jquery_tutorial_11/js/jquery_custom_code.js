$(function () {
  $(":header").css({ border: "1px solid red" });
  $("div:not(:has(:header))").css("color", "fuchsia");
});
