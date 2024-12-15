import { getAllBlogs } from './_service/BlogService';
import SideBarComponent from '../_components/SideBarComponent';
import BlogModal from './_components/BlogModal';
import CreateBlogComponent from './_components/CreateBlogComponent';

export default async function BlogHomePage() {
	const blogList = (await getAllBlogs()) || [];
	return (
		<SideBarComponent>
			<CreateBlogComponent />
			<div className="grid grid-rows-4 grid-cols-4 gap-16">
				{blogList.length ? (
					blogList.map((b, _i) => (
						<BlogModal key={_i} b={b} />
					))
				) : (
					<div></div>
				)}
			</div>
		</SideBarComponent>
	);
}
