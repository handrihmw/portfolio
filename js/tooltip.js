(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.tooltip').bind('touchstart', function(e) {
      return $(this).addClass('active');
    }).bind('touchend', function(e) {
      return $(this).removeClass('active');
    });
  } else {
    $('.tooltip').mouseover(function(e) {
      return $(this).addClass('active');
    }).mouseleave(function(e) {
      return $(this).removeClass('active');
    });
  }

}).call(this);
