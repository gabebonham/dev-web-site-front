import { jwtVerify } from 'jose';

const key = new TextEncoder().encode(process.env.JWT_KEY);

export async function decrypt(session) {
	try {
		console.log(session);
		const { payload } = await jwtVerify(session.value, key, {
			algorithms: ['HS256'],
		});
		console.log(payload.user);
		return true;
	} catch (e) {
		return false;
	}
}
