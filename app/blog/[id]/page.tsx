import Blog from '@/app/admin/blog/_model/BlogModel';
import LayoutComponent from '@/components/LayoutComponent';
import { getBlogById } from '../_service/BlogsService';
import { useParams } from 'next/navigation';

export default async function BlogSpecificPage({ params }) {
	const { id } = await params;
	const blog = await getBlogById(id);
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