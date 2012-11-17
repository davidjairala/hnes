jQuery(function() {
  var hnesExtension = function(options) {
    this.options = options || {};

    this.replace_arrows();
  };

  hnesExtension.prototype = {
    // Replace arrows with html entities
    replace_arrows : function() {
      var pattern_down = /^down_/;
      var pattern_up = /^up_/;
      var pattern_match_up;
      var pattern_match_down;
      var id;
      var up_arrow = '&uarr;';
      var down_arrow = '&darr;';
      var that = this;


      $('a').each(function(idx, val) {
        id = $(this).attr('id');
        
        if(id !== undefined) {
          pattern_match_up    = pattern_up.test(id);
          pattern_match_down  = pattern_down.test(id);

          if(pattern_match_up || pattern_match_down) {
            if(pattern_match_up) {
              $(this).css('display', 'block');
              $(this).css('height', '50px');
              $(this).css('padding-top', '10px');

              $(this).html(up_arrow);
            } else if(pattern_match_down) {
              $(this).html(down_arrow);
            }
          }
        }
      });
    }

  };

  var hnes_extension = new hnesExtension();
});