'use client';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useRef, useState } from 'react';
import { updateAbout } from '../service/AboutService';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import About from '../models/AboutMode';

export default function EditAbout() {
	const [action1, setAction1] = useState(false);
	const [action2, setAction2] = useState(false);
	const router = useRouter();
	const aboutRef = useRef<any>(null);
	const [aboutGet, setAboutGet] = useState(null);

	const handler = async () => {
		setAction1(true);
	};

	useEffect(() => {
		async function updateAboutHandler() {
			const about = aboutRef.current.value;

			await fetch(process.env.BACKEND_URL + '/about', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'PUT',
				body: JSON.stringify({ newAbout: about }),
				credentials: 'include',
			})
				.then((res) => {
					if (res.ok) {
						console.log('ok');
					} else {
						false;
						console.log('ass');
					}
				})
				.then((d) => setAction2(!action2))
				.then((d) => setAction1(false));
		}
		action1 && updateAboutHandler();
	}, [action1]);

	useEffect(() => {
		const getHandler = async () => {
			const a = await fetch(
				process.env.BACKEND_URL + '/about',
				{
					headers: {
						'Content-Type':
							'application/json',
					},
					method: 'GET',
					credentials: 'include',
				},
			)
				.then((res) => res.json())
				.then((data) => setAboutGet(data))
				.then((d) => router.refresh());
		};
		getHandler();
	}, [action2]);

	return (
		<div className="w-[900px] h-[400px] items-center">
			<Card className="w-[900px] h-[450px] p-0">
				<CardHeader>
					<CardTitle>
						Editar Pagina Sobre
					</CardTitle>
				</CardHeader>
				<CardContent className="h-56 p-8">
					<CardDescription className="p-0 w-full h-full">
						<h1>
							{aboutGet &&
								aboutGet.about.value.toString()}
						</h1>
						<Textarea
							className="w-full h-full"
							ref={aboutRef}
						/>
					</CardDescription>
				</CardContent>
				<CardFooter className="p-8">
					<Button
						className="my-4"
						onClick={(e) => handler()}
					>
						Salvar
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
