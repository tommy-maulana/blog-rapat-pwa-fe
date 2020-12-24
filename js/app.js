'use strict';

// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
    id: '',
    root: '#app',
    theme: 'md',
    routes: routes,
	// Register service worker
	serviceWorker: {
		path: './service-worker.js',
	},
    view: {
        pushState: false,
        transition: 'f7-cover'
    },
    on: {
        pageInit: function(page) {
            feather.replace();
        }
    },
    init: false
});

if(allow_push) {
	window.OneSignal = window.OneSignal || [];
		OneSignal.push(function() {
		OneSignal.init({
			appId: push_app_id,
		});
	});

	OneSignal.push(["addListenerForNotificationOpened", function(event) {
		app.views.main.router.navigate('/single/'+ event.data.post_id +'');
	}]);
}


const poppinsObserver = new FontFaceObserver('Poppins');

Promise.all([
	poppinsObserver.load(),
]).then(function(){
	document.documentElement.className += " fonts-loaded";
});

// Get Footer

$$(document).on('page:init', function(e, page) {
    Framework7.request.get('templates/footer.html', function(data) {
        let footer_template = Template7.compile(data);
        let html = footer_template();
        $$('.press-footer-content').html(html);
        feather.replace();
    });
	
	// Icon switch
	if($$('body').hasClass('theme-dark')) {
		$$('.press-switch').html('<i data-feather="sun"></i>');
	} else {
		$$('.press-switch').html('<i data-feather="moon"></i>');
	}
});

// Single Page

$$(document).on('page:afterin', '.page[data-name="single"]', function(e, page) {
	
    let id = page.route.params.id;
    $$('.press-load-more-posts').show();

    wpapi.getPost(id, { _embed: 'author,wp:featuredmedia,wp:term' }).then(function(result) {

        let html = single_template(result);
        $$('.page-current #single-content').html(html);
        let src = $$('.page-current #single-content .press-single-the-content').find('a').addClass('link external');
        app.lazy.create('.page-current #single-content img.lazy');
        feather.replace();

        // Hide Comment form if comment status is closed
        if (result.post.comment_status == 'open') {
            $$('.page-current .press-comment-form').show();
        } else {
            $$('.press-comment-closed').show();
        }

        // Related posts
        let categories = result.post.categories[0];
		skeleton('.page-current #related-posts', 'big_list_reverse');
        loadPosts('html', '.page-current #related-posts', 'big_list_reverse', { '_embed': 'author,wp:featuredmedia,wp:term', 'per_page': related_nbr_posts, 'categories': categories, 'exclude': id });


        // Get comments
        wpapi.getComments({ 'post': id, 'per_page': comment_per_page }).then(function(result) {
            let comments = comments_template({ 'comments': result.comments, 'total': result.total });
            $$('.page-current #comments').show();
            $$('.page-current #comments .press-list-comments').html(comments);

            $$('.page-current #comments .press-nbr-comments-2').html(result.total + ' comments');
            $$('.page-current .press-nbr-comments span:first-child').html(result.total);

            $$("#meta-helper").attr('data-pages', result.total_pages);
            $$("#meta-helper").attr('data-page', 1);
            $$("#meta-helper").attr('data-post', id);
            app.lazy.create('.page-current #comments .press-list-comments img.lazy');
        });
		
		// Update Meta
		let media = "";
		if(result.post['_embedded']['wp:featuredmedia']) {
			media = result.post['_embedded']['wp:featuredmedia'][0].source_url;
		}
		
		$$('meta[property="og:url"]').attr('content', result.post.link);
		$$('meta[property="og:title"]').attr('content', result.post.title.rendered);
		$$('meta[property="og:description"]').attr('content', result.post.excerpt.rendered);
		$$('meta[property="og:image"]').attr('content', media);
		
		$$('meta[name="twitter:title"]').attr('content', result.post.title.rendered);
		$$('meta[name="twitter:description"]').attr('content', result.post.excerpt.rendered);
		$$('meta[name="twitter:image"]').attr('content', media);

    });

    // Clear Form
    var formData = {
        'author_name': '',
        'author_email': '',
        'content': '',
    }
    app.form.fillFromData('.page-current .press-comment-form form', formData);

});

// Blog Page

$$(document).on('page:afterin', '.page[data-name="blog"]', function(e, page) {
    let args = { '_embed': 'author,wp:featuredmedia,wp:term' };
    skeleton('#blog-1', 'modern_card');
    loadPosts('html', '#blog-1', 'modern_card', args, true);
    $$('.press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('#blog-1', 'modern_card', args);
    });
});

