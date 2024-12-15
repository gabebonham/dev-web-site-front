import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	env: {
		BACKEND_URL: 'https://dev-web-site-front.railway.internal/api',
		BACKEND_URL_PURE: 'https://dev-web-site-front.railway.internal',
		JWT_KEY: 'grote',
	},
};

export default nextConfig;
