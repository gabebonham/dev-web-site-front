import LayoutComponent from '@/components/LayoutComponent';
import { getAllBlogs } from './_service/BlogsService';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Blog from '../admin/blog/_model/BlogModel';
import Image from 'next/image';
import img from '@/public/blog.jpeg';
import Link from 'next/link';

export default async function BlogPage() {
	const blogs = ((await getAllBlogs()) || []).map((y) => ({
		id: y.id,
		title: y.title,
		body: y.body,
		imageName: y.imageName,
	}));
	const firstBlog = blogs[0] || {
		imageName: '',
		body: '',
		id: 2,
		title: '',
	};
	return (
		<LayoutComponent>
			{blogs.length != 0 && (
				<div className="mb-4 p-16 shadow-2xl shadow-black bg-[rgba(0,0,0,0.2)]">
					<Image
						src={img}
						alt="img"
						className="absolute right-0 rounded-2xl pr-4 hover:animate-pulse2 opacity-50 size-48"
					/>
					<h1 className="pl-80 text-5xl">Blog</h1>
					<Link href={'/blog/' + firstBlog.id}>
						<Card
							style={{
								backgroundImage: `url('${firstBlog.imageName}')`,
							}}
							className={`w-[800px] hover:animate-pulse2 m-8 cursor-pointer`}
						>
							<CardHeader>
								<CardTitle>
									{
										firstBlog.title
									}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									{
										firstBlog.body
									}
								</CardDescription>
							</CardContent>
						</Card>
					</Link>
					<div className="grid grid-cols-3 gap-6 pt-4">
						{blogs.map((b, i) => {
							const image =
								b.imageName;
							if (i != 0)
								return (
									<Link
										href={
											'/blog/' +
											b.id
										}
									>
										<Card
											className={
												'hover:animate-pulse2 cursor-pointer'
											}
											style={{
												backgroundImage: `url('${image}')`,
											}}
										>
											<CardHeader>
												<CardTitle>
													{
														b.title
													}
												</CardTitle>
											</CardHeader>
											<CardContent>
												<CardDescription>
													{
														b.body
													}
												</CardDescription>
											</CardContent>
										</Card>
									</Link>
								);
						})}
					</div>
				</div>
			)}
		</LayoutComponent>
	);
}