// Blog Page Style 2

$$(document).on('page:afterin', '.page[data-name="blog-2"]', function(e, page) {
    let args = { '_embed': 'author,wp:featuredmedia,wp:term' };
	skeleton('#blog-2', 'classic_card');
    loadPosts('html', '#blog-2', 'classic_card', args, true);
    $$('.press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('#blog-2', 'classic_card', args);
    });
});

// Blog Page Style 3

$$(document).on('page:afterin', '.page[data-name="blog-3"]', function(e, page) {
    let args = { '_embed': 'author,wp:featuredmedia,wp:term' };
	skeleton('#blog-3', 'classic_post');
    loadPosts('html', '#blog-3', 'classic_post', args, true);
    $$('.press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('#blog-3', 'classic_post', args);
    });
});

// Blog Page Style 4

$$(document).on('page:afterin', '.page[data-name="blog-4"]', function(e, page) {
    let args = { '_embed': 'author,wp:featuredmedia,wp:term' };
	skeleton('#blog-4', 'small_list');
    loadPosts('html', '#blog-4', 'small_list', args, true);
    $$('.press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('#blog-4', 'small_list', args);
    });
});

// Blog Page Style 5

$$(document).on('page:afterin', '.page[data-name="blog-5"]', function(e, page) {
    let args = { '_embed': 'author,wp:featuredmedia,wp:term' };
	skeleton('#blog-5', 'small_list_reverse');
    loadPosts('html', '#blog-5', 'small_list_reverse', args, true);
    $$('.press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('#blog-5', 'small_list_reverse', args);
    });
});

// Blog Page Style 6

$$(document).on('page:afterin', '.page[data-name="blog-6"]', function(e, page) {
    let args = { '_embed': 'author,wp:featuredmedia,wp:term' };
	skeleton('#blog-6', 'big_list');
    loadPosts('html', '#blog-6', 'big_list', args, true);
    $$('.press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('#blog-6', 'big_list', args);
    });
});

// Blog Page Style 7

$$(document).on('page:afterin', '.page[data-name="blog-7"]', function(e, page) {
    let args = { '_embed': 'author,wp:featuredmedia,wp:term' };
	skeleton('#blog-7', 'big_list_reverse');
    loadPosts('html', '#blog-7', 'big_list_reverse', args, true);
    $$('.press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('#blog-7', 'big_list_reverse', args);
    });
});

// Page Category

$$(document).on('page:init', '.page[data-name="category"]', function(e, page) {
	skeleton('.page-current #category-content', category_page_style);
});

$$(document).on('page:afterin', '.page[data-name="category"]', function(e, page) {
    $$('.press-load-more-posts').hide();
    let id = page.route.params.id;
    let args = { 'per_page': 10, '_embed': 'author,wp:featuredmedia,wp:term', 'categories': id };
	
    loadPosts('html', '.page-current #category-content', category_page_style, args, true);
    wpapi.getCategory(id, {}).then(function(result) {
        $$('.page-current #category-name').html(result.taxonomy_type + ': ' + result.taxonomy.name);
        $$('.page-current #category-description').html(result.taxonomy.description);
        $$('.press-load-more-posts').show();
    });
    $$('.page-current .press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('.page-current #category-content', category_page_style, args);
    });
});

// Page Tag

$$(document).on('page:init', '.page[data-name="tag"]', function(e, page) {
	skeleton('.page-current #tag-content', tag_page_style);
});

$$(document).on('page:afterin', '.page[data-name="tag"]', function(e, page) {
    $$('.press-load-more-posts').hide();
    let id = page.route.params.id;
    let args = { 'per_page': 10, '_embed': 'author,wp:featuredmedia,wp:term', 'tags': id };
	
	skeleton('.page-current #tag-content', tag_page_style);
    loadPosts('html', '.page-current #tag-content', tag_page_style, args, true);
    wpapi.getTag(id, {}).then(function(result) {
        $$('.page-current #tag-name').html(result.taxonomy_type + ': ' + result.taxonomy.name);
        $$('.page-current #tag-description').html(result.taxonomy.description);
        $$('.press-load-more-posts').show();
    });
    $$('.page-current .press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('.page-current #tag-content', tag_page_style, args);
    });
});

// Page Author

$$(document).on('page:init', '.page[data-name="author"]', function(e, page) {
	skeleton('.page-current #author-content', author_page_style);
});

