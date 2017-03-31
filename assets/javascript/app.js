var apiKey = '45b404746d6aecd3a90cbeeeab19a52b';
var imagePath = 'https://image.tmdb.org/t/p/original/';

var queryUrlBase = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey +'&region=us';
console.log('QUERYURLBASE', queryUrlBase);

function runQuery(genre,queryURL){

  $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(movieDBData){
          for (var i = 0; i < movieDBData.results.length; i++) {

            console.log(queryURL);
            console.log(movieDBData.results[i]);
            console.log('MOVIEDBDATA.RESULTS[I].TITLE', movieDBData.results[i].title);
            console.log('MOVIEDBDATA.RESULTS[I].POSTER_IMAGES', imagePath +  movieDBData.results[i].poster_path);
            
          }



        });

}

runQuery('test',queryUrlBase);
