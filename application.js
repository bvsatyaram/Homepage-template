///////////////////
// Navigation Tab
/////////////////
$(document).ready(function(){
  $( "ul#topnav li a.unselected" ).hover(
    function() {
      $(this).stop().animate({
        backgroundColor: "#505050"
      }, {
        queue:false,
        duration:500
      });
    },
    function() {
      $(this).stop().animate({
        backgroundColor: "#2E2E2E"
      }, {
        queue:false,
        duration:500
      });
    });
});


///////////////////
// Welcome Actions
///////////////////
$(document).ready(function(){
  $('#welcome_actions .action').hover(function(){
    $(".caption", this).stop().animate({
      top:'0px'
    },{
      queue:false,
      duration:300
    });
  }, function() {
    $(".caption", this).stop().animate({
      top:'-40px'
    },{
      queue:false,
      duration:300
    });
  });
});