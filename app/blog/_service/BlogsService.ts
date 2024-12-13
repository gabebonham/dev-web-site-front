import Blog from '@/app/admin/blog/_model/BlogModel';

export async function getAllBlogs(): Promise<Blog[]> {
	const blogs = (await (
		await fetch(process.env.BACKEND_URL + '/blogs', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json()) as Blog[];
	return blogs;
}

export async function getBlogById(id: number): Promise<Blog> {
	const blog = (await (
		await fetch(process.env.BACKEND_URL + '/blogs/' + id, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json()) as Blog;
	return blog;
}
