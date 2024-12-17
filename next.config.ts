import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	staticPageGenerationTimeout: 10000,
	env: {
		BACKEND_URL:
			'https://dev-web-site-back-production.up.railway.app/api',
		BACKEND_URL_PURE:
			'https://dev-web-site-back-production.up.railway.app',
		JWT_KEY: 'grote',
	},
};

export default nextConfig;
