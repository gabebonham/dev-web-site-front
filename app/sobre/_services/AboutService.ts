'use client';
import cookiess from 'js-cookie';
export async function getAbout(setData) {
	await fetch(process.env.BACKEND_URL + '/about', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}
