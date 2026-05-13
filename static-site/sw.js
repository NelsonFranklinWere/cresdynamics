// Service Worker for CRES Dynamics - Performance Optimization
const CACHE_NAME = 'cres-dynamics-v1.0.0';
const STATIC_CACHE = 'cres-static-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/solutions/seo-visibility',
  '/case-studies',
  '/insights',
  '/favicon.ico',
  '/logo.png',
  '/backround.png',
  '/_next/static/css/app/layout.css',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Handle different types of requests
  const url = new URL(event.request.url);

  // Cache static assets aggressively
  if (url.pathname.match(/\.(css|js|png|jpg|jpeg|webp|svg|ico|woff|woff2)$/)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((response) => {
          // Don't cache if not a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
    );
  }
  // For HTML pages, use network-first strategy
  else if (event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request).then((response) => {
        // Cache successful responses
        if (response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
    );
  }
});
