$(document).ready(function () {
  $("li:first").css("color", "red");
  $("li:nth-child(3n)").css("color", "blue");
  $("li[class]").css("border", "3px solid goldenrod");

  // // $("p.instruct_title, div#closing_statement, h3").css("color", "green");
  // $("p.instruct_title")
  //   .add("div#closing_statement")
  //   .add("h3")
  //   .css("color", "green");
  // $("li.important").on("mouseover", function () {
  //   $(this).attr("id", "big");
  //   $(this).on("mouseleave", function () {
  //     $(this).attr("id", "small");
  //   });
  // });
  // $("h1#title").on("click", function () {
  //   $(this).attr("class", "pretty border");
  // });
  // $("img#the_img").on("click", function () {
  //   // $(this).attr("width", "40%").attr("height", "40%");
  //   $(this).attr({ width: "40%", height: "40%" });
  // });
  // $("img#the_img").on("dblclick", function () {
  //   $(this).remove();
  // });
});
