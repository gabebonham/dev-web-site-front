import About from '../models/AboutMode';

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
			credentials: 'include',
		});
	} catch (e) {
		return null;
	}
}
