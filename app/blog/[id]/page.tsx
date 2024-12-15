import LayoutComponent from '@/components/LayoutComponent';
import { getAllBlogs, getBlogById } from '../_service/BlogsService';
export async function getStaticProps() {
	const about = await getAllBlogs();
	return {
		porps: {
			about,
		},
	};
}
export default async function BlogSpecificPage({ params, props }) {
	const { id } = await params;
	let blog = await getBlogById(id);
	if (blog == undefined || blog == null) {
		blog = props;
	}
	return (
		<LayoutComponent>
			<div
				className="mb-8 p-16 shadow-2xl shadow-black bg-[rgba(0,0,0,0.2)] "
				style={{
					backgroundImage:
						'url(/' + blog.imageName + ')',
				}}
			>
				<h1 className="text-5xl">{blog.title}</h1>
				<div className="w-[900px]">{blog.body}</div>
			</div>
		</LayoutComponent>
	);
}
