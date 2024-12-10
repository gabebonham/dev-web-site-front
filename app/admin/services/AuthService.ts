import { setCookie } from 'cookies-next';
export async function authenticate(userName, password) {
	const userObj = {
		userName: userName,
		password: password,
	};
	const token = await (
		await fetch(process.env.BACKEND_URL + '/login', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(userObj),
		})
	).json();
	console.log(token.session);
	setCookie('session', JSON.stringify(token.session));

	return token.session;
}
