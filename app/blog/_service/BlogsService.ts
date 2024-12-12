export async function getAllBlogs() {
	const blogs = await (
		await fetch(process.env.BACKEND_URL + '/blogs', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json();
	return blogs;
}

export async function getBlogById(id) {
	const blog = await (
		await fetch(process.env.BACKEND_URL + '/blogs/' + id, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json();
	return blog;
}
