(function($){
  $(function(){

  $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

  }); // end of document ready

  var options = [
    {selector: '#nav_contact', offset: 200, callback: 'Materialize.fadeInImage("#nav_contact")' },
    {selector: '#nav_map', offset: 200, callback: 'Materialize.fadeInImage("#nav_map")' },
  ];
  Materialize.scrollFire(options);

  // plugin init
    $('.scrollspy').scrollSpy();

})(jQuery); // end of jQuery name space
