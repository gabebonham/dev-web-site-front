import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	staticPageGenerationTimeout: 10000,
	env: {
		BACKEND_URL:
			'dev-web-site-back-production.up.railway.app:3000/api',
		BACKEND_URL_PURE:
			'dev-web-site-back-production.up.railway.app:3000',
		JWT_KEY: 'grote',
	},
};

export default nextConfig;
