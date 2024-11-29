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
import BlogModel from './_model/BlogModel';
import SideBarComponent from '../_components/SideBarComponent';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import BlogModal from './_components/BlogModal';
import { getBlogMocks } from '@/app/_mocks/BlogMock';
import Blog from './_model/BlogModel';
import CreateBlogComponent from './_components/CreateBlogComponent';

export default async function BlogHomePage() {
	const blogs: Blog[] = await getAllBlogs();

	return (
		<SideBarComponent>
			<CreateBlogComponent />
			<div className="grid grid-rows-4 grid-cols-4 gap-16">
				{blogs.map((b) => (
					<BlogModal b={b} />
				))}
			</div>
		</SideBarComponent>
	);
}
