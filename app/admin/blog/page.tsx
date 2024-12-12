import { getAllBlogs } from './_service/BlogService';
import SideBarComponent from '../_components/SideBarComponent';
import BlogModal from './_components/BlogModal';
import CreateBlogComponent from './_components/CreateBlogComponent';

export default async function BlogHomePage() {
	const blogList = await getAllBlogs();
	const blogs = blogList.map((b) => ({
		id: b.id,
		title: b.title,
		imageName: b.imageName || 'image1.jpg',
		body: b.body,
	}));
	return (
		<SideBarComponent>
			<CreateBlogComponent />
			<div className="grid grid-rows-4 grid-cols-4 gap-16">
				{blogs.length != 0 ? (
					blogs.map((b) => (
						<BlogModal key={b.id} b={b} />
					))
				) : (
					<div></div>
				)}
			</div>
		</SideBarComponent>
	);
}
