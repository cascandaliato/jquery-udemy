$(function () {
  $("button").on("click", function () {
    // const url =
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
    // $("div.main").load(url);

    // const url =
    //   "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html table fieldset:first";
    // $("div.main").load(url);

    // $("p").hide(4000, function () {
    //   alert("the image has been hidden");
    // });

    // const url =
    //     "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html";
    // const url = "https://jsonplaceholder.typicode.com/posts/1";
    const url = "https://jsonplaceholder.typicode.com/comments";
    $.ajax(url, {
      //   dataType: "html",
      dataType: "json",
      method: "GET",
      success: function (response) {
        // $("div.main").html(response);
        console.log(response);

        // const { userId, title } = response;
        // const $info = $("<p></p>");
        // $info.text(`User id is ${userId}. Title is "${title}".`);

        const { postId, email } = response[0];
        const $info = $("<p></p>");
        $info.text(`Post id is ${postId}. Email is "${email}".`);

        $("div.main").append($info);
      },
      error: function (request, error, message) {
        console.log("there was an issue with the ajax call", message);
      },
      data: { postId: 1 },
      beforeSend: function () {},
      complete: function () {},
    });

    $.get(url, function success() {});
  });
});
