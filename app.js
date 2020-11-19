$(".movie-btn").on("click", function () {
  var page = Math.floor(Math.random() * 10) + 1;
  var genreId = parseInt($("#genres").val());
  var queryURL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=2a6cff3385ccb1a29d114542fbee0918&language=en-US&page=" +
    page +
    "&with_genres=" +
    genreId;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(".movie-info-wrapper").empty();
    $("#movie-poster").empty();
    var movie =
      response.results[Math.floor(Math.random() * response.results.length)];
    const $moviediv = $("<div>");
    var imgURL = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;
    const $title = $("<h2>").text(movie.title);
    const trailer = movie.title;
    const $plot = $("<h3>").text("\t" + movie.overview);
    const $poster = $("<img>").attr("src", imgURL);
    $moviediv.append($title, $('<br>'), $plot);
    $(".movie-info-wrapper").prepend($moviediv);
    $("#movie-poster").prepend($poster);
    $poster.wrap(
      $("<a>").attr(
        "href",
        "https://www.youtube.com/results?search_query=" + trailer + "+trailer"
      )
    );
  });
});
$(".btn-wrapper").on("click", function (e) {
  e.preventDefault();
});
$(".drink-btn").on("click", function () {
  var baseingredient = $("#baseingredient").val();
  var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${baseingredient}`;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    $(".drink-info-wrapper").empty();
    $("#drink-img").empty();

    const drink =
      response.drinks[Math.floor(Math.random() * response.drinks.length)];
    const $drinkdiv = $("<div>");
    const $name = $("<h2>").text("Name: " + drink.strDrink);
    const drinkName = drink.strDrink;
    const $drink = $("<img>").attr("src", drink.strDrinkThumb);
    $drinkdiv.append($name);
    $(".drink-info-wrapper").prepend($drinkdiv);
    $("#drink-img").prepend($drink);
    $drink.wrap(
      $("<a>").attr(
        "href",
        "https://www.google.com/search?q=" + drinkName + " cocktail recipe"
      )
    );
    const drinkID = drink.idDrink

    $.get( "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID, function( data ) {
  console.log(data)
  const $pglass = $("<p>").text("Preferred Glass: " + data.drinks[0].strGlass)
  const $pinstruct = $("<p>").text("Instructions: " + data.drinks[0].strInstructions)
  $(".drink-info-wrapper").append($pglass, $pinstruct);
    });


  });
});
