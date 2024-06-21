import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 输出目录
    outDir: "dist",
  },
  server: {
    // 指定dev sever的端口号，默认为5173
    port: 3000,
    // 自动打开浏览器运行以下页面
    open: "/",
    // 设置反向代理
    proxy: {
      "/api": {
        target: "http://localhost/",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
});
