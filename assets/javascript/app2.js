var apiKey = '45b404746d6aecd3a90cbeeeab19a52b';
var imagePath = 'https://image.tmdb.org/t/p/original';
var queryUrlBase = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&region=us';
console.log('QUERYURLBASE', queryUrlBase);
// console.log('IMAGECONF', imageConf);


var a1 = $.ajax({
             url: queryUrlBase,
             dataType: 'json'
         }),
        //  .done(function(movieDBData){
         //
        //   //  for (var i = 0; i < movieDBData.results.length; i++) {
        //   //    console.log(movieDBData.results[i].id);
        //    //
        //    //
        //   //  }
         //
        //  })

    a2 = a1.then(function(movieDBData) {
             // .then() returns a new promise
             for (var i = 0; i < movieDBData.results.length; i++) {
               console.log(movieDBData.results[i].id);
              }
            //  console.log(movieDBData);
               return $.ajax({
                 url: 'https://api.themoviedb.org/3/movie/' + movieDBData.results[i].id + '?api_key=45b404746d6aecd3a90cbeeeab19a52b&language=en-US',
                 dataType: 'json',
                 data: movieDBData.results
             });

         });

a2.done(function(data) {
    console.log(data);
});
