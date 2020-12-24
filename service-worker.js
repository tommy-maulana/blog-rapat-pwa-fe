// Import Workbox (https://developers.google.com/web/tools/workbox/)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

/*
  Precache Manifest
  Change revision as soon as file content changed
*/
self.__WB_MANIFEST = [
  {
    revision: '1',
    url: './css/framework7.bundle.min.css'
  },
  {
    revision: '1',
    url: './js/framework7.bundle.min.js'
  },
  {
    revision: '1',
    url: './css/app.css'
  },

  {
    revision: '1',
    url: './js/routes.js'
  },
  {
    revision: '1',
    url: './js/app.js'
  },

  // HTML
  {
    revision: '1',
    url: './index.html'
  },
  // Icons
  {
    revision: '1',
    url: './assets/icons/128x128.png'
  },
  {
    revision: '1',
    url: './assets/icons/144x144.png'
  },
  {
    revision: '1',
    url: './assets/icons/152x152.png'
  },
  {
    revision: '1',
    url: './assets/icons/192x192.png'
  },
  {
    revision: '1',
    url: './assets/icons/256x256.png'
  },
  {
    revision: '1',
    url: './assets/icons/512x512.png'
  },
  {
    revision: '1',
    url: './assets/icons/favicon.png'
  },
  {
    revision: '1',
    url: './assets/icons/apple-touch-icon.png'
  },
];

/*
  Enable precaching
  It is better to comment next line during development
*/
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);