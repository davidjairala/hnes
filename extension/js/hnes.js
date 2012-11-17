jQuery(function() {
  var hnesExtension = function(options) {
    this.options = options || {};
    this.replace_arrows();
  };

  hnesExtension.prototype = {
    replace_arrows : function() {
      var pattern_down = /^down_/;
      var pattern_up = /^up_/;

      var up_arrow = '&uarr;';
      var down_arrow = '&darr;';

      $('a').each(function(idx, val) {
        var id = $(this).attr('id');
        
        if(id !== undefined) {
          if(pattern_up.test(id)) {
            $(this).html(up_arrow);
          } else if(pattern_down.test(id)) {
            $(this).html(down_arrow);
          }
        }
      });
    }
  };

  var hnes_extension = new hnesExtension();
});