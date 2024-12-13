import { jwtVerify } from 'jose'; // For JWT verification
import { NextRequest, NextResponse } from 'next/server'; // Required Next.js imports
import { decrypt } from './lib/JWT'; // Assuming decrypt is your custom decryption function

// Middleware to check for a valid session cookie
export async function middleware(req: NextRequest) {
	// Get the 'session' cookie from the request
	const sessiosn = await req.cookies.get('session'); // Use `cookies.get` to get the cookie

	try {
		// Decrypt the session token using the decrypt function (or JWT verify if needed)
		const decryptedData = await decrypt(sessiosn); // Assuming decrypt works here

		if (!decryptedData) {
			// If the session cannot be decrypted or is invalid, redirect to '/home'
			return NextResponse.redirect(new URL('/home', req.url));
		}

		// If everything is fine, continue with the request
		return NextResponse.next();
	} catch (error) {
		console.error('Error while decrypting session:', error);
		// If any error occurs (e.g., invalid JWT), redirect to '/home'
		return NextResponse.redirect(new URL('/home', req.url));
	}
}

// Define the paths where the middleware should apply
export const config = {
	matcher: ['/admin/:path*', '/admin'], // Apply middleware to all paths under '/admin'
};
