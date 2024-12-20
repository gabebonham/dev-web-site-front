'use server';
import { cookies } from 'next/headers';

const cookie = {
	secure: true,
	sameSite: true,
	path: '/',
	expires: 1,
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
		const coo = await cookies();
		coo.set('session', token, {
			httpOnly: false,
			secure: true,
			sameSite: 'lax',
			path: '/',
		});
		return token.session;
	} catch (e) {
		return null;
	}
}

export async function logout() {
	const a = await cookies();
	a.set('session', '', { expires: new Date(0) });
}
