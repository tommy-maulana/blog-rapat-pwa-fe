'use strict';

function WPAPI() {}

WPAPI.prototype.getPosts = async function(args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'posts?' + params.toString());
    let data = await response.json();
    return { 'total_pages': response.headers.get('X-WP-TotalPages'), 'total': response.headers.get('X-WP-Total'), 'posts': data };
};

WPAPI.prototype.getMostViewed = async function(per_page) {
	let args = {'post_type': 'post', 'posts_per_page': per_page, '_embed': 'author,wp:featuredmedia,wp:term', 'meta_key': 'pressmag_post_views_count', 'orderby': 'meta_value_num' };
    let params = new URLSearchParams(args);
    let response = await fetch(baseURL + '/wp-json/wp_query/args?' + params.toString());
    let data = await response.json();
    return { 'posts': data };
};

WPAPI.prototype.getMostCommented = async function(per_page) {
	let args = {'post_type': 'post', 'posts_per_page': per_page, '_embed': 'author,wp:featuredmedia,wp:term', 'orderby': 'comment_count' };
    let params = new URLSearchParams(args);
    let response = await fetch(baseURL + '/wp-json/wp_query/args?' + params.toString());
    let data = await response.json();
    return { 'posts': data };
};


WPAPI.prototype.getPost = async function(id, args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'posts/' + id + '?' + params.toString());
    let data = await response.json();
    return { 'post': data };
};

WPAPI.prototype.getAuthors = async function(args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'users?' + params.toString());
    let data = await response.json();
    return { 'total_pages': response.headers.get('X-WP-TotalPages'), 'total': response.headers.get('X-WP-Total'), 'authors': data };
};

WPAPI.prototype.getAuthor = async function(id, args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'users/' + id + '?' + params.toString());
    let data = await response.json();
    return { 'taxonomy_type': 'Author', 'taxonomy': data };
};

WPAPI.prototype.getCategories = async function(args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'categories?' + params.toString());
    let data = await response.json();
    return { 'total_pages': response.headers.get('X-WP-TotalPages'), 'total': response.headers.get('X-WP-Total'), 'categories': data };
};

WPAPI.prototype.getCategory = async function(id, args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'categories/' + id + '?' + params.toString());
    let data = await response.json();
    return { 'taxonomy_type': 'Category', 'taxonomy': data };
};

WPAPI.prototype.getTags = async function(args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'tags?' + params.toString());
    let data = await response.json();
    return { 'total_pages': response.headers.get('X-WP-TotalPages'), 'total': response.headers.get('X-WP-Total'), 'tags': data };
};

WPAPI.prototype.getTag = async function(id, args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'tags/' + id + '?' + params.toString());
    let data = await response.json();
    return { 'taxonomy_type': 'Tag', 'taxonomy': data };
};

WPAPI.prototype.getComments = async function(args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'comments?' + params.toString());
    let data = await response.json();
    return { 'post_id': args.post, 'total_pages': response.headers.get('X-WP-TotalPages'), 'total': response.headers.get('X-WP-Total'), 'comments': data };
};

WPAPI.prototype.addComment = async function(args) {
    const response = await fetch(mainURL + 'comments', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: args,
    });
    let data = await response.json();
    return { 'code': response.status, 'data': data };
};

WPAPI.prototype.getPage = async function(id, args) {
    let params = new URLSearchParams(args);
    let response = await fetch(mainURL + 'pages/' + id + '?' + params.toString());
    let data = await response.json();
    return { 'page': data };
};