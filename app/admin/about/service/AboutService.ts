export async function getAbout() {
	const about = await (
		await fetch(process.env.BACKEND_URL + '/about', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json();
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
