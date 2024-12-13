import About from '../models/AboutMode';

export async function getAbout(): Promise<{ about: About }> {
	const about = (await (
		await fetch(process.env.BACKEND_URL + '/about', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json()) as { about: About };
	console.log(about);
	return about;
}
export async function updateAbout(newAbout) {
	const a = await fetch(process.env.BACKEND_URL + '/about', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		body: JSON.stringify({ newAbout: newAbout }),
		credentials: 'include',
	});
}
