'use client';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { createBlog } from '../_service/BlogService';
import { FormEvent, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import Blog from '../_model/BlogModel';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroupComponent } from './RadioGroup';

export default function CreateBlogComponent() {
	const [image, setImage] = useState('image.jpg');
	const router = useRouter();
	const [isOpen, open] = useState(false);

	const createBlogHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const title = (await form.get('title')) as string;
		const body = (await form.get('body')) as string;
		await createBlog({
			title: title,
			body: body,
			imageName: image,
		});
		open(false);
		router.refresh();
	};
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Criar um blog</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>
						<Button
							onClick={(e) =>
								open(true)
							}
						>
							Criar
						</Button>
					</CardDescription>
				</CardContent>
			</Card>

			{isOpen && (
				<div>
					<div className="top-0 left-0 absolute bg-black size-full z-10 sepia-0 opacity-30"></div>
					<Card className="top-14 left-14 absolute z-20 size-11/12 h-5/6 opacity-1 ">
						<CardHeader>
							<CardTitle>
								Criar um blog
							</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>
								<form
									onSubmit={
										createBlogHandler
									}
								>
									<p>
										Titulo
									</p>
									<Input
										className="my-4"
										name="title"
									/>
									<p>
										Corpo
									</p>
									<Textarea
										className="my-4"
										name="body"
									/>
									<p>
										Imagem
									</p>
									<RadioGroupComponent
										setImage={
											setImage
										}
									/>
									<Button
										className="mb-4 mr-4"
										type="submit"
										onClick={(
											e,
										) =>
											createBlogHandler
										}
									>
										Criar
									</Button>
									<Button
										className="mb-4"
										onClick={(
											e,
										) =>
											open(
												false,
											)
										}
									>
										Fechar
									</Button>
								</form>
							</CardDescription>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	);
}
