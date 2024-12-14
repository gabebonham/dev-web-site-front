import Blog from '../_model/BlogModel';

async function getAllBlogs(): Promise<Blog[]> {
	try {
		const a = (await (
			await fetch(process.env.BACKEND_URL + '/blogs', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'GET',
				credentials: 'include',
			})
		).json()) as Blog[];
		return a;
	} catch (e) {
		return [];
	}
}

async function getBlogById(id: number): Promise<Blog> {
	try {
		const a = await (
			await fetch(process.env.BACKEND_URL + '/blogs/' + id)
		).json();
		return a;
	} catch (e) {
		return null;
	}
}

async function deleteBlogById(id: number) {
	try {
		await fetch(process.env.BACKEND_URL + '/blogs/' + id, {
			method: 'DELETE',
			credentials: 'include',
		});
	} catch (e) {
		return [];
	}
}

async function updateBlogById(body) {
	try {
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
	} catch (e) {
		return [];
	}
}

async function createBlog(blog) {
	try {
		const bodyJson = await JSON.stringify(blog);
		await fetch(process.env.BACKEND_URL + '/blogs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: bodyJson,
			credentials: 'include',
		});
	} catch (e) {
		return [];
	}
}

export { getBlogById, getAllBlogs, deleteBlogById, updateBlogById, createBlog };
