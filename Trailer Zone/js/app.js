$(function() {


            var Page = (function() {
                var $navArrows = $('#nav-arrows').hide(),
                    $shadow = $('#shadow').hide(),
                    slicebox = $('#sb-slider').slicebox({
  






                        onReady: function() {
                            $navArrows.hide();
                            $shadow.hide();



                            $("#slider").hide();
                            $("#videoModal").hide();

                            $(".button").on('click', function() {

                                $("#slider").show();
                                $("#logIn").hide();
                                $(".button").hide();
                                $("#shadow").show();
                                $navArrows.show();


                            });

                            $(document).foundation();

                            $("img").on("click", function() {

                                $("#videoModal").foundation('open');
                                



                                $("#slider").fadeOut(1000);
                                $("#logIn").fadeOut();
                                $(".button").fadeOut();
                                $("#shadow").fadeOut();
                                $navArrows.fadeOut();
                                $(".header").fadeOut();

                                return false;

                                

                                
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