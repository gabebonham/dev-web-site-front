import { NextRequest, NextResponse } from 'next/server'; // Required Next.js imports
import { decrypt } from './lib/JWT'; // Assuming decrypt is your custom decryption function
import { cookies, headers } from 'next/headers';

// Middleware to check for a valid session cookie
export async function middleware(req, res) {
	// Get the 'session' cookie from the request

	const session = await req.cookies.get('Authorization');
	const decryptedData = await decrypt(session); // Assuming decrypt works here
	const requestHeaders = new Headers(req.headers);

	// res.setHeader('Set-Cookie', 'authorization=' + session.value);
	requestHeaders.append(
		'Access-Control-Allow-Origin',
		'http://localhost:3001',
	);
	requestHeaders.append('Access-Control-Allow-Credentials', 'true');
	requestHeaders.append(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	);
	requestHeaders.append(
		'Access-Control-Allow-Headers',
		'Content-Type, Access-Control-Allow-Methods, Authorization, cookie, Set-Cookie',
	);
	requestHeaders.append('Accept', 'application/json');

	const response = NextResponse.next({
		request: {
			// New request headers
			headers: requestHeaders,
		},
	});
	console.log(response);
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
