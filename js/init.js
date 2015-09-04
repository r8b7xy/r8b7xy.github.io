(function($){
    $(function(){

        $('header').bind('click', 'ul li a', function(event) {
            $.scrollTo(event.target.hash, 250);
        });

        // Plugin initialization
        $('.slider').slider({full_width: true});
        $('.parallax').parallax();
        $('.modal-trigger').leanModal();
        $('.scrollspy').scrollSpy();
        $('.button-collapse').sideNav({closeOnClick: true});
        $('.datepicker').pickadate({selectYears: 20});
        $('select').not('.disabled').material_select();

    }); // end of document ready
})(jQuery); // end of jQuery name space
