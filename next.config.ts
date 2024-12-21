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
						value: 'https://dev-web-site-front-production.up.railway.app',
					},
					{
						key: 'authorization',
						value: 'my custom header value',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'authorization',
					},
					{
						key: 'Accept',
						value: 'application/json',
					},
				],
			},
		];
	},
};

export default nextConfig;
