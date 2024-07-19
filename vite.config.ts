import { crx, defineManifest } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

const manifest = defineManifest({
  name: "Hide X Cursor",
  version: "0.1.1",
  manifest_version: 3,
  icons: {
    "16": "icons/icon.png",
    "48": "icons/icon.png",
    "128": "icons/icon.png",
  },
  description:
    "X（旧Twitter）の動画上で一定時間マウスを動かしていないとき、カーソルを非表示にします。",
  content_scripts: [
    {
      matches: ["https://x.com/*", "https://twitter.com/*"],
      js: ["src/content-script.ts"],
    },
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
