import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	staticPageGenerationTimeout: 15000,
	env: {
		BACKEND_URL:
			'https://dev-web-site-back-production.up.railway.app/api',
		BACKEND_URL_PURE:
			'https://dev-web-site-back-production.up.railway.app',
		JWT_KEY: 'grote',
	},
	async headers() {
		return [
			{
				source: '/api/:path*',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: 'https://dev-web-site-back-production.up.railway.app',
					},
					{
						key: 'Accept',
						value: 'application/json',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'Content-Type, Access-Control-Allow-Headers, authorization, Authorization, host',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET, POST, PUT, DELETE, OPTIONS,PATCH',
					},
				],
			},
		];
	},
};

export default nextConfig;
