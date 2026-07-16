const CACHE_NAME = "lorespan-v8.5.2";
const CORE = [
  "./", "./index.html", "./offline.html",
  "./lorespan-desk-room-v852.webp", "./manifest.webmanifest", "./magic-book-192-v2.png", "./magic-book-512.png",
  "./magic-book-maskable-192.png", "./magic-book-maskable-512.png", "./hero-top-blue-book.webp", "./library-hero.png", "./library-concept-shelf-v852.webp",
  "./cover-vantheir-clean-v852.webp", "./cover-hero-academia-v852.webp", "./cover-beastbound-clean-v852.webp", "./cover-tides-clean-v852.webp",
  "./cover-guild-clean-v852.webp", "./cover-starfall-v852.webp", "./cover-moonwake-v852.webp", "./cover-emberwake-v852.webp", "./cover-ironhaven-v852.webp", "./cover-veilwood-v852.webp"
];
self.addEventListener("install", event => {
  event.waitUntil((async()=>{
  const cache=await caches.open(CACHE_NAME);
  const results=await Promise.allSettled(CORE.map(async url=>{
    const response=await fetch(url,{cache:"reload"});
    if(!response.ok)throw new Error(`Failed to cache ${url}: ${response.status}`);
    await cache.put(url,response);
  }));
  const critical=["./index.html","./offline.html",
  "./lorespan-desk-room-v852.webp","./manifest.webmanifest"];
  const failedCritical=results.some((result,index)=>result.status==="rejected"&&critical.includes(CORE[index]));
  if(failedCritical)throw new Error("Critical offline files failed to cache");
  await self.skipWaiting();
})());
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("message", event => { if(event.data?.type === "SKIP_WAITING") self.skipWaiting(); });
self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if(event.request.mode === "navigate" || url.pathname.endsWith("/index.html")){
    event.respondWith(fetch(event.request, {cache:"no-store"}).then(response => {
      const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put("./index.html",copy)); return response;
    }).catch(async()=>await caches.match("./index.html")||caches.match("./offline.html")));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => {
    const network=fetch(event.request).then(response => {
      if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
      return response;
    });
    return cached || network.catch(async()=>await caches.match("./offline.html")||new Response("Offline",{status:504,statusText:"Offline"}));
  }));
});
