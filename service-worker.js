
/**
 * Service Worker for PWA functionality
 * Enables offline access and installation
 */

// Cache name version
const CACHE_NAME = 'portfolio-v1';

// Files to cache
const filesToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/js/3d-animation.js',
  '/js/typewriter.js',
  '/js/particles.js',
  '/js/custom-cursor.js',
  '/manifest.json',
  '/lovable-uploads/1e89e731-c5e8-44e6-9116-0776cb50e99a.png',
  '/lovable-uploads/25edd7ef-80b5-407b-82b1-97846ad4ac55.png',
  '/lovable-uploads/172f9e44-fdbd-4fee-ae06-c5c47ac1e82d.png',
  '/lovable-uploads/44519701-15af-4fa1-ba72-faea0b8a24eb.png',
  '/lovable-uploads/56d02a3c-f858-4f14-a715-d650b22d4e9b.png',
  '/lovable-uploads/60b9d967-8f7b-47c2-89e6-55ce3aeaefed.png',
  '/lovable-uploads/ea2ac6fa-e375-402e-9e39-4cfac564ec27.png',
  '/lovable-uploads/ea36f03d-5995-4f43-8fcd-97be89bfa083.png'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(filesToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from cache
        if (response) {
          return response;
        }
        
        // Clone the request - request is a stream and can only be consumed once
        const fetchRequest = event.request.clone();
        
        // Try to fetch from network and cache the response
        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response - response is a stream and can only be consumed once
          const responseToCache = response.clone();
          
          // Open cache and store response
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
            
          return response;
        })
        .catch(() => {
          // Return fallback page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
          
          // Return nothing for other failed requests
          return;
        });
      })
  );
});
