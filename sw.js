self.addEventListener('install', e=>{
 e.waitUntil(caches.open('byo-v1').then(c=>c.addAll(['/MoonBets-1/'])));
});
self.addEventListener('fetch', e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
