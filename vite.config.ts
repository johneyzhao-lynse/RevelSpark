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
    // Terser 压缩配置
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console.log
        drop_debugger: true, // 移除 debugger
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // 移除特定函数调用
      },
      format: {
        comments: false, // 移除注释
      },
    },
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React 核心（稳定，很少变化）
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // 动画库（较大，单独分割）
          if (id.includes('node_modules/framer-motion/')) {
            return 'motion';
          }
          // 地图库（懒加载，单独分割）
          if (id.includes('node_modules/leaflet/')) {
            return 'leaflet';
          }
          // 其他 node_modules
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
