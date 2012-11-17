jQuery(function() {
  var hnesExtension = function(options) {
    this.options      = options || {};
    this.pattern_down = /^down_/;
    this.pattern_up   = /^up_/;

    this.replace_arrows();
    this.fix_arrow_height();
  };

  hnesExtension.prototype = {
    replace_arrows : function() {
      var id;
      var up_arrow = '&uarr;';
      var down_arrow = '&darr;';
      var that = this;

      $('a').each(function(idx, val) {
        id = $(this).attr('id');
        
        if(id !== undefined) {
          if(that.pattern_up.test(id)) {
            $(this).html(up_arrow);
          } else if(that.pattern_down.test(id)) {
            $(this).html(down_arrow);
          }
        }
      });
    },

    fix_arrow_height : function() {
      var id;
      var that = this;

      $('body table table table a').each(function(idx, val) {
        id = $(this).attr('id');
        
        if(id !== undefined && that.pattern_up.test(id)) {
          $(this).css('display', 'block');
          $(this).css('height', '50px');
          $(this).css('padding-top', '10px');
        }
      });
    }

  };

  var hnes_extension = new hnesExtension();
});