import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify('https://dywmajqqvsmbatwadqop.supabase.co'),
      'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5d21hanFxdnNtYmF0d2FkcW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxOTkxNjYsImV4cCI6MjA3NDc3NTE2Nn0.cOXX2J9NUmNWNvDR_OnoTXuN_kywx-EXd6NP3nFu6Zc'),
      'import.meta.env.VITE_SUPABASE_PROJECT_ID': JSON.stringify('dywmajqqvsmbatwadqop'),
    },
  };
});
