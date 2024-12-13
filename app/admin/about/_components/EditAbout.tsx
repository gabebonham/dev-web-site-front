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
import { useRef } from 'react';
import { updateAbout } from '../service/AboutService';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import About from '../models/AboutMode';

export default function EditAbout({ about }: { about: { about: About } }) {
	const router = useRouter();
	const aboutRef = useRef<any>(null);
	const update = async () => {
		await updateAbout(aboutRef.current.value);
		router.refresh();
	};
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
						<h1>{about.about.value}</h1>
						<Textarea
							className="w-full h-full"
							ref={aboutRef}
						/>
					</CardDescription>
				</CardContent>
				<CardFooter className="p-8">
					<Button
						className="my-4"
						onClick={(e) => update()}
					>
						Salvar
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
