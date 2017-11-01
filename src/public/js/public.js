$(function(){
    var clenWidth = function(){
      var bodyWidth = $(window).width();
      var newHhtmlFontSzie = 100 * (bodyWidth/750) + 'px';
      $('html').css({
        'font-size'  :   newHhtmlFontSzie
      })
    }
    clenWidth();

    window.onresize = function(){
      clenWidth();
    }
})


