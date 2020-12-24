'use strict';

let modern_card_template = '';
Framework7.request.get('templates/modern-card.html', function(data) {
    modern_card_template = Template7.compile(data);
});

let big_list_template = '';
Framework7.request.get('templates/big-list.html', function(data) {
    big_list_template = Template7.compile(data);
});

let big_list_reverse_template = '';
Framework7.request.get('templates/big-list-reverse.html', function(data) {
    big_list_reverse_template = Template7.compile(data);
});

let small_list_template = '';
Framework7.request.get('templates/small-list.html', function(data) {
    small_list_template = Template7.compile(data);
});

let small_list_reverse_template = '';
Framework7.request.get('templates/small-list-reverse.html', function(data) {
    small_list_reverse_template = Template7.compile(data);
});

let classic_card_template = '';
Framework7.request.get('templates/classic-card.html', function(data) {
    classic_card_template = Template7.compile(data);
});

let classic_post_template = '';
Framework7.request.get('templates/classic-post.html', function(data) {
    classic_post_template = Template7.compile(data);
});

let modern_card_small_list_template = '';
Framework7.request.get('templates/modern-card-small-list.html', function(data) {
    modern_card_small_list_template = Template7.compile(data);
});

let modern_card_small_list_reverse_template = '';
Framework7.request.get('templates/modern-card-small-list-reverse.html', function(data) {
    modern_card_small_list_reverse_template = Template7.compile(data);
});

let modern_card_big_list_template = '';
Framework7.request.get('templates/modern-card-big-list.html', function(data) {
    modern_card_big_list_template = Template7.compile(data);
});

let modern_card_big_list_reverse_template = '';
Framework7.request.get('templates/modern-card-big-list-reverse.html', function(data) {
    modern_card_big_list_reverse_template = Template7.compile(data);
});

let classic_card_big_list_template = '';
Framework7.request.get('templates/classic-card-big-list.html', function(data) {
    classic_card_big_list_template = Template7.compile(data);
});

let classic_card_big_list_reverse_template = '';
Framework7.request.get('templates/classic-card-big-list-reverse.html', function(data) {
    classic_card_big_list_reverse_template = Template7.compile(data);
});

let classic_card_small_list_template = '';
Framework7.request.get('templates/classic-card-small-list.html', function(data) {
    classic_card_small_list_template = Template7.compile(data);
});

let classic_card_small_list_reverse_template = '';
Framework7.request.get('templates/classic-card-small-list-reverse.html', function(data) {
    classic_card_small_list_reverse_template = Template7.compile(data);
});

let classic_post_big_list_template = '';
Framework7.request.get('templates/classic-post-big-list.html', function(data) {
    classic_post_big_list_template = Template7.compile(data);
});

let classic_post_big_list_reverse_template = '';
Framework7.request.get('templates/classic-post-big-list-reverse.html', function(data) {
    classic_post_big_list_reverse_template = Template7.compile(data);
});

let classic_post_small_list_template = '';
Framework7.request.get('templates/classic-post-small-list.html', function(data) {
    classic_post_small_list_template = Template7.compile(data);
});

let classic_post_small_list_reverse_template = '';
Framework7.request.get('templates/classic-post-small-list-reverse.html', function(data) {
    classic_post_small_list_reverse_template = Template7.compile(data);
});

/* Slides */

let modern_card_slide_template = '';
Framework7.request.get('templates/modern-card-slide.html', function(data) {
    modern_card_slide_template = Template7.compile(data);
});

let classic_card_slide_template = '';
Framework7.request.get('templates/classic-card-slide.html', function(data) {
    classic_card_slide_template = Template7.compile(data);
});

let classic_post_slide_template = '';
Framework7.request.get('templates/classic-post-slide.html', function(data) {
    classic_post_slide_template = Template7.compile(data);
});

/* Pages */

let single_template = '';
Framework7.request.get('templates/single.html', function(data) {
    single_template = Template7.compile(data);
});

let comments_template = '';
Framework7.request.get('templates/comments.html', function(data) {
    comments_template = Template7.compile(data);
});

let page_template = '';
Framework7.request.get('templates/page.html', function(data) {
    page_template = Template7.compile(data);
});
