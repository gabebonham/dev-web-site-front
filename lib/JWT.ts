import { jwtVerify } from 'jose';

export async function decrypt(session) {
	const o = process.env.JWT_KEY as string;
	console.log(o);
	const key = new TextEncoder().encode(o);
	console.log(key);
	const { payload } = await jwtVerify(session.value, key, {
		algorithms: ['HS256'],
	});
	return true;
	// try {
	// 	console.log(session);
	// 	const { payload } = await jwtVerify(session.value, key, {
	// 		algorithms: ['HS256'],
	// 	});
	// 	console.log(payload.user);
	// 	return true;
	// } catch (e) {
	// 	return false;
	// }
}
