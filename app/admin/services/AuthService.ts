import { setCookie } from 'cookies-next';
export async function authenticate(userName, password) {
	const userObj = {
		userName: userName,
		password: password,
	};
	const token = await (
		await fetch('http://localhost:3001/login', {
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
