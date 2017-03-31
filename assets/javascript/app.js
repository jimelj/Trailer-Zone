
// #####------------Variables-------------------------------->

var apiKey = '45b404746d6aecd3a90cbeeeab19a52b';
var imagePath = 'https://image.tmdb.org/t/p/';
var imageConf = 'https://api.themoviedb.org/3/configuration?api_key=45b404746d6aecd3a90cbeeeab19a52b';
var queryUrlBase = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey +'&region=us';
console.log('QUERYURLBASE', queryUrlBase);
console.log('IMAGECONF', imageConf);


// #####------------AJAX CALL-------------------------------->

function runQuery(genre,queryURL,imgConf){

  var ajax1 = $.ajax({
  dataType: "json",
  url: queryURL,
  async: true,
  success: function(result) {}
});


var ajax2 = $.ajax({
  dataType: "json",
  url: imgConf,
  async: true,
  success: function(result) {}
});

$.when( ajax1 , ajax2  ).done(function(movieDBData, imgConfig) {
   // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
   // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
   console.log('QUERYURLBASE', queryUrlBase);
   console.log('IMAGECONF', imageConf);
   console.log(movieDBData);
   console.log(movieDBData[0].results[0]);
   console.log(imgConfig[0].images);
});

  // Alternate---------------------------------ASK how come this differs in array
  // $.ajax({
  //           url: queryURL,
  //           method: "GET"
  //
  //       }).done(function(movieDBData){
  //         for (var i = 0; i < movieDBData.results.length; i++) {
  //
  //           console.log(queryURL);
  //           console.log(movieDBData.results);
  //           console.log(movieDBData.results[i]);
  //           console.log('MOVIEDBDATA.RESULTS[I].TITLE', movieDBData.results[i].title);
  //           console.log('MOVIEDBDATA.RESULTS[I].POSTER_IMAGES', imagePath +  movieDBData.results[i].poster_path);
  //
  //         }
  //
  //
  //
  //       });

}

runQuery('test',queryUrlBase,imageConf);
