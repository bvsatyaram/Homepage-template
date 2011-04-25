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


///////////////////
// Welcome Actions
///////////////////
$(document).ready(function(){
	$('#welcome_actions .action').hover(function(){
		$(".caption", this).stop().animate({top:'0px'},{queue:false,duration:300});
	}, function() {
		$(".caption", this).stop().animate({top:'-40px'},{queue:false,duration:300});
	});
});