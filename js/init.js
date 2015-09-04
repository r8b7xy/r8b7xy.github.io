$('.button-collapse').sideNav({
    menuWidth: 200, // Default is 240
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});
// $(function() {
    $('header').bind('click', 'ul li a', function(event) {
        $.scrollTo(event.target.hash, 250);
    });
// });
