export async function getAbout(): Promise<any> {
	const about = await (
		await fetch(process.env.BACKEND_URL + '/about')
	).json();
	return about;
}
