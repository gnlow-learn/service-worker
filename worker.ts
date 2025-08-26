declare let self: ServiceWorkerGlobalScope

self.addEventListener("fetch", e => {
    console.log("fetched!", e.request)
    // e.respondWith(new Response("hi"))
})
