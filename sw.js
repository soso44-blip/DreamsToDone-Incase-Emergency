/* In Case — service worker
   Makes the binder work fully offline once installed, and installable as an
   app on the home screen. Bump CACHE whenever you change any shell file. */
var CACHE = "in-case-v1.5";
var SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png",
  "./apple-touch-icon.png",
  "./favicon-32.png"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      // Cache what we can; a single missing file must not fail the whole install.
      return Promise.all(SHELL.map(function(u){
        return c.add(u).catch(function(){});
      }));
    })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if(k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);
  if(url.origin !== self.location.origin) return; // never touch cross-origin

  // Navigations: serve the app shell so the binder opens offline.
  if(req.mode === "navigate"){
    e.respondWith(
      caches.match("./index.html").then(function(hit){
        return hit || fetch(req).catch(function(){ return caches.match("./"); });
      })
    );
    return;
  }

  // Everything else: cache first, fall back to network and cache the result.
  e.respondWith(
    caches.match(req).then(function(hit){
      if(hit) return hit;
      return fetch(req).then(function(res){
        if(res && res.status === 200 && res.type === "basic"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy); });
        }
        return res;
      }).catch(function(){ return hit; });
    })
  );
});
