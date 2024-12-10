import Blog from '../_model/BlogModel';

async function getAllBlogs(): Promise<Blog[]> {
	const a = await (await fetch('http://localhost:3001/api/blogs')).json();
	return a;
}

async function getBlogById(id) {
	return await fetch('http://localhost:3001/api/blogs/' + id);
}

async function deleteBlogById(id) {
	const a = await fetch('http://localhost:3001/api/blogs/' + id, {
		method: 'DELETE',
		credentials: 'include',
	});
}

async function updateBlogById(body: Blog) {
	console.log(body);
	const bodyJson = await JSON.stringify(body);
	await fetch('http://localhost:3001/api/blogs', {
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		method: 'PUT',
		body: bodyJson,
	});
}

async function createBlog(blog: Blog) {
	const bodyJson = await JSON.stringify(blog);
	await fetch('http://localhost:3001/api/blogs', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: bodyJson,
		credentials: 'include',
	});
}

export { getBlogById, getAllBlogs, deleteBlogById, updateBlogById, createBlog };
