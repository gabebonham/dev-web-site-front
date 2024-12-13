import About from '@/app/admin/about/models/AboutMode';

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
	return about;
}