$$(document).on('page:afterin', '.page[data-name="author"]', function(e, page) {
    $$('.press-load-more-posts').hide();
    let id = page.route.params.id;
    let args = { 'per_page': 10, '_embed': 'author,wp:featuredmedia,wp:term', 'authors': id };

    loadPosts('html', '.page-current #author-content', author_page_style, args, true);
    wpapi.getAuthor(id, {}).then(function(result) {
        $$('.page-current #author-name').html(result.taxonomy_type + ': ' + result.taxonomy.name);
        $$('.page-current #author-description').html(result.taxonomy.description);
        $$('.press-load-more-posts').show();
    });
    $$('.page-current .press-load-more-posts').on('click', function(evt) {
        evt.stopImmediatePropagation();
        loadMorePosts('.page-current #author-content', author_page_style, args);
    });
});

// Page Search

$$(document).on('page:afterin', '.page[data-name="search"]', function(e, page) {
    $$('input#search').on('keyup', function() {
        if (this.value.length < 3) return;
        let q = this.value;
        app.preloader.show();
        loadPosts('html', '.page-current #search-content', 'big_list_reverse', { 'search': q, '_embed': 'author,wp:featuredmedia,wp:term' }, true);
    });
});

// Page Page

$$(document).on('page:afterin', '.page[data-name="page"]', function(e, page) {
    let id = page.route.params.id;
    wpapi.getPage(id, {}).then(function(result) {
        let html = page_template(result);
        $$(".page-current #press-page-content").html(html);
    });
});

/** ************************** FUNCTIONS  ********************** **/


// Init The WP API
var wpapi = new WPAPI();

// Loading Icon Events
var loading = new Framework7.Events();
loading.on('loading', function() {
    app.preloader.hide();
});

// Function for Switching theme
function switchTheme(element) {
	if($$('body').hasClass('theme-dark')) {
		$$('body').removeClass('theme-dark');
		$$(element).html('<i data-feather="moon"></i>');
	} else {
		$$('body').addClass('theme-dark');
		$$(element).html('<i data-feather="sun"></i>');
	}
	feather.replace();
}

// Function To Load Skeletons

function skeleton(view, style) {
    let tmpl;
    switch (style) {
        case 'modern_card':
            tmpl = 'templates/skeleton/modern-card.html';
            break;
        case 'big_list':
            tmpl = 'templates/skeleton/big-list.html';
            break;
        case 'big_list_reverse':
            tmpl = 'templates/skeleton/big-list-reverse.html';
            break;
        case 'small_list':
            tmpl = 'templates/skeleton/small-list.html';
            break;
        case 'small_list_reverse':
            tmpl = 'templates/skeleton/small-list-reverse.html';
            break;
        case 'classic_card':
            tmpl = 'templates/skeleton/classic-card.html';
            break;
        case 'classic_post':
            tmpl = 'templates/skeleton/classic-post.html';
            break;
        case 'modern_card_small_list':
            tmpl = 'templates/skeleton/modern-card-small-list.html';
            break;
        case 'modern_card_small_list_reverse':
            tmpl = 'templates/skeleton/modern-card-small-list-reverse.html';
            break;
        case 'modern_card_big_list':
            tmpl = 'templates/skeleton/modern-card-big-list.html';
            break;
        case 'modern_card_big_list_reverse':
            tmpl = 'templates/skeleton/modern-card-big-list-reverse.html';
            break;
        case 'classic_card_small_list':
            tmpl = 'templates/skeleton/classic-card-small-list.html';
            break;
        case 'classic_card_small_list_reverse':
            tmpl = 'templates/skeleton/classic-card-small-list-reverse.html';
            break;
        case 'classic_card_big_list':
            tmpl = 'templates/skeleton/classic-card-big-list.html';
            break;
        case 'classic_card_big_list_reverse':
            tmpl = 'templates/skeleton/classic-card-big-list-reverse.html';
            break;
        case 'classic_post_small_list':
            tmpl = 'templates/skeleton/classic-post-small-list.html';
            break;
        case 'classic_post_small_list_reverse':
            tmpl = 'templates/skeleton/classic-post-small-list-reverse.html';
            break;
        case 'classic_post_big_list':
            tmpl = 'templates/skeleton/classic-post-big-list.html';
            break;
        case 'classic_post_big_list_reverse':
            tmpl = 'templates/skeleton/classic-post-big-list-reverse.html';
            break;
        case 'modern_card_slide':
            tmpl = 'templates/skeleton/modern-card-slide.html';
            break;
        case 'classic_card_slide':
            tmpl = 'templates/skeleton/classic-card-slide.html';
            break;
        case 'classic_post_slide':
            tmpl = 'templates/skeleton/classic-post-slide.html';
            break;
        default:
            tmpl = 'templates/skeleton/small-list.html';
    }

    Framework7.request.get(tmpl, function(data) {
        let template = Template7.compile(data);
        let html = template();
        $$(view).html(html);
    });
}

