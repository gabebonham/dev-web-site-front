import { NextRequest, NextResponse } from 'next/server'; // Required Next.js imports
import { decrypt } from './lib/JWT'; // Assuming decrypt is your custom decryption function
import { headers } from 'next/headers';

// Middleware to check for a valid session cookie
export async function middleware(req, res: NextResponse) {
	// Get the 'session' cookie from the request

	const session = await req.cookies.get('session');
	const decryptedData = await decrypt(session); // Assuming decrypt works here
	const requestHeaders = new Headers(req.headers);

	requestHeaders.append(
		'Access-Control-Allow-Origin',
		'https://dev-web-site-back-production.up.railway.app',
	);
	requestHeaders.append('Access-Control-Allow-Credentials', 'true');
	requestHeaders.append(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	);
	requestHeaders.append(
		'Access-Control-Allow-Headers',
		'Content-Type, Access-Control-Allow-Methods, authorization',
	);
	requestHeaders.append('Authorization', session.value);

	requestHeaders.append('Accept', 'application/json');

	console.log(req.headers);
	const response = NextResponse.next({
		request: {
			// New request headers
			headers: requestHeaders,
		},
	});

	// Set a new response header `x-hello-from-middleware2`
	response.headers.set('authorization', session.value);

	if (decryptedData) {
		return response;
	} else {
		return NextResponse.redirect(new URL('/home', req.url));
	}
}

// Define the paths where the middleware should apply
export const config = {
	matcher: ['/admin/:path*', '/admin'], // Apply middleware to all paths under '/admin'
};
