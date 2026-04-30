import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  cloudflare: false,
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [nitro({ preset: "vercel" } as any)],
  },
});
