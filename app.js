$(".movie-btn").on("click", function () {
  var page = $(this).attr("movie-page");
  var random = Math.floor((Math.random(page) * 10) + 1);
  var genreId = parseInt($("#genres").val());

  var queryURL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=2a6cff3385ccb1a29d114542fbee0918&language=en-US&page=" +
    random + "&with_genres=" + genreId;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $('.movie-info-wrapper').empty();
    $('#movie-poster').empty();
    for (var i = 0; i < 1; i++) {
      var imgURL =
        "https://image.tmdb.org/t/p/w200/" + response.results[i].poster_path;
      const $moviediv = $("<div>");
      const $title = $("<h1>").text("Title: " + response.results[i].title);
      const trailer = response.results[i].title;
      const $plot = $("<h3>").text("Plot: " + response.results[i].overview);
      const $poster = $("<img>").attr("src", imgURL);
      $moviediv.append($title, $plot);
      $(".movie-info-wrapper").prepend($moviediv);
      $("#movie-poster").prepend($poster);  
      $poster.wrap($("<a>").attr("href", "https://www.youtube.com/results?search_query=" + (trailer) + "+trailer"));
    }
  });


});

// $("#clear-btn").on("click", function () {
//   $("#movies-here").empty();
// });
$(".btn-wrapper").on("click", function (e) {
  e.preventDefault();
});

$(".drink-btn").on("click", function () {
  // var page = $(this).attr("movie-page");
  // var random = Math.floor((Math.random(page) * 10) + 1);
  var baseingredient = $("#baseingredient").val();
  var queryURL =
  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${baseingredient}`;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $('.drink-info-wrapper').empty();
    $('#drink-img').empty();


    const drink = response.drinks[Math.floor((Math.random() * response.drinks.length))];
    const $drinkdiv = $("<div>");
    const $name = $("<h2>").text("Name: " + drink.strDrink);
    const $drink = $("<img>").attr("src", drink.strDrinkThumb);
    $drinkdiv.append($name);
    $(".drink-info-wrapper").prepend($drinkdiv);
    $("#drink-img").prepend($drink);

    // for (var i = 0; i < 1; i++) {
    //   // // var imgURL =
    //   // //   "https://image.tmdb.org/t/p/w200/" + response.results[i].poster_path;
    //   // const $drinkdiv = $("<div>");
    //   // const $name = $("<h2>").text("Name: " + response.drinks[i].strDrink);
    //   // // const $alch = $("<h2>").text(response.drinks[i].strAlcoholic);
    //   // const $drink = $("<img>").attr("src", response.drinks[i].strDrinkThumb);
    //   // $drinkdiv.append($name);
    //   // $(".drink-info-wrapper").prepend($drinkdiv);
    //   // $("#drinkImg").prepend($drink);
    // }
  });
});
