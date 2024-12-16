import About from '../models/AboutMode';

export async function getAbout(): Promise<About> {
	try {
		const about = (await (
			await fetch(process.env.BACKEND_URL + '/about', {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin':
						'https://dev-web-site-back-production.up.railway.app',
				},
				method: 'GET',
				credentials: 'include',
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
				'Access-Control-Allow-Origin':
					'https://dev-web-site-back-production.up.railway.app',
			},
			method: 'PUT',
			body: JSON.stringify({ newAbout: newAbout }),
			credentials: 'include',
		});
	} catch (e) {
		return null;
	}
}
