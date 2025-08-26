const reg = await navigator.serviceWorker.register(
    "worker.ts",
    { scope: "./" },
)

console.log(reg)
