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
    $moviediv.append($title, $plot);
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

let trailer;
let savedMovies = []
$(".save-movie-btn").on("click", function (e) {
  e.preventDefault();
  if (!trailer || savedMovies.includes(trailer)) return ;
  savedMovies.push(trailer);
  localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  getSavedMovies();
});

function getSavedMovies(){
  const favoriteMovies = localStorage.getItem("savedMovies");
  console.log(favoriteMovies);
  const movieArr = JSON.parse(favoriteMovies);    
  $(".saved-movies").empty();
  for (let i = 0; i < movieArr.length; i++) {
    let currentMovie = movieArr[i];
    ($("<p>").text(`-${currentMovie}`)).appendTo($(".saved-movies"))
  }
}

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
    drinkName = drink.strDrink;
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

    $.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID, function (data) {
      // console.log(data)
      const $pglass = $("<p>").text("Preferred Glass: " + data.drinks[0].strGlass)
      const $pinstruct = $("<p>").text("Instructions: " + data.drinks[0].strInstructions)
      $(".drink-info-wrapper").append($pglass, $pinstruct);
    });


  });
});

let drinkName;
let savedDrinks = []
$(".save-drink-btn").on("click", function (e) {
  e.preventDefault();
  if (!drinkName || savedDrinks.includes(drinkName)) return ;
  savedDrinks.push(drinkName);
  localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks));
  getSavedDrinks();
})

function getSavedDrinks(){
  const favoriteDrinks = localStorage.getItem("savedDrinks");
  console.log(favoriteDrinks);
  const drinkArr = JSON.parse(favoriteDrinks);    
  $(".saved-drinks").empty();
  for (let i = 0; i < drinkArr.length; i++) {
    let currentDrink = drinkArr[i];
    ($("<p>").text(`-${currentDrink}`)).appendTo($(".saved-drinks"))
  }
}