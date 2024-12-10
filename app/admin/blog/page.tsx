import AppSideBar from '../_components/AppSideBar';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	deleteBlogById,
	getAllBlogs,
	getBlogById,
} from './_service/BlogService';
import SideBarComponent from '../_components/SideBarComponent';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import BlogModal from './_components/BlogModal';
import Blog from './_model/BlogModel';
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
				{blogList.map((b) => (
					<BlogModal key={b.id} b={b} />
				))}
			</div>
		</SideBarComponent>
	);
}
