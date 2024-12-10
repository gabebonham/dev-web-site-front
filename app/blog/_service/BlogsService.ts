export async function getAllBlogs() {
	const blogs = await (
		await fetch(process.env.BACKEND_URL + '/blogs')
	).json();
	return blogs;
}

export async function getBlogById(id) {
	const blog = await (
		await fetch(process.env.BACKEND_URL + '/blogs/' + id)
	).json();
	return blog;
}
