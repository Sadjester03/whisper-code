const cacheName = 'whisper-cache-v1';
const assets = [
  '/',
  'index.html',
  'manifest.json',
  'sw.js',
  'https://cdn-icons-png.flaticon.com/512/3208/3208707.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
