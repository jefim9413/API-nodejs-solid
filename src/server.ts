import { app } from "./app";
import { env } from "./env/endex";

app.listen({
    port: env.PORT,
}).then(() => {
    console.log("🚀 HTPP Rerver Running 🚀")
})