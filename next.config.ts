import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	staticPageGenerationTimeout: 10000,
	env: {
		BACKEND_URL: 'http://back:3000/api',
		BACKEND_URL_PURE: 'http://back:3000',
		JWT_KEY: 'grote',
	},
};

export default nextConfig;
