import { getAllBlogs } from './_service/BlogService';
import SideBarComponent from '../_components/SideBarComponent';
import BlogModal from './_components/BlogModal';
import CreateBlogComponent from './_components/CreateBlogComponent';
import Blog from './_model/BlogModel';

export default async function BlogHomePage() {
	const blogList = (await getAllBlogs()) || [];
	return (
		<SideBarComponent>
			<CreateBlogComponent />
			<div className="grid grid-rows-4 grid-cols-4 gap-16">
				{blogList.length ? (
					blogList.map((b) => (
						<BlogModal key={b.id} b={b} />
					))
				) : (
					<div></div>
				)}
			</div>
		</SideBarComponent>
	);
}
