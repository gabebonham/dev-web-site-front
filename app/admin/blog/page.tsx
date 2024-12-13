import { getAllBlogs } from './_service/BlogService';
import SideBarComponent from '../_components/SideBarComponent';
import BlogModal from './_components/BlogModal';
import CreateBlogComponent from './_components/CreateBlogComponent';
import Blog from './_model/BlogModel';

export default async function BlogHomePage() {
	const blogList = (await getAllBlogs()) as Blog[];
	const blogs = blogList.map((b) => ({
		id: b.id,
		title: b.title,
		imageName: b.imageName || 'image1.jpg',
		body: b.body,
	})) as {
		id: number;
		title: string;
		imageName: string;
		body: string;
	}[];
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
