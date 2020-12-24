'use strict';

var routes = [
    // Index page
    {
        path: '/',
        url: './index.html',
        name: 'home',
    },
    // Homepage 2
    {
        path: '/home-2/',
        url: './pages/home-2.html',
        name: 'home-2',
    },
    // Homepage 3
    {
        path: '/home-3/',
        url: './pages/home-3.html',
        name: 'home-3',
    },
    // Homepage 4
    {
        path: '/home-4/',
        url: './pages/home-4.html',
        name: 'home-4',
    },
    // Homepage 5
    {
        path: '/home-5/',
        url: './pages/home-5.html',
        name: 'home-5',
    },
    // Homepage 6
    {
        path: '/home-6/',
        url: './pages/home-6.html',
        name: 'home-6',
    },
    // Homepage 7
    {
        path: '/home-7/',
        url: './pages/home-7.html',
        name: 'home-7',
    },
	// Homepage 8
    {
        path: '/home-8/',
        url: './pages/home-8.html',
        name: 'home-8',
    },
	// Homepage 9
    {
        path: '/home-9/',
        url: './pages/home-9.html',
        name: 'home-9',
    },
	// Homepage 10
    {
        path: '/home-10/',
        url: './pages/home-10.html',
        name: 'home-10',
    },
    // Single
    {
        path: '/single/:id',
        url: './pages/single.html',
        name: 'single',
    },
    // Blogs
    {
        path: '/blog/',
        url: './pages/blog.html',
        name: 'blog',
    },
    {
        path: '/blog-2/',
        url: './pages/blog-2.html',
        name: 'blog-2',
    },
    {
        path: '/blog-3/',
        url: './pages/blog-3.html',
        name: 'blog-3',
    },
    {
        path: '/blog-4/',
        url: './pages/blog-4.html',
        name: 'blog-4',
    },
    {
        path: '/blog-5/',
        url: './pages/blog-5.html',
        name: 'blog-5',
    },
    {
        path: '/blog-6/',
        url: './pages/blog-6.html',
        name: 'blog-6',
    },
    {
        path: '/blog-7/',
        url: './pages/blog-7.html',
        name: 'blog-7',
    },
    // Category
    {
        path: '/category/:id',
        url: './pages/category.html',
        name: 'category',
    },
    // Tag
    {
        path: '/tag/:id',
        url: './pages/tag.html',
        name: 'tag',
    },
    // Author
    {
        path: '/author/:id',
        url: './pages/author.html',
        name: 'author',
    },
    // Search
    {
        path: '/search',
        url: './pages/search.html',
        name: 'search',
    },
	// Page
    {
        path: '/page/:id',
        url: './pages/page.html',
        name: 'page',
    },
    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        url: './pages/404.html',
    },

];