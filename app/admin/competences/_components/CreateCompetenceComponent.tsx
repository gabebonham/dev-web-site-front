'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useEffect, useRef, useState } from 'react';
import { createCompetence } from '../_services/CompetencesService';
import Cookie from 'js-cookie';
import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';

export default function CreateCompetenceComponent({
	isAction3,
	setAction3,
	isOpen,
	open,
}) {
	const nameRef = useRef<any>(null);
	const ratingRef = useRef<any>(null);
	const [action1, setAction1] = useState(false);
	const handler = async () => {
		await setAction1(true);
	};
	useEffect(() => {
		async function createCompetenceH() {
			const competencesJson = {
				name: nameRef.current.value,
				rating: parseInt(ratingRef.current.value),
			};

			await createCompetence(competencesJson);
			setAction1(false);
			setAction3(!isAction3);
		}
		action1 &&
			nameRef.current != null &&
			ratingRef.current != null &&
			createCompetenceH();
	}, [action1]);

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
						onClick={(e) => handler()}
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
