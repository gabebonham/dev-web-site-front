import Blog from '../_model/BlogModel';

async function getAllBlogs(): Promise<Blog[]> {
	const a = await (
		await fetch(process.env.BACKEND_URL + '/blogs', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json();
	return a;
}

async function getBlogById(id) {
	return await fetch(process.env.BACKEND_URL + '/blogs/' + id);
}

async function deleteBlogById(id) {
	const a = await fetch(process.env.BACKEND_URL + '/blogs/' + id, {
		method: 'DELETE',
		credentials: 'include',
	});
}

async function updateBlogById(body) {
	console.log(body);
	const bodyJson = await JSON.stringify(body);
	await fetch(process.env.BACKEND_URL + '/blogs', {
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		method: 'PUT',
		body: bodyJson,
	});
}

async function createBlog(blog) {
	const bodyJson = await JSON.stringify(blog);
	await fetch(process.env.BACKEND_URL + '/blogs', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: bodyJson,
		credentials: 'include',
	});
}

export { getBlogById, getAllBlogs, deleteBlogById, updateBlogById, createBlog };
