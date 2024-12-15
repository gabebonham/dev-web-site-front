'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { createCompetence } from '../_services/CompetencesService';

export default function CreateCompetenceComponent() {
	const router = useRouter();
	const [isOpen, open] = useState(false);
	const nameRef = useRef<any>(null);
	const ratingRef = useRef<any>(null);

	const createNewCompetence = async () => {
		const name = nameRef.current.value;
		const rating = Number.parseInt(ratingRef.current.value);

		await createCompetence({ name: name, rating: rating });
		open(false);
		router.refresh();
	};

	return isOpen ? (
		<div>
			<div className="top-0 left-0 absolute bg-black size-full z-10 sepia-0 opacity-30"></div>
			<Card className="top-14 left-14 absolute z-20 size-11/12 h-5/6 opacity-1">
				<CardHeader>Criar Competencia</CardHeader>
				<CardContent>
					<label>Nome</label>
					<Input ref={nameRef} className="h-6" />
					<label>Porcentagem</label>
					<Input
						ref={ratingRef}
						className="h-6"
					/>
				</CardContent>
				<CardFooter>
					<Button
						onClick={(e) =>
							createNewCompetence()
						}
						className="mr-4"
					>
						Salvar
					</Button>
					<Button onClick={(e) => open(false)}>
						Fechar
					</Button>
				</CardFooter>
			</Card>
		</div>
	) : (
		<Button onClick={(e) => open(true)}>
			Criar uma Competencia
		</Button>
	);
}
