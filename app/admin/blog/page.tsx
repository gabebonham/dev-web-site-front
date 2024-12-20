import { getAllBlogs } from './_service/BlogService';
import SideBarComponent from '../_components/SideBarComponent';
import BlogModal from './_components/BlogModal';
import CreateBlogComponent from './_components/CreateBlogComponent';
import WrapComponent from './_components/WrapComponent';

export default async function BlogHomePage() {
	return (
		<SideBarComponent>
			<WrapComponent />
		</SideBarComponent>
	);
}
