import { jwtVerify } from 'jose';
export async function decrypt(session) {
	const key = new TextEncoder().encode('grote');
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
