const CACHE_NAME = "lunch-code-v16";
const urlsToCache = [
  "/lunch/",
  "/lunch/index.html",
  "/lunch/manifest.json",
  "/lunch/sw.js",
  "/lunch/icon-40.png",
  "/lunch/audio/zero.mp3",
  "/lunch/audio/one.mp3",
  "/lunch/audio/two.mp3",
  "/lunch/audio/three.mp3",
  "/lunch/audio/four.mp3",
  "/lunch/audio/five.mp3",
  "/lunch/audio/six.mp3",
  "/lunch/audio/seven.mp3",
  "/lunch/audio/eight.mp3",
  "/lunch/audio/nine.mp3",
  "/lunch/audio/win.mp3",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  // Only handle HTTP/HTTPS requests, ignore chrome-extension and other schemes
  if (!event.request.url.startsWith("http")) {
    return;
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      })
      .catch(() => {
        if (event.request.destination === "document") {
          return caches.match("/lunch/index.html");
        }
      }),
  );
});
