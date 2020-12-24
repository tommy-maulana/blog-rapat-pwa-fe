'use strict';

Framework7.request.get('partials/modern-card.html', function(data) {
    Template7.registerPartial('modern_card_partial', data);
});

Framework7.request.get('partials/big-list.html', function(data) {
    Template7.registerPartial('big_list_partial', data);
});

Framework7.request.get('partials/small-list.html', function(data) {
    Template7.registerPartial('small_list_partial', data);
});

Framework7.request.get('partials/big-list-reverse.html', function(data) {
    Template7.registerPartial('big_list_reverse_partial', data);
});

Framework7.request.get('partials/small-list-reverse.html', function(data) {
    Template7.registerPartial('small_list_reverse_partial', data);
});

Framework7.request.get('partials/classic-card.html', function(data) {
    Template7.registerPartial('classic_card_partial', data);
});

Framework7.request.get('partials/classic-post.html', function(data) {
    Template7.registerPartial('classic_post_partial', data);
});

