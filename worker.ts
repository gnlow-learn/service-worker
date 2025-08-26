import { Hono } from "https://esm.sh/hono@4.9.4"
import { fire } from "https://esm.sh/hono@4.9.4/service-worker"

const app = new Hono()

app.get("/", c => c.text("hi"))

fire(app)
