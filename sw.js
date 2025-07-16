self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('av-toolkit-cache-v1').then((cache) => {
      return cache.addAll([
        '.',  // Caches the root (index.html)
        'index.html',
        // Add any other files like icons, if separate CSS/JS exists, add their paths here
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
