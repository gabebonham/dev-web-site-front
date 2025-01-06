'use client';
import About from '../models/AboutMode';
import cook from 'js-cookie';
export async function getAbout(setData) {
	await fetch(process.env.BACKEND_URL + '/about', {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}
export async function updateAbout(newAbout) {
	try {
		const a = await fetch(process.env.BACKEND_URL + '/about', {
			method: 'PUT',
			body: JSON.stringify({ newAbout: newAbout }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: await cook.get('Authorization'),
			},
			credentials: 'include',
		});
	} catch (e) {
		return null;
	}
}
