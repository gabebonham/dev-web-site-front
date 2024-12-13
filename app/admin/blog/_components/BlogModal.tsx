'use client';
import {
	CardContent,
	CardFooter,
	CardHeader,
	Card,
	CardTitle,
} from '@/components/ui/card';
import Blog from '../_model/BlogModel';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { deleteBlogById, updateBlogById } from '../_service/BlogService';
import { useRouter } from 'next/navigation';
import { RadioGroupComponent } from './RadioGroup';

export default function BlogModal({
	b,
}: {
	b: {
		id: number;
		title: string;
		imageName: string;
		body: string;
	};
}) {
	const router = useRouter();
	const [image, setImage] = useState('image1.jpg');
	const [isOpen, open] = useState(false);
	const titleRef = useRef<any>(null);
	const bodyRef = useRef<any>(null);

	const updateBlogHandler = async (blog: {
		id: number;
		title: string;
		imageName: string;
		body: string;
	}) => {
		const title = titleRef.current.value;
		const body = bodyRef.current.value;
		console.log(blog);
		await updateBlogById({
			id: blog.id,
			title: title,
			body: body,
			imageName: image,
		});
		router.refresh();
	};

	const deleteBlogHandler = async (id) => {
		await deleteBlogById(id);
		open(false);
		router.refresh();
	};

	return (
		<div key={b.id} className="max-w-56 min-w-56">
			<div
				className="transition opacity-25 cursor-pointer hover:opacity-75 hover:-translate-y-2 animate-pulse p-4 max-w-56 min-w-56 max-h-56 min-h-56 rounded-3xl"
				onClick={(i) => open((e) => !e)}
			>
				<Card
					style={{
						backgroundImage: `url(/${b?.imageName})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
					className="max-w-52 min-w-52 max-h-52 min-h-52 rounded-3xl"
				>
					<CardHeader>
						<CardTitle className="text-wrap">
							<p className="text-white break-words">
								{b?.title.slice(
									0,
									30,
								)}
							</p>
						</CardTitle>
					</CardHeader>
					<CardContent className="text-wrap">
						<p className="text-white break-words">
							{b?.body.slice(0, 30)}
						</p>
					</CardContent>
					<CardFooter className="size-full pt-4"></CardFooter>
				</Card>
			</div>
			<div>
				{isOpen ? (
					<div>
						<div className="top-0 left-0 absolute bg-black size-full z-10 sepia-0 opacity-30"></div>

						<Card className="top-14 left-14 absolute z-20 size-11/12 h-5/6 opacity-1">
							<CardHeader>
								<Input
									ref={
										titleRef
									}
									placeholder={
										b?.title
									}
									type="text"
								/>
							</CardHeader>
							<CardContent>
								<Textarea
									ref={
										bodyRef
									}
									placeholder={
										b?.body
									}
								/>
								<RadioGroupComponent
									setImage={
										setImage
									}
								/>
							</CardContent>
							<CardFooter>
								<Button
									onClick={(
										a,
									) =>
										open(
											(
												e,
											) =>
												!e,
										)
									}
									className="m-4"
								>
									Fechar
								</Button>
								<Button
									className="m-4"
									onClick={(
										a,
									) => {
										open(
											(
												e,
											) =>
												!e,
										);
										updateBlogHandler(
											b,
										);
									}}
								>
									Salvar
								</Button>
								<form
									action={(
										e,
									) =>
										deleteBlogHandler(
											b?.id,
										)
									}
								>
									<Button
										type="submit"
										className="place-self-center"
									>
										Excluir
									</Button>
								</form>
							</CardFooter>
						</Card>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}
