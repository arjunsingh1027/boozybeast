// Generate random movie button
$(".movie-btn").on("click", function () {
  // chooses random page from movie database
  var page = Math.floor(Math.random() * 10) + 1;
  var genreId = parseInt($("#genres").val());
  // ajax url
  var queryURL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=2a6cff3385ccb1a29d114542fbee0918&language=en-US&page=" +
    page +
    "&with_genres=" +
    genreId;
  // ajax call
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(".movie-info-wrapper").empty();
    $("#movie-poster").empty();
    // getting movie information from API
    var movie =
      response.results[Math.floor(Math.random() * response.results.length)];
    const $moviediv = $("<div>");
    var imgURL = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;
    const $title = $("<h1>").text("Title: " + movie.title);
    const $plot = $("<h3>").text("Plot: " + movie.overview);
    const $poster = $("<img>").attr("src", imgURL);
    // adding movie infor to page
    $moviediv.append($title, $plot);
    $(".movie-info-wrapper").prepend($moviediv);
    $("#movie-poster").prepend($poster);
    // search youtube for trailer of the movie by clicking on the poster
    trailer = movie.title;
    $poster.wrap(
      $("<a>").attr(
        "href",
        "https://www.youtube.com/results?search_query=" + trailer + "+trailer"
      )
    );
  });
});

// save button for movies
let trailer;
let savedMovies = []
$(".save-movie-btn").on("click", function (e) {
  e.preventDefault();
  if (!trailer || savedMovies.includes(trailer)) return;
  savedMovies.push(trailer);
  localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  getSavedMovies();
});

// adding saved movies to dropdown list
function getSavedMovies() {
  const favoriteMovies = localStorage.getItem("savedMovies");
  console.log(favoriteMovies);
  const movieArr = JSON.parse(favoriteMovies);
  $(".saved-movies").empty();
  for (let i = 0; i < movieArr.length; i++) {
    let currentMovie = movieArr[i];
    ($("<p>").text(`-${currentMovie}`)).appendTo($(".saved-movies"))
  }
}

// generate random drink button
$(".drink-btn").on("click", function () {
  var baseingredient = $("#baseingredient").val();
  // ajax URL
  var queryURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${baseingredient}`;
  // ajax call
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    $(".drink-info-wrapper").empty();
    $("#drink-img").empty();

    // adding drink information to the page
    const drink =
      response.drinks[Math.floor(Math.random() * response.drinks.length)];
    const $drinkdiv = $("<div>");
    const $name = $("<h2>").text("Name: " + drink.strDrink);
    drinkName = drink.strDrink;
    const $drink = $("<img>").attr("src", drink.strDrinkThumb);
    $drinkdiv.append($name);
    $(".drink-info-wrapper").prepend($drinkdiv);
    $("#drink-img").prepend($drink);
    // link to google search of drink ingredients
    $drink.wrap(
      $("<a>").attr(
        "href",
        "https://www.google.com/search?q=" + drinkName + " cocktail recipe"
      )
    );


    // adding instructions to page    
    const drinkID = drink.idDrink
    $.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID, function (data) {
      const $pglass = $("<p>").text("Preferred Glass: " + data.drinks[0].strGlass)
      const $pinstruct = $("<p>").text("Instructions: " + data.drinks[0].strInstructions)
      $(".drink-info-wrapper").append($pglass, $pinstruct);
    });
  });
});

// save button for drinks
let drinkName;
let savedDrinks = []
$(".save-drink-btn").on("click", function (e) {
  e.preventDefault();
  if (!drinkName || savedDrinks.includes(drinkName)) return;
  savedDrinks.push(drinkName);
  localStorage.setItem("savedDrinks", JSON.stringify(savedDrinks));
  getSavedDrinks();
})

// adding saved drinks to dropdown
function getSavedDrinks() {
  const favoriteDrinks = localStorage.getItem("savedDrinks");
  console.log(favoriteDrinks);
  const drinkArr = JSON.parse(favoriteDrinks);
  $(".saved-drinks").empty();
  for (let i = 0; i < drinkArr.length; i++) {
    let currentDrink = drinkArr[i];
    ($("<p>").text(`-${currentDrink}`)).appendTo($(".saved-drinks"))
  }
}