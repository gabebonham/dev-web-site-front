import Blog from '@/app/admin/blog/_model/BlogModel';

export async function getAllBlogs(setData) {
	await fetch(process.env.BACKEND_URL + '/blogs', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}

export async function getBlogById(id: number) {
	return await fetch(process.env.BACKEND_URL + '/blogs/' + id, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		credentials: 'include',
	}).then((res) => res.json());
}
