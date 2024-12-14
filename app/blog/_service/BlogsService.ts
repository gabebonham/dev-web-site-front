import Blog from '@/app/admin/blog/_model/BlogModel';

export async function getAllBlogs(): Promise<Blog[]> {
	try {
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
	} catch (e) {
		return [];
	}
}

export async function getBlogById(id: number): Promise<Blog> {
	try {
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
	} catch (e) {
		return null;
	}
}
