import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000, // Frontend runs on port 3000
		proxy: {
			"/api": {
				target: "http://localhost:3000", // Match the backend port
				changeOrigin: true, // Ensures the Host header matches the target
				secure: false, // Allows HTTP connections
			},
		},
	},
});