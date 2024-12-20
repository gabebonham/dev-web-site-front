import { NextRequest, NextResponse } from 'next/server'; // Required Next.js imports
import { decrypt } from './lib/JWT'; // Assuming decrypt is your custom decryption function

// Middleware to check for a valid session cookie
export async function middleware(req: NextRequest, res: NextResponse) {
	// Get the 'session' cookie from the request

	const session = await req.cookies.get('session'); // Use `cookies.get` to get the cookie
	console.log(session);
	const decryptedData = await decrypt(session); // Assuming decrypt works here

	if (decryptedData) {
		// If the session cannot be decrypted or is invalid, redirect to '/home'

		return NextResponse.next();
	} else {
		return NextResponse.redirect(new URL('/home', req.url));
	}

	// If everything is fine, continue with the request
}

// Define the paths where the middleware should apply
export const config = {
	matcher: ['/admin/:path*', '/admin'], // Apply middleware to all paths under '/admin'
};
