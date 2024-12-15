import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	staticPageGenerationTimeout: 5000,
	timeout: 5 * 1000,
};

export default nextConfig;
