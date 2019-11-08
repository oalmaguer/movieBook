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
    "https://api.themoviedb.org/3/trending/all/day?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0";

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
    var arrayId = [];

    for (let i = 0; i < 20; i++) {
      var moviePopular = response.results[i].original_title;
      var movieOverview = response.results[i].overview;
      var moviePoster = response.results[i].poster_path;
      var movieDate = response.results[i].release_date;
      var movieAverage = response.results[i].vote_average;
      var movieId = response.results[i].id;

      queryPoster = "http://image.tmdb.org/t/p/w185//" + moviePoster + "";

      // // let movieActors = response.Actors;
      // // let movieRatings = response.Ratings[2];
      // // let moviePlot = response.Plot;
      popular = moviePopular;
      overview = movieOverview;
      poster = queryPoster;
      date = movieDate;
      average = movieAverage;
      id = movieId;

      if (typeof response.results[i].original_title != "undefined") {
        arrayMovies.push(popular);
        arrayYear.push(date);
        arrayOverview.push(overview);
        arrayPoster.push(poster);
        arrayAverage.push(average);
        arrayId.push(id);
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

      str1 = arrayId[i].toString();
      console.log(str1);
      $(".table-movie tr:contains(" + arrayMovies[i] + ")").addClass(str1);
    }

    $(".table-movie tr:contains(" + arrayMovies[i] + ")").addClass(str1);
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

  var movieTitle = $("#movieSearchTitle")
    .val()
    .trim();
  movieTitle = movieTitle.replace(/ +/g, "%20");
  console.log(movieTitle);

  var querySearchTitle =
    "https://api.themoviedb.org/3/search/movie?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0&language=en-US&query=" +
    movieTitle +
    "";

  $.ajax({
    url: querySearchTitle,
    method: "GET"
  }).then(function(responseTitle) {
    var arrayMovies = [];
    var arrayOverview = [];
    var arrayYear = [];
    var arrayPoster = [];
    var arrayAverage = [];
    var arrayId = [];

    for (var i = 0; i < responseTitle.results.length; i++) {
      var moviePopular = responseTitle.results[i].original_title;
      console.log(moviePopular);
      var movieOverview = responseTitle.results[i].overview;
      var moviePoster = responseTitle.results[i].poster_path;
      var movieDate = responseTitle.results[i].release_date;
      var movieAverage = responseTitle.results[i].vote_average;
      var movieId = responseTitle.results[i].id;

      queryPoster = "http://image.tmdb.org/t/p/w185//" + moviePoster + "";

      // // let movieActors = response.Actors;
      // // let movieRatings = response.Ratings[2];
      // // let moviePlot = response.Plot;

      overview = movieOverview;
      poster = queryPoster;
      date = movieDate;
      average = movieAverage;
      id = movieId;

      if (typeof moviePopular != "undefined") {
        arrayMovies.push(moviePopular);
        arrayYear.push(date);
        arrayOverview.push(overview);
        arrayPoster.push(poster);
        arrayAverage.push(average);
        arrayId.push(id);
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

      str1 = arrayId[i].toString();
      console.log(str1);
      $(".table-movie tr:contains(" + arrayMovies[i] + ")").addClass(str1);
    }
  });
});

$(".btnRecommend").on("click", function() {
  event.preventDefault();

  var movieTitle = $("#movieSearchTitle")
    .val()
    .trim();
  movieTitle = movieTitle.replace(/ +/g, "%20");
  var querySearchTitle =
    "https://api.themoviedb.org/3/search/movie?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0&language=en-US&query=" +
    movieTitle +
    "";

  $.ajax({
    url: querySearchTitle,
    method: "GET"
  }).then(function(responseTitle) {
    var movieId = responseTitle.results[0].id;

    var queryId =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/recommendations?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0&page=1";

    var queryCredits =
      "https://api.themoviedb.org/3/movie/" +
      movieId +
      "/credits?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0";

    $.ajax({
      url: queryId,
      method: "GET"
    }).then(function(responseTitle) {
      console.log(responseTitle);
      var arrayMovies = [];
      var arrayOverview = [];
      var arrayYear = [];
      var arrayPoster = [];
      var arrayAverage = [];
      var arrayId = [];
      var arrayBackdrop = [];

      for (var i = 0; i < responseTitle.results.length; i++) {
        var moviePopular = responseTitle.results[i].original_title;
        console.log(moviePopular);
        var movieOverview = responseTitle.results[i].overview;
        var moviePoster = responseTitle.results[i].poster_path;
        var movieBackdrop = responseTitle.results[i].backdrop_path;
        var movieDate = responseTitle.results[i].release_date;
        var movieAverage = responseTitle.results[i].vote_average;
        var movieId = responseTitle.results[i].id;

        queryPoster = "http://image.tmdb.org/t/p/w185//" + moviePoster + "";

        queryBackdrop =
          "http://image.tmdb.org/t/p/original//" + movieBackdrop + "";

        // // let movieActors = response.Actors;
        // // let movieRatings = response.Ratings[2];
        // // let moviePlot = response.Plot;

        overview = movieOverview;
        poster = queryPoster;
        date = movieDate;
        average = movieAverage;
        id = movieId;
        backdrop = queryBackdrop;
        console.log(backdrop);

        if (typeof moviePopular != "undefined") {
          arrayMovies.push(moviePopular);
          arrayYear.push(date);
          arrayOverview.push(overview);
          arrayPoster.push(poster);
          arrayAverage.push(average);
          arrayId.push(id);
          arrayBackdrop.push(backdrop);
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
        $(".table-movie tr:contains(" + arrayMovies[i] + ")").on(
          "click",
          function() {
            $("tr").append(arrayMovies[i]);
          }
        );
      }
    });
  });
});
