'use strict';

$$(document).on('page:init', '.page[data-name="home"]', function(e, page) {
    skeleton('#section-content-1', 'modern_card_slide');
    skeleton('#section-content-2', 'big_list_reverse');
    skeleton('#section-content-3', 'modern_card_small_list');
	
    loadPosts('html', '#section-content-1', 'modern_card_slide', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 5 });
	mostViewed(4, '#section-content-2', 'big_list_reverse');
	mostCommented(4, '#section-content-3', 'modern_card_small_list');
	
});

$$(document).on('page:init', '.page[data-name="home-2"]', function(e, page) {
	skeleton('#section-content-4', 'classic_card_slide');
	skeleton('#section-content-5', 'small_list');
	skeleton('#section-content-6', 'big_list_reverse');
	
	mostViewed(5, '#section-content-4', 'classic_card_slide');
    loadPosts('html', '#section-content-5', 'small_list', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
	mostCommented(3, '#section-content-6', 'big_list_reverse');
	
});

$$(document).on('page:init', '.page[data-name="home-3"]', function(e, page) {
	skeleton('#section-content-7', 'big_list');
	skeleton('#section-content-8', 'modern_card_slide');
	skeleton('#section-content-9', 'classic_post');
	
    loadPosts('html', '#section-content-7', 'big_list', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
    loadPosts('html', '#section-content-8', 'modern_card_slide', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 5 });
    loadPosts('html', '#section-content-9', 'classic_post', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
});

$$(document).on('page:init', '.page[data-name="home-4"]', function(e, page) {
	skeleton('#section-content-10', 'modern_card');
	skeleton('#section-content-11', 'classic_card_slide');
	skeleton('#section-content-12', 'big_list');
	
    loadPosts('html', '#section-content-10', 'modern_card', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 3 });
    loadPosts('html', '#section-content-11', 'classic_card_slide', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 5 });
    loadPosts('html', '#section-content-12', 'big_list', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
});

$$(document).on('page:init', '.page[data-name="home-5"]', function(e, page) {
	skeleton('#section-content-13', 'classic_card');
	skeleton('#section-content-14', 'modern_card_slide');
	skeleton('#section-content-15', 'small_list_reverse');
	
    loadPosts('html', '#section-content-13', 'classic_card', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 3 });
    loadPosts('html', '#section-content-14', 'modern_card_slide', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 5 });
    loadPosts('html', '#section-content-15', 'small_list_reverse', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
});

$$(document).on('page:init', '.page[data-name="home-6"]', function(e, page) {
	skeleton('#section-content-16', 'classic_card_small_list');
	skeleton('#section-content-17', 'classic_post_slide');
	skeleton('#section-content-18', 'big_list_reverse');
	
    loadPosts('html', '#section-content-16', 'classic_card_small_list', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
	loadPosts('html', '#section-content-17', 'classic_post_slide', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 5 });
    loadPosts('html', '#section-content-18', 'big_list_reverse', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
});

$$(document).on('page:init', '.page[data-name="home-7"]', function(e, page) {
	skeleton('#section-content-19', 'classic_post_small_list');
	skeleton('#section-content-20', 'modern_card_slide');
	skeleton('#section-content-21', 'classic_card_small_list');
	
    loadPosts('html', '#section-content-19', 'classic_post_small_list', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
    loadPosts('html', '#section-content-20', 'modern_card_slide', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 5 });
    loadPosts('html', '#section-content-21', 'classic_card_small_list', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
});

$$(document).on('page:init', '.page[data-name="home-8"]', function(e, page) {
	skeleton('#section-content-22', 'classic_card_big_list');
	skeleton('#section-content-23', 'classic_post_small_list_reverse');
	skeleton('#section-content-24', 'modern_card_small_list_reverse');
	
    loadPosts('html', '#section-content-22', 'classic_card_big_list', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
    loadPosts('html', '#section-content-23', 'classic_post_small_list_reverse', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
    loadPosts('html', '#section-content-24', 'modern_card_small_list_reverse', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
});

$$(document).on('page:init', '.page[data-name="home-9"]', function(e, page) {
	skeleton('#section-content-25', 'classic_card_small_list_reverse');
	skeleton('#section-content-26', 'classic_post_big_list');
	skeleton('#section-content-27', 'modern_card_big_list');
	
    loadPosts('html', '#section-content-25', 'classic_card_small_list_reverse', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
    loadPosts('html', '#section-content-26', 'classic_post_big_list', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
    loadPosts('html', '#section-content-27', 'modern_card_big_list', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
});

$$(document).on('page:init', '.page[data-name="home-10"]', function(e, page) {
	skeleton('#section-content-28', 'classic_card_big_list_reverse');
	skeleton('#section-content-29', 'classic_post_big_list_reverse');
	skeleton('#section-content-30', 'modern_card_big_list_reverse');
	
    loadPosts('html', '#section-content-28', 'classic_card_big_list_reverse', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
    loadPosts('html', '#section-content-29', 'classic_post_big_list_reverse', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
    loadPosts('html', '#section-content-30', 'modern_card_big_list_reverse', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': 4 });
});


app.init();