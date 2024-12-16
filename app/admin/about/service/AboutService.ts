import About from '../models/AboutMode';

export async function getAbout(): Promise<About> {
	try {
		const about = (await (
			await fetch(process.env.BACKEND_URL + '/about', {
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				method: 'GET',
			})
		).json()) as About;
		console.log(about);
		return about;
	} catch (e) {
		return null;
	}
}
export async function updateAbout(newAbout) {
	try {
		const a = await fetch(process.env.BACKEND_URL + '/about', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PUT',
			body: JSON.stringify({ newAbout: newAbout }),
			credentials: 'include',
		});
	} catch (e) {
		return null;
	}
}
