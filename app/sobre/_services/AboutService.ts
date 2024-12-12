export async function getAbout(): Promise<any> {
	const about = await (
		await fetch(process.env.BACKEND_URL + '/about', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json();
	return about;
}
