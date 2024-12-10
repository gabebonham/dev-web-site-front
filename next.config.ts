import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	env: {
		BACKEND_URL:
			'https://dev-web-site-back-production.up.railway.app/api',
		RESEND_API_KEY: 're_FHTwcqWX_9QZxjeGRddfEfPFL45R7Y7cj',
	},
};

export default nextConfig;
