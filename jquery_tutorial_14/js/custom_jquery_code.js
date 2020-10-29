$(function () {
  // $("button").click(function (event) {
  $("#books_div > .book").on("click", "button", function (event) {
    const price = $(this).closest(".book").data("price");
    const author = $(this).closest(".book").data("author");

    $(this)
      .parent()
      .css("background-color", "yellow")
      .append(`<p>Price: $${price}</p>`)
      .append(`<p>Author: <b>${author}</b></p>`);

    $(this).remove();

    event.stopPropagation();
    // $("div.book").off('click');
  });

  $("div.book").click(function() {
    alert("Click on the See Details button to see the price of the book");
  })

  $("#books_completed > .book").on("click", "button", function (event) {
    const purchased = $(this).closest(".book").data("purchased");
    const author = $(this).closest(".book").data("author");
    const rating = $(this).closest(".book").data("myrating");

    $(this)
      .parent()
      .css("background-color", "yellow")
      .append(`<p>Purchased Date: ${purchased}</p>`)
      .append(`<p>Author: ${author}</p>`)
      .append(`<p>Rating: ${rating}</p>`);

    $(this).remove();
    event.stopPropagation();
  });
});
