var movie = $("#movieSearch").val();
var queryURL = "http://www.omdbapi.com/?apikey=dcedfc78&s=" + movie;

$("#btnSearch").on("click", function() {
  event.preventDefault();

  var movie = $("#movieSearch :selected").val();
  var queryURL = "http://www.omdbapi.com/?apikey=dcedfc78&t=" + movie;

  var queryURLYear =
    "https://api.themoviedb.org/3/discover/movie?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0&language=en-US&primary_release_year=" +
    movie +
    "";

  var queryURLTrending =
    "https://api.themoviedb.org/3/trending/all/week?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0";

  //YEAR

  $.ajax({
    url: queryURLYear,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var arrayMovies = [];
    var arrayOverview = [];
    var arrayYear = [];
    var arrayPoster = [];
    var arrayAverage = [];

    for (let i = 0; i < 20; i++) {
      let moviePopular = response.results[i].original_title;
      let movieOverview = response.results[i].overview;
      let moviePoster = response.results[i].poster_path;
      let movieDate = response.results[i].release_date;
      var movieAverage = response.results[i].vote_average;

      queryPoster = "http://image.tmdb.org/t/p/w185//" + moviePoster + "";

      // // let movieActors = response.Actors;
      // // let movieRatings = response.Ratings[2];
      // // let moviePlot = response.Plot;
      popular = moviePopular;
      overview = movieOverview;
      poster = queryPoster;
      date = movieDate;
      average = movieAverage;

      arrayMovies.push(popular);
      arrayYear.push(date);
      arrayOverview.push(overview);
      arrayPoster.push(poster);
      arrayAverage.push(average);
      // ratings = JSON.stringify(movieRatings);
      // plot = JSON.stringify(moviePlot);
    }
    console.log(arrayMovies);

    $("tbody").empty();
    $(".content").append("<table>");
    $("tbody").append("<th>" + "Title" + "</th");
    $("tbody").append("<th>" + "Year" + "</th");
    $("tbody").append("<th>" + "Plot" + "</th");
    $("tbody").append("<th>" + "Average" + "</th");
    $("tbody").addClass("thead-dark");

    for (i = 0; i < arrayMovies.length; i++) {
        $(".table-movie").append(
          "<tr><td>" +
            arrayMovies[i] +
            "<img src=" +
            arrayPoster[i] +
            " class=" +
            "imgClass" +
            "></td><td>" +
            arrayYear[i] +
            "</td><td>" +
            arrayOverview[i] +
            " " +
            "</td><td>" +
            arrayAverage[i] +
            "</td></tr>"
        );
      }
  });
});

//TRENDING

$("#btnTrend").on("click", function() {
  event.preventDefault();

  var queryURLTrending =
    "https://api.themoviedb.org/3/trending/all/week?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0";

  $.ajax({
    url: queryURLTrending,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var arrayMovies = [];
    var arrayOverview = [];
    var arrayYear = [];
    var arrayPoster = [];
    var arrayAverage = [];

    for (let i = 0; i < 20; i++) {
      var moviePopular = response.results[i].original_title;
      var movieOverview = response.results[i].overview;
      var moviePoster = response.results[i].poster_path;
      var movieDate = response.results[i].release_date;
      var movieAverage = response.results[i].vote_average;

      queryPoster = "http://image.tmdb.org/t/p/w185//" + moviePoster + "";

      // // let movieActors = response.Actors;
      // // let movieRatings = response.Ratings[2];
      // // let moviePlot = response.Plot;
      popular = moviePopular;
      overview = movieOverview;
      poster = queryPoster;
      date = movieDate;
      average = movieAverage;

      if (typeof response.results[i].original_title != "undefined") {
        arrayMovies.push(popular);
        arrayYear.push(date);
        arrayOverview.push(overview);
        arrayPoster.push(poster);
        arrayAverage.push(average);
      }

      if (arrayAverage[i] >= 7) {
        $(arrayAverage[i]).addClass("badge badge-success")
      }

    }
    console.log(arrayMovies);

    $("tbody").empty();
    $(".content").append("<table>");
    $("tbody").append("<th>" + "Title" + "</th");
    $("tbody").append("<th>" + "Year" + "</th");
    $("tbody").append("<th>" + "Plot" + "</th");
    $("tbody").append("<th>" + "Average" + "</th");
    $("tbody").addClass("thead-dark");

    for (i = 0; i < arrayMovies.length; i++) {
        $(".table-movie").append(
          "<tr><td>" +
            arrayMovies[i] +
            "<img src=" +
            arrayPoster[i] +
            " class=" +
            "imgClass" +
            "></td><td>" +
            arrayYear[i] +
            "</td><td>" +
            arrayOverview[i] +
            " " +
            "</td><td>" +
            arrayAverage[i] +
            "</td></tr>"
        );
      }
  });
});

//by genre

