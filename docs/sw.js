const CACHE_NAME="2023-08-13 09:30",urlsToCache=["/aiueo-typing/","/aiueo-typing/index.js","/aiueo-typing/mp3/bgm.mp3","/aiueo-typing/mp3/cat.mp3","/aiueo-typing/mp3/correct.mp3","/aiueo-typing/mp3/end.mp3","/aiueo-typing/mp3/keyboard.mp3","/aiueo-typing/favicon/favicon.svg","https://marmooo.github.io/fonts/textar-light.woff2","https://cdn.jsdelivr.net/npm/simple-keyboard@3.4.52/build/index.min.js"];self.addEventListener("install",a=>{a.waitUntil(caches.open(CACHE_NAME).then(a=>a.addAll(urlsToCache)))}),self.addEventListener("fetch",a=>{a.respondWith(caches.match(a.request).then(b=>b||fetch(a.request)))}),self.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(a=>Promise.all(a.filter(a=>a!==CACHE_NAME).map(a=>caches.delete(a)))))})