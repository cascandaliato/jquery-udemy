$(function () {
  $("#btn_1").on("click", function () {
    const courseName = $("#course_name input").val();

    $("#statement h3")
      .css({ "background-color": "green", color: "white" })
      .text(`Course Entered: ${courseName}`);

    $("#courses").off("click");
    $("#courses").on("click", "li", function (event) {
      const $li = $(`<li>${courseName}</li>`).css("background-color", "yellow");
      $(this).append($li);
      event.stopPropagation();
    });
  });
});
