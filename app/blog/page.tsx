'use client';
import LayoutComponent from '@/components/LayoutComponent';
import { getAllBlogs } from './_service/BlogsService';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import img from '@/public/p4.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DefaultSkeleton from '@/components/DefaultSkeleton';

export default function BlogPage() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const get = async () => {
			await getAllBlogs(setData);
		};
		get();
	}, []);
	return (
		<LayoutComponent>
			<div className="mb-4 p-16 shadow-2xl shadow-black bg-[rgba(0,0,0,0.2)]">
				<Image
					src={img}
					alt="img"
					className="absolute right-0 rounded-2xl pr-4 hover:animate-pulse2 opacity-50 size-48"
				/>
				{data.length > 0 ? (
					<div>
						<h1 className="pl-80 text-5xl">
							Blog
						</h1>
						<Link
							href={
								'/blog/' +
								data[0].id
							}
						>
							<Card
								style={{
									backgroundImage: `url('${data[0].imageName}')`,
								}}
								className={`w-[800px] hover:animate-pulse2 m-8 cursor-pointer`}
							>
								<CardHeader>
									<CardTitle>
										{
											data[0]
												.title
										}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										{
											data[0]
												.body
										}
									</CardDescription>
								</CardContent>
							</Card>
						</Link>
						<div className="grid grid-cols-3 gap-6 pt-4">
							{data.map((b, i) => {
								const image =
									b.imageName;
								if (i != 0)
									return (
										<Link
											key={
												i
											}
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
				) : (
					<div className="w-2/3">
						<DefaultSkeleton />
					</div>
				)}
			</div>
		</LayoutComponent>
	);
}
