var movieId2 = [];
var imageUrl2 = [];
var movieDetails = 'https://api.themoviedb.org/3/movie/';

// #####------------Variables-------------------------------->

var apiKey = '45b404746d6aecd3a90cbeeeab19a52b';


var imagePath = 'https://image.tmdb.org/t/p/';
var imageConf = 'https://api.themoviedb.org/3/configuration?api_key=' + apiKey;
var queryUrlBase = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&region=us';


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

        // console.log(imgConfig);
        for (let i = 0; i < movieDBData[0].results.length; i++) {


// =========fixing a bunch of broken stuff===============

 movieId2.push(movieDBData[0].results[i].id);
imageUrl2.push(imgConfig[0].images.secure_base_url + imgConfig[0].images.poster_sizes[6] + movieDBData[0].results[i].poster_path);



var sliderj = $('<li>');
sliderj.attr('id', movieId2[i]);
var anchorTag = $('<a href="#" data-reveal-id="videoModal">');

anchorTag.append('<img src="'+ imageUrl2[i] + '"/>');
sliderj.append(anchorTag);
$('#sb-slider').append(sliderj);

  }
});

}

runQuery('test', queryUrlBase, imageConf);

//  ======================== Moment.JS ======================================= -->
function update() {
    $('#clock').html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1000);

// ===============================================================
