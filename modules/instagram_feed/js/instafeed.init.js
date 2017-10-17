(function ($) {
    'use strict';
    jQuery(document).ready(function() {
        if (jQuery('#instafeed').length > 0) {
            jQuery('#instafeed').html('');
            var feed = new Instafeed({
                target: 'instafeed',
                get: 'user',
                userId: '4316093165',
                limit: '24',
                sortBy: 'most-recent',
                clientId: 'f3a28587d6454bd8baa7b2dc60429749',
                accessToken: '4316093165.1677ed0.4a2468a2232448e2810a46c9a3cb8d31',
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
                userId: '4316093165',
                limit: '24',
                sortBy: 'most-recent',
                clientId: 'f3a28587d6454bd8baa7b2dc60429749',
                accessToken: '4316093165.1677ed0.4a2468a2232448e2810a46c9a3cb8d31',
                resolution: 'thumbnail',
                template: '<a href="{{link}}" target="_blank"><span class="background"><span class="likes">{{likes}} likes</span></span><img src="{{image}}" /></a>',
            });
            feed_footer.run();
        }
    })
})(jQuery);
