// vite.config.ts
import { defineConfig } from "file:///E:/MVP_ReactQuery_CI-CD/node_modules/vite/dist/node/index.js";
import react from "file:///E:/MVP_ReactQuery_CI-CD/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  base: "/MVP_ReactQuery_CI-CD",
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      lines: 75,
      branches: 75,
      functions: 35,
      statements: 75,
      watermarks: {
        lines: [45, 95],
        functions: [45, 95],
        branches: [45, 95],
        statements: [45, 95]
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxNVlBfUmVhY3RRdWVyeV9DSS1DRFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcTVZQX1JlYWN0UXVlcnlfQ0ktQ0RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L01WUF9SZWFjdFF1ZXJ5X0NJLUNEL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICBiYXNlOiBcIi9NVlBfUmVhY3RRdWVyeV9DSS1DRFwiLFxyXG4gIHRlc3Q6IHtcclxuICAgIGVudmlyb25tZW50OiBcImhhcHB5LWRvbVwiLFxyXG4gICAgY292ZXJhZ2U6IHtcclxuICAgICAgcHJvdmlkZXI6IFwidjhcIixcclxuICAgICAgbGluZXM6IDc1LFxyXG4gICAgICBicmFuY2hlczogNzUsXHJcbiAgICAgIGZ1bmN0aW9uczogMzUsXHJcbiAgICAgIHN0YXRlbWVudHM6IDc1LFxyXG4gICAgICB3YXRlcm1hcmtzOiB7XHJcbiAgICAgICAgbGluZXM6IFs0NSwgOTVdLFxyXG4gICAgICAgIGZ1bmN0aW9uczogWzQ1LCA5NV0sXHJcbiAgICAgICAgYnJhbmNoZXM6IFs0NSwgOTVdLFxyXG4gICAgICAgIHN0YXRlbWVudHM6IFs0NSwgOTVdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxRQUNWLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFBQSxRQUNkLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFBQSxRQUNsQixVQUFVLENBQUMsSUFBSSxFQUFFO0FBQUEsUUFDakIsWUFBWSxDQUFDLElBQUksRUFBRTtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
