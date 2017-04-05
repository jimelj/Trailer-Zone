// #####------------Variables-------------------------------->

var apiKey = '45b404746d6aecd3a90cbeeeab19a52b';


var imagePath = 'https://image.tmdb.org/t/p/';
var imageConf = 'https://api.themoviedb.org/3/configuration?api_key=' + apiKey;
var queryUrlBase = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&region=us';
console.log('QUERYURLBASE', queryUrlBase);
console.log('IMAGECONF', imageConf);


// #####------------AJAX CALL-------------------------------->

function runQuery(genre, queryURL, imgConf) {

    var ajax1 = $.ajax({
        dataType: "json",
        url: queryURL,
        async: true,
        success: function(result) {
            //   // return Object;
        }
    });


    var ajax2 = $.ajax({
        dataType: "json",
        url: imgConf,
        async: true,
        success: function(result) {}
    });

    $.when(ajax1, ajax2).done(function(movieDBData, imgConfig) {
        // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
        // Each argument is an array with the following structure: [ data, statusText, jqXHR ]


        for (let i = 0; i < movieDBData[0].results.length; i++) {
            console.log('QUERYURLBASE', queryUrlBase);
            console.log('IMAGECONF', imageConf);


            //  console.log(movieDBData);
            //  console.log(movieDBData[0].results[i]);
            //  console.log(movieDBData[0].results[i].poster_path);
            //  console.log(imgConfig[0].images.secure_base_url+imgConfig[0].images.poster_sizes[6]+movieDBData[0].results[i].poster_path);

            // console.log('title ' + movieDBData[0].results[i].title);
            // console.log('genre ' + movieDBData[0].results[i].genre_ids);
            // console.log('runtime' + movieDBData[0].results[i].title);
            // console.log('plot ' + movieDBData[0].results[i].overview);
            // console.log('release date ' + movieDBData[0].results[i].release_date);
            // console.log('rating ' + Math.round(movieDBData[0].results[i].popularity));
            // console.log(imgConfig[0].images.secure_base_url+imgConfig[0].images.poster_sizes[6]+movieDBData[0].results[i].poster_path);



            console.log('movies id ' + movieDBData[0].results[i].id);
            console.log('details' + movieDBData[0].results[i].title);
            console.log(movieDBData[0].results[i].id);
            movieId = movieDBData[0].results[i].id;
            var movieDetails = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=45b404746d6aecd3a90cbeeeab19a52b&language=en-US';

            $.ajax({
                    url: movieDetails,
                    method: "GET"
                })
                .done(function(movieDetails) {



                    //  console.log("I AM HERE!!!!!!" , movieDetails);
                    //  console.log('title ' + movieDetails.title);
                    //  for (var j = 0; j < movieDetails.genres.length; j++) {
                    //    console.log('genres ',   movieDetails.genres[j].name);
                    //  }
                    //  console.log('runtime ' + movieDetails.runtime);
                    //  console.log('plot ' + movieDetails.overview);
                    //  console.log('release date ' + movieDetails.release_date);
                    //  console.log('rating ' + Math.round(movieDetails.popularity));
                    //  console.log(imgConfig[0].images.secure_base_url+imgConfig[0].images.poster_sizes[6]+movieDetails.poster_path);

                    var imageUrl = imgConfig[0].images.secure_base_url + imgConfig[0].images.poster_sizes[6] + movieDetails.poster_path;
                    console.log('IMAGEURL', imageUrl);

                    var movieTitle = movieDetails.title;
                    console.log('MOVIETITLE', movieTitle);

                    var sliderj = $('<li>');
                    sliderj.attr('id', 'movie-' + i);
                    var anchorTag = $('<a href="#" data-reveal-id="videoModal">');

                    anchorTag.append('<img src="'+ imageUrl + '"/>');
                    sliderj.append(anchorTag);
                    $('#sb-slider').append(sliderj);



                    // var modal = $('<div id="videoModal" class="reveal-modal large" data-reveal aria-labelledby="videoModalTitle" aria-hidden="true" role="dialog">');
                    // modal.attr('id', 'movie-' + i);
                    // modal.append('<a class="close"> X </a>');
                    //
                    // var videoContent = $('<div class="videoContent">');
                    //
                    // videoContent.append('<iframe width="560" height="315" src="https://www.youtube.com/embed/duGqrYw4usE" frameborder="0" allowfullscreen></iframe>');
                    //
                    // var movieContent = $('<div class="movieContent">');
                    // videoContent.append(movieContent);
                    // modal.append(videoContent);
                    //
                    //
                    // var title = $('<p>');
                    // title.append(movieTitle);
                    // movieContent.append(title);
                    //
                    // $('.wrapper').append(modal);












                });



        }



    });



}

runQuery('test', queryUrlBase, imageConf);
