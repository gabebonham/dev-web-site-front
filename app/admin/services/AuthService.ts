'use client';
import cookiee from 'js-cookie';

export async function authenticate(userName, password) {
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
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(userObj),
			})
		).json();
		return token.session;
	} catch (e) {
		return null;
	}
}

export async function logout() {
	cookiee.set('session', '', { expires: new Date(0) });
}
