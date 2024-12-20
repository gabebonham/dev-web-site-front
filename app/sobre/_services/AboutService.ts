'use client';
export async function getAbout(setData) {
	await fetch(process.env.BACKEND_URL + '/about', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}
