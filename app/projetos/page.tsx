'use client';
import LayoutComponent from '@/components/LayoutComponent';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { getAllProjects } from './_services/ProjectsService';
import Image from 'next/image';
import img from '@/public/p1.png';
import { useEffect, useState } from 'react';
import Project from '../admin/projects/_models/ProjectModel';

export default function ProjectsPage() {
	const [data, setData] = useState<Project[]>([]);
	useEffect(() => {
		const get = async () => {
			await getAllProjects(setData);
		};
		get();
	}, []);
	return (
		<LayoutComponent>
			<div className="mb-8 shadow-2xl shadow-black bg-[rgba(0,0,0,0.2)] p-16">
				<Image
					src={img}
					alt="img"
					className="size-48 absolute right-0 rounded-2xl pr-4 hover:animate-pulse2 opacity-50"
				/>
				<h1 className="ml-80 text-5xl pb-12">
					Projetos
				</h1>
				<div className=" grid grid-cols-3 gap-8 w-[1100px] ">
					{data.length &&
						data.map((p) => (
							<Card
								key={p.id}
								className={
									'shadow-2xl cursor-pointer hover:animate-pulse2 bg-gradient-to-br from-gray-400 to-white border border-2 ' +
									(p.inDev
										? ' border-red-500 '
										: ' border-cyan-100 ')
								}
							>
								<CardHeader>
									<CardTitle>
										{
											p.name
										}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-black">
										{
											p.description
										}
									</CardDescription>
								</CardContent>
								<CardFooter className="flex flex-col">
									<Link
										className="flex text-blue-500"
										href={
											p.link
										}
									>
										{
											p.link
										}
									</Link>
									<h1 className="flex text-red-500 underline">
										EM
										DESENVOLVIMENTO
									</h1>
								</CardFooter>
							</Card>
						))}
				</div>
			</div>
		</LayoutComponent>
	);
}
