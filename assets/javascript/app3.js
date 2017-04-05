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

                    $("#slider li").on("click", function() {
                          console.log($(this));
                        $("#videoModal").foundation('open').fadeIn();






                        $("#slider").fadeOut();
                        $("#logIn").fadeOut();
                        $(".button").fadeOut();
                        $("#shadow").fadeOut();
                        $navArrows.fadeOut();
                        $(".header").fadeOut();
                        $(".inputMovie").hide();

                        return false;
                    });

                    $('a.close').on('click', function() {
                        $('#videoModal').foundation('close');
                        $(".header").show();
                        $("#slider").show();
                        $("#shadow").show();
                        $navArrows.show();
                        $(".inputMovie").show();

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
},1000);
