import { NextRequest, NextResponse } from 'next/server'; // Required Next.js imports
import { decrypt } from './lib/JWT'; // Assuming decrypt is your custom decryption function
import { headers } from 'next/headers';

// Middleware to check for a valid session cookie
export async function middleware(req: NextRequest, res: NextResponse) {
	// Get the 'session' cookie from the request

	const session = await req.cookies.get('session'); // Use `cookies.get` to get the cookie
	const a = req.headers.host as string;
	const decryptedData = await decrypt(session); // Assuming decrypt works here
	const requestHeaders = new Headers(req.headers);
	requestHeaders.append('authorization', session.value);
	requestHeaders.append('Access-Control-Allow-Origin', a);
	requestHeaders.append('Access-Control-Allow-Credentials', 'true');
	requestHeaders.append(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	);
	requestHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
	requestHeaders.append(
		'Access-Control-Allow-Headers',
		'Access-Control-Allow-Methods',
	);
	requestHeaders.append('Accept', 'application/json');
	// You can also set request headers in NextResponse.rewrite
	const headers = {
		authorization: session,
	};
	console.log(req.headers);
	if (decryptedData) {
		return NextResponse.next();
	} else {
		return NextResponse.redirect(new URL('/home', req.url));
	}
}

// Define the paths where the middleware should apply
export const config = {
	matcher: ['/admin/:path*', '/admin'], // Apply middleware to all paths under '/admin'
};
