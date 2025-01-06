import type { NextConfig } from 'next';
import 'dotenv';
const nextConfig: NextConfig = {
	staticPageGenerationTimeout: 15000,
	env: {
		BACKEND_URL: process.env.BACKEND_URL,
		BACKEND_URL_PURE: process.env.BACKEND_URL_PURE,
		JWT_KEY: process.env.JWT_KEY,
	},
	async headers() {
		return [
			{
				source: '/api/:path*',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: process.env
							.BACKEND_URL_PURE,
					},
					{
						key: 'Accept',
						value: 'application/json',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'Content-Type, Access-Control-Allow-Headers, Authorization, cookie, Set-Cookie',
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
