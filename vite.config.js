import { defineConfig } from 'vite';

export default defineConfig({
  // other configurations
  server: {
    mimeTypes: {
      // Add JavaScript MIME type
      'application/javascript': ['js']
    }
  }
});
