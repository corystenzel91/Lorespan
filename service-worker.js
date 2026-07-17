const CACHE_PREFIX = "lorespan-";
const CACHE_NAME = "lorespan-v8.6.3";
const CORE = [
  "./", "./index.html", "./offline.html", "./manifest.webmanifest",
  "./library-concept-shelf-v863.webp", "./lorespan-desk-room-v863.webp",
  "./magic-book-192-v2.png", "./magic-book-512.png",
  "./magic-book-maskable-192.png", "./magic-book-maskable-512.png",
  "./hero-top-blue-book.webp", "./hero-book-v512-clean.webp", "./library-hero.png", "./lorespan-home.webp",
  "./cover-vantheir-clean-v863.webp", "./cover-hero-academia-v863.webp",
  "./cover-beastbound-clean-v863.webp", "./cover-tides-clean-v863.webp",
  "./cover-guild-clean-v863.webp", "./cover-starfall-v863.webp",
  "./cover-moonwake-v863.webp", "./cover-emberwake-v863.webp",
  "./cover-ironhaven-v863.webp", "./cover-veilwood-v863.webp"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const results = await Promise.allSettled(CORE.map(async url => {
      const response = await fetch(url, {cache: "reload"});
      if (!response.ok) throw new Error(`Failed to cache ${url}: ${response.status}`);
      await cache.put(url, response);
    }));
    const failed = results.filter(result => result.status === "rejected");
    if (failed.length) throw new Error(`${failed.length} required Lorespan files failed to cache`);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("message", event => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
  if (event.data?.type === "CLEAR_OLD_LORESPAN_CACHES") {
    event.waitUntil(caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key))
    )));
  }
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (event.request.mode === "navigate" || url.pathname.endsWith("/index.html")) {
    event.respondWith(fetch(event.request, {cache: "no-store"}).then(response => {
      if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put("./index.html", response.clone()));
      return response;
    }).catch(async () => await caches.match("./index.html") || caches.match("./offline.html")));
    return;
  }
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    const networkPromise = fetch(event.request, {cache: "no-cache"}).then(response => {
      if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
      return response;
    });
    return cached || networkPromise.catch(async () => await caches.match("./offline.html") || new Response("Offline", {status: 504}));
  })());
});
