export async function getAbout() {
	console.log(process.env.BACKEND_URL);
	try {
		const about = await (
			await fetch(process.env.BACKEND_URL + '/about', {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin':
						'https://dev-web-site-back-production.up.railway.app',
				},
				method: 'GET',
				credentials: 'include',
			})
		).json();
		return about;
	} catch (e) {
		return null;
	}
}
