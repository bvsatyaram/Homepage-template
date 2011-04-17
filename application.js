///////////////////////////////////////////////
// Plugin
//////////////////////////////////////////////
/**
 * @author Alexander Farkas
 * v. 1.21
 */


(function($) {
  if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
    var oldCurCSS = jQuery.curCSS;
    jQuery.curCSS = function(elem, name, force){
      if(name === 'background-position'){
        name = 'backgroundPosition';
      }
      if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
        return oldCurCSS.apply(this, arguments);
      }
      var style = elem.style;
      if ( !force && style && style[ name ] ){
        return style[ name ];
      }
      return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
    };
  }

  var oldAnim = $.fn.animate;
  $.fn.animate = function(prop){
    if('background-position' in prop){
      prop.backgroundPosition = prop['background-position'];
      delete prop['background-position'];
    }
    if('backgroundPosition' in prop){
      prop.backgroundPosition = '('+ prop.backgroundPosition;
    }
    return oldAnim.apply(this, arguments);
  };

  function toArray(strg){
    strg = strg.replace(/left|top/g,'0px');
    strg = strg.replace(/right|bottom/g,'100%');
    strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
    var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
    return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
  }

  $.fx.step. backgroundPosition = function(fx) {
    if (!fx.bgPosReady) {
      var start = $.curCSS(fx.elem,'backgroundPosition');

      if(!start){//FF2 no inline-style fallback
        start = '0px 0px';
      }

      start = toArray(start);

      fx.start = [start[0],start[2]];

      var end = toArray(fx.options.curAnim.backgroundPosition);
      fx.end = [end[0],end[2]];

      fx.unit = [end[1],end[3]];
      fx.bgPosReady = true;
    }
    //return;
    var nowPosX = [];
    nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
    nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
    fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

  };
})(jQuery);

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


/////////////////
// Home Page
/////////////////
function slideOffsetPosition(slide_title) {
  switch(slide_title) {
    case 'home':
      return '0px 0px';
      break;
    case 'blog':
      return '0px -413px';
      break;
    case 'articles':
      return '0px -825px';
      break;
    case 'projects':
      return '0px -1237px';
      break;
    case 'about':
      return '0px -1649px';
      break;
    case 'contact':
      return '0px -2061px';
      break;
  }
}

$(function() {
  $("#content .home_slide_show .slide_selector").hover(
    function() {
      $("#content .home_slide_show .slide_selector ul li").hover(
        function() {
          slide_title = $(this).children('span.title').text().toLowerCase();
          $(this).parents().eq(2).children('.slide_pane').stop().animate({
            backgroundPosition: slideOffsetPosition(slide_title)
          });
          return false;
        },
        function() {});
    },
    function() {
      $(this).parent().children('.slide_pane').stop().animate({
        backgroundPosition: slideOffsetPosition('home')
      })
      return false;
    }
    )
})