import { setCookie } from 'cookies-next';
export async function authenticate(userName, password): Promise<string> {
	const userObj = {
		userName: userName,
		password: password,
	};
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
	setCookie('session', token);

	return token.session;
}

export async function logout() {
	setCookie('session', '', { expires: new Date(0) });
}
