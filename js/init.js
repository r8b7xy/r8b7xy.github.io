(function($){
  $(function(){

  $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

  }); // end of document ready

  var options = [
    {selector: '#nav_contact', offset: 500, callback: 'Materialize.fadeInImage("#nav_contact")' },
  ];
  Materialize.scrollFire(options);

})(jQuery); // end of jQuery name space
