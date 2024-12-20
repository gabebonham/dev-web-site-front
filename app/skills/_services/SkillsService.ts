'use client';
export async function getAllSkills(setData) {
	await fetch(process.env.BACKEND_URL + '/competences', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}
