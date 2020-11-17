// //Lookup cocktail name by spirits 
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

var queryURL =
"https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" +
  
  
  //called ajax for link above
  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=",
    method: "Submit"
  }).then(function(1) {
    console.log(vodka);
  });

  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/2/search.php?i=",
    method: "Submit"
  }).then(function(2) {
    console.log(whiskey);
  });

  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=rum",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=gin",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=brandy",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

  $.ajax({
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=tequila",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });