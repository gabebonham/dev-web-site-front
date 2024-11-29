import Blog, { CreateBlog } from '../_model/BlogModel';

async function getAllBlogs() {
	return await (
		await fetch(
			'https://670878788e86a8d9e42f006d.mockapi.io/api/Blogs',
		)
	).json();
}

async function getBlogById(id) {
	return await fetch(
		'https://670878788e86a8d9e42f006d.mockapi.io/api/Blogs/' + id,
	);
}

async function deleteBlogById(id) {
	await fetch(
		'https://670878788e86a8d9e42f006d.mockapi.io/api/Blogs/' + id,
		{
			method: 'DELETE',
		},
	);
}

async function updateBlogById(body: Blog) {
	console.log(body);
	const bodyJson = await JSON.stringify(body);
	await fetch(
		'https://670878788e86a8d9e42f006d.mockapi.io/api/Blogs/' +
			body.id,
		{
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PUT',
			body: bodyJson,
		},
	);
}

async function createBlog(blog: CreateBlog) {
	const bodyJson = await JSON.stringify(blog);
	await fetch('https://670878788e86a8d9e42f006d.mockapi.io/api/Blogs', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: bodyJson,
	});
}

export { getBlogById, getAllBlogs, deleteBlogById, updateBlogById, createBlog };
