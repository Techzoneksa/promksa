self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("prominent-v1").then((cache) => {
      return cache.addAll(["/", "/manifest.webmanifest"]);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/api")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        if (url.pathname.startsWith("/_next/static") || url.pathname.startsWith("/images/")) {
          const clone = response.clone();
          caches.open("prominent-v1").then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => caches.match("/")),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== "prominent-v1").map((n) => caches.delete(n))),
    ),
  );
});
