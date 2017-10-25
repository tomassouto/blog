(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtMagnificPopupFieldImage = {
    attach: function (context, settings) {
      $(context).find('.field--name-field-image a.image-popup').each(function(i) {
        var $image = jQuery(this).closest('.overlay-container').find('img').attr('src');
        var $search = /\/styles\/(portfolio_teaser|image_teaser_small)\/public/i;

        var $imageFinal = $image.replace($search,"");
        jQuery(this).attr('href', $imageFinal);
      });
      $(context).find('.field--name-field-image a.image-popup').once('mtMagnificPopupFieldImageInit').magnificPopup({
        type:"image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
          enabled: true, // set to true to enable gallery
        },
        image: {
          titleSrc: function(item) {
            return item.el.closest('.overlay-container').children()[1].title || '';
          }
        }
      });



      $(context).find('.node__main-content img').once('mtMagnificPopupFieldImageInit').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        },
        callbacks: {
          elementParse: function(qw) {
            qw.src = qw.el.attr('src');
          }
        }
      });


    }
  };
})(jQuery, Drupal, drupalSettings);
