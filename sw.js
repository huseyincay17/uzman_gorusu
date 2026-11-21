const CACHE_NAME = 'chroma-key-eval-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './001.png', './002.png', './003.png', './004.png', './005.png',
  './006.png', './007.png', './008.png', './009.png', './010.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
