import { jwtVerify } from 'jose';

const key = new TextEncoder().encode(process.env.JWT_KEY);

export async function decrypt(session) {
	if (session == undefined) return null;
	try {
		console.log(session.session);
		const { payload } = await jwtVerify(session.session, key, {
			algorithms: ['HS256'],
		});
		console.log(payload);
		return payload;
	} catch (e) {
		return null;
	}
}
