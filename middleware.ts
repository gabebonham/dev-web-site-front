import { NextRequest, NextResponse } from 'next/server'; // Required Next.js imports
import { decrypt } from './lib/JWT'; // Assuming decrypt is your custom decryption function
import { cookies, headers } from 'next/headers';
import 'dotenv';
// Middleware to check for a valid session cookie
export async function middleware(req, res, next) {
	// Get the 'session' cookie from the request

	const session = await req.cookies.get('Authorization');
	const decryptedData = await decrypt(session); // Assuming decrypt works here
	let headerss = new Headers();

	headerss.set('Authorization', session.value);
	headerss.set('Accept', 'application/json');
	headerss.set(
		'Access-Control-Allow-Headers',
		'Content-Type, Access-Control-Allow-Methods, Accept, Authorization, cookie, Set-Cookie',
	);
	headerss.set('Access-Control-Allow-Credentials', 'true');
	headerss.set(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	);
	headerss.set(
		'Access-Control-Allow-Origin',
		process.env.BACKEND_URL_PURE,
	);
	headerss.set('Access-Control-Expose-Headers', 'Authentication, cookie');
	const response = NextResponse.next({
		headers: headerss,
	});
	(await response.cookies).set('Authorization', session.value);
	console.log(response);
	if (decryptedData) {
		return response;
	} else {
		return NextResponse.redirect(new URL('/home', req.url));
	}
}

// Define the paths where the middleware should apply
export const config = {
	matcher: [], // Apply middleware to all paths under '/admin'
};
