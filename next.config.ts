import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	env: {
		BACKEND_URL: 'http://localhost:3001/api',
		BACKEND_URL_PURE: 'http://localhost:3001',
		JWT_KEY: 'grote',
	},
};

export default nextConfig;
