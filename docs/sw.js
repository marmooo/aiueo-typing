var CACHE_NAME="2023-06-22 01:40",urlsToCache=["/aiueo-typing/","/aiueo-typing/index.js","/aiueo-typing/mp3/bgm.mp3","/aiueo-typing/mp3/cat.mp3","/aiueo-typing/mp3/correct.mp3","/aiueo-typing/mp3/end.mp3","/aiueo-typing/mp3/keyboard.mp3","/aiueo-typing/favicon/favicon.svg","https://marmooo.github.io/fonts/textar-light.woff2","https://cdn.jsdelivr.net/npm/simple-keyboard@3.4.52/build/index.min.js"];self.addEventListener("install",function(a){a.waitUntil(caches.open(CACHE_NAME).then(function(a){return a.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b||fetch(a.request)}))}),self.addEventListener("activate",function(a){var b=[CACHE_NAME];a.waitUntil(caches.keys().then(function(a){return Promise.all(a.map(function(a){if(b.indexOf(a)===-1)return caches.delete(a)}))}))})