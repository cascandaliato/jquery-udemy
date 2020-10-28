/* DOM TRAVERSAL */

$("li");

$("#courses").find("li");

$("#courses").children("li");

$("#courses").children("li").children();

$("#courses").children("li").children().first();

$("#courses").children("li").children().last();

$("#courses").children("li").children().parent();

$("#courses").children("li").children().parents(); // parents and ancestors

$("#courses").children("li").children().first().next();

$("#courses").children("li").children().first().next().next();

$("#courses").children("li").children().first().next().prev();

$("#courses")
  .children("li")
  .children()
  .children()
  .first()
  .closest("ul")
  .css({ border: "5px solid fuchsia" });

/* DOM MANIPULATION */

$("li ul#math_subjects").append("<li>New Course</li>");

const $newCourse = $("<li>Trig</li>");
// $("li ul#math_subjects").append($newCourse);
// $("li ul#math_subjects").prepend($newCourse);
// $("li ul#math_subjects").after($newCourse);
// $("li ul#math_subjects").before($newCourse);
$("li ul#math_subjects").append($("h3"));
$("li ul#math_subjects").parent().append($newCourse);
$newCourse.remove();
$("#science_subjects").remove();