// Load new comments

function loadComment(element) {
    let pages = $$("#meta-helper").attr('data-pages');
    let page = parseInt($$("#meta-helper").attr('data-page')) + 1;
    let post = $$("#meta-helper").attr('data-post');
    app.preloader.show();

    if (page > pages) {
        loading.emit('loading');
        var toastTop = app.toast.create({
            text: no_more_comment_text,
            position: 'center',
            closeTimeout: 2000,
        });
        toastTop.open();
        $$(element).hide();

    } else {
        wpapi.getComments({ 'post': post, 'per_page': comment_per_page, 'page': page }).then(function(result) {
            let comments = comments_template({ 'comments': result.comments, 'total': result.total });
            $$('.page-current .press-list-comments').append(comments);
            $$("#meta-helper").attr('data-pages', result.total_pages);
            $$("#meta-helper").attr('data-page', page);
            $$("#meta-helper").attr('data-post', post);
            app.lazy.create('.page-current img.lazy');
            loading.emit('loading');
        });
    }
}

// Add new Comment

function addNewComment(element) {
    app.preloader.show();
    $$(element).attr('disabled', 'disabled');
    let post = $$("#meta-helper").attr('data-post');
    var formData = app.form.convertToData('.page-current .press-comment-form form');
    let args = JSON.stringify(formData);
    formData.post = post;
    wpapi.addComment(args).then(function(result) {
        if (result.code == 201) {
            var toastTop = app.toast.create({
                text: comment_waiting,
                position: 'center',
                closeTimeout: 2000,
            });
            $$(element).removeAttr('disabled');
            loading.emit('loading');
        } else {
            var toastTop = app.toast.create({
                text: result.data.message,
                position: 'center',
                closeTimeout: 2000,
            });
            $$(element).removeAttr('disabled');
            loading.emit('loading');
        }
        toastTop.open();
        loading.emit('loading');
    });
}

// Load Posts

function loadPosts(action, view, style, args, meta = false) {
    wpapi.getPosts(args).then(function(result) {
        let html;
        switch (style) {
            case 'modern_card':
                html = modern_card_template(result);
                break;
            case 'big_list':
                html = big_list_template(result);
                break;
            case 'big_list_reverse':
                html = big_list_reverse_template(result);
                break;
            case 'small_list':
                html = small_list_template(result);
                break;
            case 'small_list_reverse':
                html = small_list_reverse_template(result);
                break;
            case 'classic_card':
                html = classic_card_template(result);
                break;
            case 'classic_post':
                html = classic_post_template(result);
                break;
            case 'modern_card_small_list':
                html = modern_card_small_list_template(result);
                break;
            case 'modern_card_small_list_reverse':
                html = modern_card_small_list_reverse_template(result);
                break;
            case 'modern_card_big_list':
                html = modern_card_big_list_template(result);
                break;
            case 'modern_card_big_list_reverse':
                html = modern_card_big_list_reverse_template(result);
                break;
            case 'classic_card_small_list':
                html = classic_card_small_list_template(result);
                break;
            case 'classic_card_small_list_reverse':
                html = classic_card_small_list_reverse_template(result);
                break;
            case 'classic_card_big_list':
                html = classic_card_big_list_template(result);
                break;
            case 'classic_card_big_list_reverse':
                html = classic_card_big_list_reverse_template(result);
                break;
            case 'classic_post_small_list':
                html = classic_post_small_list_template(result);
                break;
            case 'classic_post_small_list_reverse':
                html = classic_post_small_list_reverse_template(result);
                break;
            case 'classic_post_big_list':
                html = classic_post_big_list_template(result);
                break;
            case 'classic_post_big_list_reverse':
                html = classic_post_big_list_reverse_template(result);
                break;
			case 'modern_card_slide':
                html = modern_card_slide_template(result);
				modernCardSlide(view, html);
				return;
                break;
			case 'classic_card_slide':
                html = classic_card_slide_template(result);
				classicCardSlide(view, html);
				return;
                break;
			case 'classic_post_slide':
                html = classic_post_slide_template(result);
				classicPostSlide(view, html);
				return;
                break;
            default:
                html = modern_card_template(result);
        }
        $$(view)[action](html);
        app.lazy.create(view + ' img.lazy');
        if (meta) {
            $$('#meta-helper').attr('data-pages', result.total_pages);
            $$('#meta-helper').attr('data-page', 1);
        }
        loading.emit('loading');
        $$('.press-load-more-posts').show();
    });
}

