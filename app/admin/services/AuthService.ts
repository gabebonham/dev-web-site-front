'use server';
import { cookies } from 'next/headers';

const cookie = {
	name: 'session',
	options: { httpOnly: true, secure: true, sameSite: 'lax', path: '/' },
	duration: 24 * 60 * 60 * 1000,
};

export async function authenticate(userName, password): Promise<string> {
	try {
		const userObj = {
			userName: userName,
			password: password,
		};
		console.log(userObj);
		const token = await (
			await fetch(process.env.BACKEND_URL_PURE + '/login', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(userObj),
				credentials: 'include',
			})
		).json();
		console.log(token);
		const a = await cookies();
		a.set('session', token, cookie);

		return token.session;
	} catch (e) {
		return null;
	}
}

export async function logout() {
	const a = await cookies();
	a.set('session', '', { expires: new Date(0) });
}
