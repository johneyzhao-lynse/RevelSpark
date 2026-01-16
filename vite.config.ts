import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
    sourcemap: false, // 生产环境不生成 source map
    minify: 'terser', // 使用 terser 压缩
    target: 'es2015', // 目标浏览器版本
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 将所有第三方依赖打包到一个 vendor chunk 中，避免循环依赖
          if (id.includes('node_modules/')) {
            return 'vendor';
          }
        },
        // 资源文件命名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').at(-1) ?? '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(extType)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Chunk 大小警告阈值 (KB)
    chunkSizeWarningLimit: 500,
  },
  plugins: [
    react(),
    // Bundle analyzer for performance monitoring
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html',
    }),
    // Image optimization
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 85 },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: true,
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    include: ['framer-motion', 'lucide-react'],
  },
});