// Load More Posts

function loadMorePosts(view, style, args) {
    let pages = $$("#meta-helper").attr('data-pages');
    let page = parseInt($$("#meta-helper").attr('data-page')) + 1;
    app.preloader.show();

    if (page > pages) {
        loading.emit('loading');
        var toastTop = app.toast.create({
            text: no_more_posts,
            position: 'center',
            closeTimeout: 2000,
        });
        toastTop.open();
        $$('.press-load-more-posts').hide();

    } else {
        $$("#meta-helper").attr('data-page', page);
        args.page = page;
        loadPosts('append', view, style, args, false);
    }
}

// Most Viewed Posts

function mostViewed(per_page, view, style) {
	wpapi.getMostViewed(per_page).then(function(result) {
        let html;
        switch (style) {
            case 'modern_card':
                html = modern_card_template(result);
                break;
            case 'big_list':
                html = big_list_template(result);
                break;
            case 'big_list_reverse':
                html = big_list_reverse_template(result);
                break;
            case 'small_list':
                html = small_list_template(result);
                break;
            case 'small_list_reverse':
                html = small_list_reverse_template(result);
                break;
            case 'classic_card':
                html = classic_card_template(result);
                break;
            case 'classic_post':
                html = classic_post_template(result);
                break;
            case 'modern_card_small_list':
                html = modern_card_small_list_template(result);
                break;
            case 'modern_card_small_list_reverse':
                html = modern_card_small_list_reverse_template(result);
                break;
            case 'modern_card_big_list':
                html = modern_card_big_list_template(result);
                break;
            case 'modern_card_big_list_reverse':
                html = modern_card_big_list_reverse_template(result);
                break;
            case 'classic_card_small_list':
                html = classic_card_small_list_template(result);
                break;
            case 'classic_card_small_list_reverse':
                html = classic_card_small_list_reverse_template(result);
                break;
            case 'classic_card_big_list':
                html = classic_card_big_list_template(result);
                break;
            case 'classic_card_big_list_reverse':
                html = classic_card_big_list_reverse_template(result);
                break;
            case 'classic_post_small_list':
                html = classic_post_small_list_template(result);
                break;
            case 'classic_post_small_list_reverse':
                html = classic_post_small_list_reverse_template(result);
                break;
            case 'classic_post_big_list':
                html = classic_post_big_list_template(result);
                break;
            case 'classic_post_big_list_reverse':
                html = classic_post_big_list_reverse_template(result);
                break;
			case 'modern_card_slide':
                html = modern_card_slide_template(result);
				modernCardSlide(view, html);
				return;
                break;
			case 'classic_card_slide':
                html = classic_card_slide_template(result);
				classicCardSlide(view, html);
				return;
                break;
			case 'classic_post_slide':
                html = classic_post_slide_template(result);
				classicPostSlide(view, html);
				return;
                break;
            default:
                html = modern_card_template(result);
        }
        $$(view).html(html);
        app.lazy.create(view + ' img.lazy');
    });
}

// Most Commented Posts

