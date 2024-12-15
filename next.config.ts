import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	env: {
		BACKEND_URL: 'http://back.railway.internal/api',
		BACKEND_URL_PURE: 'http://back.railway.internal',
		JWT_KEY: 'grote',
	},
};

export default nextConfig;
