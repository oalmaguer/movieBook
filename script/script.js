 var movie = $("#movieSearch").val();
        var queryURL = "http://www.omdbapi.com/?apikey=dcedfc78&s=" +movie;
       
        $("#btnSearch").on("click", function(){
            event.preventDefault();

             var movie = $("#movieSearch :selected").val();
             var queryURL = "http://www.omdbapi.com/?apikey=dcedfc78&t=" +movie;

             var queryURLYear = "https://api.themoviedb.org/3/discover/movie?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0&language=en-US&primary_release_year="+movie+"";

             var queryURLTrending = "https://api.themoviedb.org/3/trending/all/week?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0";

            //YEAR
            

        $.ajax ({
            url: queryURLYear,
            method: 'GET'
        }).then(function(response) {
            console.log(response);


            var arrayMovies = [];
            var arrayOverview = [];
            var arrayYear = [];
            var arrayPoster = [];

            for (let i=0;i<20;i++){
            let moviePopular = response.results[i].original_title;
            let movieOverview = response.results[i].overview;
            let moviePoster = response.results[i].poster_path;
            let movieDate = response.results[i].release_date;
            
           
            queryPoster = "http://image.tmdb.org/t/p/w185//"+moviePoster+"";
            
            // // let movieActors = response.Actors;
            // // let movieRatings = response.Ratings[2];
            // // let moviePlot = response.Plot;
            popular = moviePopular;
            overview = movieOverview;
            poster = queryPoster;
            date = movieDate;

            arrayMovies.push(popular);
            arrayYear.push(date);
            arrayOverview.push(overview);
            arrayPoster.push(poster);
            // ratings = JSON.stringify(movieRatings);
            // plot = JSON.stringify(moviePlot);
            
            }
            console.log(arrayMovies);

            $("tbody").empty();
            $(".content").append("<table>");
            $("tbody").append("<th>"+"Title"+"</th");
            $("tbody").append("<th>"+"Year"+"</th");
            $("tbody").append("<th>"+"Plot"+"</th");
            $("tbody").addClass("thead-dark");

           for (i=0;i<arrayMovies.length;i++) {
               $(".table-movie").append("<tr><td>"+arrayMovies[i]+"<img src=" +arrayPoster[i]+ ">"+"</td><td>"+arrayYear[i]+"</td><td>"+arrayOverview[i]+"</td></tr>");
           }

        })
        
    })
   
        //TRENDING

        $("#btnTrend").on("click", function(){
            event.preventDefault();

             var queryURLTrending = "https://api.themoviedb.org/3/trending/all/week?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0";

            
            

        $.ajax ({
            url: queryURLTrending,
            method: 'GET'
        }).then(function(response) {
            console.log(response);


            var arrayMovies = [];
            var arrayOverview = [];
            var arrayYear = [];
            var arrayPoster = [];

            for (let i=0;i<20;i++){
            var moviePopular = response.results[i].original_title;
            var movieOverview = response.results[i].overview;
            var moviePoster = response.results[i].poster_path;
            var movieDate = response.results[i].release_date;
            
            queryPoster = "http://image.tmdb.org/t/p/w185//"+moviePoster+"";
            
            // // let movieActors = response.Actors;
            // // let movieRatings = response.Ratings[2];
            // // let moviePlot = response.Plot;
            popular = moviePopular;
            overview = movieOverview;
            poster = queryPoster;
            date = movieDate;

            if (typeof response.results[i].original_title != "undefined"){

            arrayMovies.push(popular);
            arrayYear.push(date);
            arrayOverview.push(overview);
            arrayPoster.push(poster);
            
            } 
            
            
            }
            console.log(arrayMovies);

            $("tbody").empty();
           $(".content").append("<table>");
           $("tbody").append("<th>"+"Title"+"</th");
            $("tbody").append("<th>"+"Year"+"</th");
             $("tbody").append("<th>"+"Plot"+"</th");
             $("tbody").addClass("thead-dark");
             
             

           for (i=0;i<arrayMovies.length;i++) {
               $(".table-movie").append("<tr><td>"+arrayMovies[i]+"<img src=" +arrayPoster[i]+ ">"+"</td><td>"+arrayYear[i]+"</td><td>"+arrayOverview[i]+"</td></tr>");
           }

        })
        
        
    })
        

        //by genre

     $("#btnGenre").on("click", function(){
            event.preventDefault();

            var movie = $("#movieSearch :selected").val();
            var genreSelected = $("#movieSearchGenre").val();
            console.log(genreSelected);

            var queryURLGenre = "https://api.themoviedb.org/3/discover/movie?api_key=3ce487e5f4b9c4f747c250ad1fb0e3b0&language=en-US&with_genres="+genreSelected+"&primary_release_year="+movie+"";

        $.ajax ({
            url: queryURLGenre,
            method: 'GET'
        }).then(function(response) {
            

            var arrayMovies = [];
            var arrayOverview = [];
            var arrayYear = [];
            var arrayPoster = [];

            for (let i=0;i<20;i++){
            var moviePopular = response.results[i].original_title;
            var movieOverview = response.results[i].overview;
            var moviePoster = response.results[i].poster_path;
            var movieDate = response.results[i].release_date;
            
            queryPoster = "http://image.tmdb.org/t/p/w185//"+moviePoster+"";
            
            // // let movieActors = response.Actors;
            // // let movieRatings = response.Ratings[2];
            // // let moviePlot = response.Plot;
            popular = moviePopular;
            overview = movieOverview;
            poster = queryPoster;
            date = movieDate;

            if (typeof response.results[i].original_title != "undefined"){

            arrayMovies.push(popular);
            arrayYear.push(date);
            arrayOverview.push(overview);
            arrayPoster.push(poster);
            
            } 
            
            
            }
            console.log(arrayMovies);

            $("tbody").empty();
           $(".content").append("<table>");
           $("tbody").append("<th>"+"Title"+"</th");
            $("tbody").append("<th>"+"Year"+"</th");
             $("tbody").append("<th>"+"Plot"+"</th");
             $("tbody").addClass("thead-dark");
             
             

           for (i=0;i<arrayMovies.length;i++) {
               $(".table-movie").append("<tr><td>"+arrayMovies[i]+"<img src=" +arrayPoster[i]+ ">"+"</td><td>"+arrayYear[i]+"</td><td>"+arrayOverview[i]+"</td></tr>");
           }

            
        })
     })