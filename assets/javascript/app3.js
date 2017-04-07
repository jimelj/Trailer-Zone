setTimeout(function(){

$(function() {







    var Page = (function() {
        var $navArrows = $('#nav-arrows').hide(),
            $shadow = $('#shadow').hide(),
            slicebox = $('#sb-slider').slicebox({



            onReady: function() {
              // debugger;
                    $navArrows.hide();
                    $shadow.hide();



                    $("#slider").hide();
                    $("#videoModal").hide();
                    $(".inputMovie").hide();
                    $(".button").on('click', function() {

                        $("#slider").show();
                        $("#logIn").hide();
                        $(".button").hide();
                        $(".inputMovie").show();
                        $("#shadow").show();
                        $navArrows.show();


                    });

                    $(document).foundation();

                    $('li').on("click", function() {
                        $('.movieContent').empty();
                        $('.videoContent iframe').attr('src','');
                        $("#videoModal").foundation('open').fadeIn();

                        var id = $(this).attr('id');



                        movieDetails += id +'?api_key=' + apiKey + '&append_to_response=videos';

                        console.log($(this).attr('id'));
                        console.log(movieDetails);




                        $("#slider").fadeOut();
                        $("#logIn").fadeOut();
                        $(".button").fadeOut();
                        $("#shadow").fadeOut();
                        $navArrows.fadeOut();
                        $(".header").fadeOut();
                        $(".inputMovie").hide();



                        $.ajax({
                                url: movieDetails,
                                method: "GET"
                            }).done(function(movieDetails){
                              console.log(movieDetails);
                              var title = movieDetails.original_title;
                              var date = movieDetails.release_date;
                              var plot = movieDetails.overview;
                              var run = movieDetails.runtime
                              var link = movieDetails.homepage;
                              var genre = [];
                              var video;
                              for (var j = 0; j < movieDetails.genres.length; j++) {
                                 genre.push(movieDetails.genres[j].name);
                                }
                              console.log(genre);

                              for (var i = 0; i < movieDetails.videos.results.length; i++) {

                                  console.log(movieDetails.videos.results[i]);
                                  if (movieDetails.videos.results[i].type === 'Trailer') {
                                    video = movieDetails.videos.results[i].key;
                                    console.log(video);
                                  }


                                }
                                $('.videoContent iframe').attr('src','https://www.youtube.com/embed/' + video);
                                var movieTitle = $('<p>');
                                movieTitle.append(title);
                                var releaseDate = $('<p>');
                                releaseDate.append(date);
                                var moviePlot = $('<p>');
                                moviePlot.append(plot);
                                var genres = $('<p>');
                                genres.append(genre);
                                var links = $('<p>');
                                links.append(link);
                                var runtime = $('<p>');
                                runtime.append(run);
                                $('.movieContent').append(movieTitle);
                                $('.movieContent').append('Runtime: ',runtime);
                                $('.movieContent').append('Release Date: ',releaseDate);
                                $('.movieContent').append(moviePlot);
                                $('.movieContent').append(genre.join(' '));
                                $('.movieContent').append(links);
                            });
                            movieDetails = 'https://api.themoviedb.org/3/movie/';
                            return false;
                    });

                    $('.close-button').on('click', function() {
                        $('#videoModal').foundation('close').fadeOut();
                        $(".header").fadeIn();
                        $("#slider").fadeIn();
                        $("#shadow").fadeIn();
                        $navArrows.fadeIn();
                        $(".inputMovie").fadeIn();

                    });


                },
                orientation: 'r',
                cuboidsRandom: true,
                disperseFactor: 30
            }),
            init = function() {
                initEvents();
            },
            initEvents = function() {

                // add navigation events
                $navArrows.children(':first').on('click', function() {
                    slicebox.next();
                    return false;
                });
                $navArrows.children(':last').on('click', function() {
                    slicebox.previous();
                    return false;
                });
            };
        return {
            init: init
        };
    })();
    Page.init();
});
},200);