function mostCommented(per_page, view, style) {
	wpapi.getMostCommented(per_page).then(function(result) {
        let html;
        switch (style) {
            case 'modern_card':
                html = modern_card_template(result);
                break;
            case 'big_list':
                html = big_list_template(result);
                break;
            case 'big_list_reverse':
                html = big_list_reverse_template(result);
                break;
            case 'small_list':
                html = small_list_template(result);
                break;
            case 'small_list_reverse':
                html = small_list_reverse_template(result);
                break;
            case 'classic_card':
                html = classic_card_template(result);
                break;
            case 'classic_post':
                html = classic_post_template(result);
                break;
            case 'modern_card_small_list':
                html = modern_card_small_list_template(result);
                break;
            case 'modern_card_small_list_reverse':
                html = modern_card_small_list_reverse_template(result);
                break;
            case 'modern_card_big_list':
                html = modern_card_big_list_template(result);
                break;
            case 'modern_card_big_list_reverse':
                html = modern_card_big_list_reverse_template(result);
                break;
            case 'classic_card_small_list':
                html = classic_card_small_list_template(result);
                break;
            case 'classic_card_small_list_reverse':
                html = classic_card_small_list_reverse_template(result);
                break;
            case 'classic_card_big_list':
                html = classic_card_big_list_template(result);
                break;
            case 'classic_card_big_list_reverse':
                html = classic_card_big_list_reverse_template(result);
                break;
            case 'classic_post_small_list':
                html = classic_post_small_list_template(result);
                break;
            case 'classic_post_small_list_reverse':
                html = classic_post_small_list_reverse_template(result);
                break;
            case 'classic_post_big_list':
                html = classic_post_big_list_template(result);
                break;
            case 'classic_post_big_list_reverse':
                html = classic_post_big_list_reverse_template(result);
                break;
			case 'modern_card_slide':
                html = modern_card_slide_template(result);
				modernCardSlide(view, html);
				return;
                break;
			case 'classic_card_slide':
                html = classic_card_slide_template(result);
				classicCardSlide(view, html);
				return;
                break;
			case 'classic_post_slide':
                html = classic_post_slide_template(result);
				classicPostSlide(view, html);
				return;
                break;
            default:
                html = modern_card_template(result);
        }
        $$(view).html(html);
        app.lazy.create(view + ' img.lazy');
    });
}

// Modern Card Slide Style

function modernCardSlide(view, html) {
	
	$$(view).html(html);
	app.swiper.destroy(view + ' .swiper-container');
	app.swiper.create(view + ' .swiper-container', {
		speed: 400,
		spaceBetween: 10,
		slidesPerView: "1",
		loop: true,
		breakpoints: {
			320: {
				"slidesPerView": "1.1"
			},
			400: {
				"slidesPerView": "1.2"
			},
			768: {
				"slidesPerView": "2.3"
			},
			1024: {
				"slidesPerView": "3.5"
			},
			600: {
				"slidesPerView": "2.2"
			},
			240: {
				"slidesPerView": "1.1"
			},
			834: {
				"slidesPerView": "3.1"
			},
			1920: {
				"slidesPerView": "6.3"
			},
			360: {
				"slidesPerView": "1.1"
			},
			576: {
				"slidesPerView": "2.2"
			},
			1440: {
				"slidesPerView": "5.3"
			},
			1280: {
				"slidesPerView": "4.3"
			},
			800: {
				"slidesPerView": "2.3"
			},
			375: {
				"slidesPerView": "1.25"
			}
		},
	});
	app.lazy.create(view + ' img.lazy');
}

// Classic Card Slide Style

function classicCardSlide(view, html) {
	$$(view).html(html);
	app.swiper.destroy(view + ' .swiper-container');
	app.swiper.create(view + ' .swiper-container', {
		speed: 400,
		spaceBetween: 10,
		slidesPerView: "1",
		loop: true,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			400: {
				"slidesPerView": "1.1"
			},
			576: {
				"slidesPerView": "2.2"
			},
			600: {
				"slidesPerView": "2.2"
			},
			768: {
				"slidesPerView": "2.2"
			},
			800: {
				"slidesPerView": "2.2"
			},
			834: {
				"slidesPerView": "2.5"
			},
			1024: {
				"slidesPerView": "3.5"
			},
			1280: {
				"slidesPerView": "4.3"
			},
			1440: {
				"slidesPerView": "5.3"
			},
			1920: {
				"slidesPerView": "6.3"
			},
		},
	});
	app.lazy.create(view + ' img.lazy');
}

// Classic Post Slide Style

function classicPostSlide(view, html) {
	$$(view).html(html);
	app.swiper.destroy(view + ' .swiper-container');
	app.swiper.create(view + ' .swiper-container', {
		speed: 400,
		spaceBetween: 10,
		slidesPerView: "1",
		loop: true,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			400: {
				"slidesPerView": "1.1"
			},
			576: {
				"slidesPerView": "2.2"
			},
			600: {
				"slidesPerView": "2.2"
			},
			768: {
				"slidesPerView": "2.1"
			},
			800: {
				"slidesPerView": "2.1"
			},
			834: {
				"slidesPerView": "2.2"
			},
			1024: {
				"slidesPerView": "3.5"
			},
			1280: {
				"slidesPerView": "4.3"
			},
			1440: {
				"slidesPerView": "5.3"
			},
			1920: {
				"slidesPerView": "6.3"
			},
		},
	});
	app.lazy.create(view + ' img.lazy');
}