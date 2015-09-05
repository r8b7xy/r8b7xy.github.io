(function($){
  $(function(){

  $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

  }); // end of document ready

  var options = [
    {selector: '#nav_info', offset: 300, callback: 'Materialize.fadeInImage("#nav_info")' },
    {selector: '#nav_contact', offset: 500, callback: 'Materialize.fadeInImage("#nav_contact")' },
    {selector: '#nav_map', offset: 300, callback: 'Materialize.fadeInImage("#nav_map")' },
  ];
  Materialize.scrollFire(options);

  // plugin init
    $('.scrollspy').scrollSpy();

})(jQuery); // end of jQuery name space
