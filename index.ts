import { $ } from "./src/util/el.ts"

const regs = await navigator.serviceWorker.getRegistrations()

await Promise.all(regs.map(reg => reg.unregister()))

const reg = await navigator.serviceWorker.register(
    "worker.ts",
    {
        type: "module",
        scope: "./",
    },
)

console.log(reg)

document.body.append(
    $.button({ $click: () => reg.update() }, "update worker")
)
