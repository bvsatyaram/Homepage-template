///////////////////
// Navigation Tab
/////////////////
$(function() {
  $( "ul#topnav li a.unselected" ).hover(
    function() {
      $( this ).animate({
        backgroundColor: "#505050"
      }, {
        queue:false,
        duration:500
      } );
      return false;
    },
    function() {
      $( this ).animate({
        backgroundColor: "#2E2E2E"
      }, {
        queue:false,
        duration:500
      } );
      return false;
    });
})