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
						key: 'Access-Control-Allow-Headers',
						value: 'Content-Type',
					},
					{
						key: 'Accept',
						value: 'application/json',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'POST',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'PUT',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'DELETE',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'OPTIONS',
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'PATCH',
					},
				],
			},
		];
	},
};

export default nextConfig;
