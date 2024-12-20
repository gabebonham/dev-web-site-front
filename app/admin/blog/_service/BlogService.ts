'use client';
import Blog from '../_model/BlogModel';

async function getAllBlogs(setData) {
	await fetch(process.env.BACKEND_URL + '/blogs', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((data) => setData(data));
}

async function deleteBlogById(id: number) {
	await fetch(process.env.BACKEND_URL + '/blogs/' + id, {
		headers: {
			'Content-Type': 'application/json',
		},
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
	const bodyJson = JSON.stringify(blog);
	await fetch(process.env.BACKEND_URL + '/blogs', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: bodyJson,
		credentials: 'include',
	});
}

export { getAllBlogs, deleteBlogById, updateBlogById, createBlog };
