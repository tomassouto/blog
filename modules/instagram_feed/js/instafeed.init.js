(function ($, Drupal, drupalSettings) {
    /**
     * @namespace
     */
    var userId      = drupalSettings.instagram_feed.userId;
    var clientId    = drupalSettings.instagram_feed.clientId;
    var accessToken = drupalSettings.instagram_feed.accessToken;
    var limit       = drupalSettings.instagram_feed.limit;

    jQuery(document).ready(function() {
        if (jQuery('#instafeed').length > 0) {
            jQuery('#instafeed').html('');
            var feed = new Instafeed({
                target: 'instafeed',
                get: 'user',
                userId: userId,
                limit: '24',
                sortBy: 'most-recent',
                clientId: clientId,
                accessToken: accessToken,
                resolution: 'thumbnail',
                template: '<a href="{{link}}" target="_blank"><span class="background"><span class="likes">{{likes}} likes</span></span><img src="{{image}}" /></a>',
            });
            feed.run();
        }

        if (jQuery('#instafeed_footer').length > 0) {
            jQuery('#instafeed_footer').html('');
            var feed_footer = new Instafeed({
                target: 'instafeed_footer',
                get: 'user',
                userId: userId,
                limit: '24',
                sortBy: 'most-recent',
                clientId: clientId,
                accessToken: accessToken,
                resolution: 'thumbnail',
                template: '<a href="{{link}}" target="_blank"><span class="background"><span class="likes">{{likes}} likes</span></span><img src="{{image}}" /></a>',
            });
            feed_footer.run();
        }
    })

})(jQuery, Drupal, drupalSettings);