$("#btnGenre").on("click", function() {
  event.preventDefault();

  var movie = $("#movieSearch :selected").val();
  var genreSelected = $("#movieSearchGenre").val();
  console.log(genreSelected);

  var queryURLGenre =
    "https://api.themoviedb.org/3/discover/movie?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0&language=en-US&with_genres=" +
    genreSelected +
    "&primary_release_year=" +
    movie +
    "";

  $.ajax({
    url: queryURLGenre,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var arrayMovies = [];
    var arrayOverview = [];
    var arrayYear = [];
    var arrayPoster = [];
    var arrayAverage = [];
    
    for (let i = 0; i < 20; i++) {
      var moviePopular = response.results[i].original_title;
      var movieOverview = response.results[i].overview;
      var moviePoster = response.results[i].poster_path;
      var movieDate = response.results[i].release_date;
      var movieAverage = response.results[i].vote_average;

      queryPoster = "http://image.tmdb.org/t/p/w185//" + moviePoster + "";

      // // let movieActors = response.Actors;
      // // let movieRatings = response.Ratings[2];
      // // let moviePlot = response.Plot;
      popular = moviePopular;
      overview = movieOverview;
      poster = queryPoster;
      date = movieDate;
      average = movieAverage;
      var movieLinks = "https://cuevana2.io/pelicula/" + popular;
      links = movieLinks.replace(/ +/g, "-");

      if (typeof response.results[i].original_title != "undefined") {
        arrayMovies.push(popular);
        arrayYear.push(date);
        arrayOverview.push(overview);
        arrayPoster.push(poster);
        arrayAverage.push(average);
       
      }
    }
    console.log(arrayMovies);
   

    $("tbody").empty();
    $(".content").append("<table>");
    $("tbody").append("<th>" + "Title" + "</th");
    $("tbody").append("<th>" + "Year" + "</th");
    $("tbody").append("<th>" + "Plot" + "</th");
    $("tbody").append("<th>" + "Average" + "</th");
    $("tbody").addClass("thead-dark");

    for (i = 0; i < arrayMovies.length; i++) {
      $(".table-movie").append(
        "<tr><td>" +
          arrayMovies[i] +
          "<img src=" +
          arrayPoster[i] +
          " class=" +
          "imgClass" +
          "></td><td>" +
          arrayYear[i] +
          "</td><td>" +
          arrayOverview[i] +
          " " +
          "</td><td>" +
          arrayAverage[i] +
          "</td></tr>"
      );
    }
  });
});

$(".btnTitle").on("click", function() {
  event.preventDefault();

  var movieTitle = $("#movieSearchTitle").val().trim();
  movieTitle = movieTitle.replace(/ +/g, "%20");
  console.log(movieTitle);


  var querySearchTitle =
    "https://api.themoviedb.org/3/search/movie?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0&language=en-US&query="+movieTitle+"";

  $.ajax({
    url: querySearchTitle,
    method: "GET"
  }).then(function(responseTitle) {
    
    var arrayMovies = [];
    var arrayOverview = [];
    var arrayYear = [];
    var arrayPoster = [];
    var arrayAverage = [];

    for (var i= 0; i<responseTitle.results.length; i++) {
      var moviePopular = responseTitle.results[i].original_title;
      console.log(moviePopular);
      var movieOverview = responseTitle.results[i].overview;
      var moviePoster = responseTitle.results[i].poster_path;
      var movieDate = responseTitle.results[i].release_date;
      var movieAverage = responseTitle.results[i].vote_average;

      queryPoster = "http://image.tmdb.org/t/p/w185//" + moviePoster + "";

      // // let movieActors = response.Actors;
      // // let movieRatings = response.Ratings[2];
      // // let moviePlot = response.Plot;
      
      overview = movieOverview;
      poster = queryPoster;
      date = movieDate;
      average = movieAverage;

      if (typeof moviePopular != "undefined") {
        arrayMovies.push(moviePopular);
        arrayYear.push(date);
        arrayOverview.push(overview);
        arrayPoster.push(poster);
        arrayAverage.push(average);
      } 
    }
    

    $("tbody").empty();
    $(".content").append("<table>");
    $("tbody").append("<th>" + "Title" + "</th");
    $("tbody").append("<th>" + "Year" + "</th");
    $("tbody").append("<th>" + "Plot" + "</th");
    $("tbody").append("<th>" + "Average" + "</th");
    $("tbody").addClass("thead-dark");

    for (var i = 0; i < arrayMovies.length; i++) {
        $(".table-movie").append(
          "<tr><td>" +
            arrayMovies[i] +
            "<img src=" +
            arrayPoster[i] +
            " class=" +
            "imgClass" +
            "></td><td>" +
            arrayYear[i] +
            "</td><td>" +
            arrayOverview[i] +
            " " +
            "</td><td>" +
            arrayAverage[i] +
            "</td></tr>"
        );
      }
  });

});

//books

     $(".btnLibro").on("click", function(){
        event.preventDefault();

        var libro = $("#movieSearchTitle").val();
        var genreSelected = $("#movieSearchGenre").val();
        console.log(genreSelected);

        var queryURLBook = 'http://openlibrary.org/subjects/'+libro+'.json?limit=10';

    $.ajax ({
        url: queryURLBook,
        method: 'GET'
    }).then(function(responseBook) {
        console.log(responseBook);

        var coverId;

    var arrayBooks = [];
    var arrayOverview = [];
    var arrayYear = [];
    var arrayPoster = [];
    var arrayAverage = [];

    for (var i= 0; i<responseBook.works.length; i++) {
      var moviePopular = responseBook.works[i].title;
      var moviePoster = responseBook.works[i].cover_id;

      // // let movieActors = response.Actors;
      // // let movieRatings = response.Ratings[2];
      // // let moviePlot = response.Plot;
      
      
     

      poster = "http://covers.openlibrary.org/b/id/"+moviePoster+"-M.jpg";

      if (typeof moviePopular != "undefined") {
        arrayBooks.push(moviePopular);
        
       
        arrayPoster.push(poster);
       
      } 
    }
    

    $("tbody").empty();
    $(".content").append("<table>");
    $("tbody").append("<th>" + "Title" + "</th");
    $("tbody").append("<th>" + "Poster" + "</th");
   
    $("table").css("width", "65%");
    $("tbody").addClass("thead-dark");

    for (var i = 0; i < arrayBooks.length; i++) {
        $(".table-movie").append(
          "<tr><td>" +
            arrayBooks[i] +"</td><td>"+ 
            "<img src=" +
            arrayPoster[i] +
            " class=" +
            "imgClass" +
            "></td></tr>"
        );
      }
  });

});
        

