'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { createProject } from '../_service/ProjectsService';
import Project from '../_models/ProjectModel';

export default function CreateProjectComponent() {
	const router = useRouter();
	const [isOpen, open] = useState(false);
	const nameRef = useRef<any>(null);
	const descriptionRef = useRef<any>(null);
	const linkRef = useRef<any>(null);

	const createNewProject = async () => {
		const name = nameRef.current.value;
		const description = descriptionRef.current.value;
		const link = linkRef.current.value;
		await createProject(new Project(name, link, description, 1));
		open(false);
		router.refresh();
	};

	return isOpen ? (
		<div>
			<div className="top-0 left-0 absolute bg-black size-full z-10 sepia-0 opacity-30"></div>
			<Card className="top-14 left-14 absolute z-20 size-11/12 h-5/6 opacity-1">
				<CardHeader>Criar Projeto</CardHeader>
				<CardContent>
					<label>Nome</label>
					<Input ref={nameRef} className="h-6" />
					<label>Link</label>
					<Input ref={linkRef} className="h-6" />
					<label>Descrição</label>
					<Textarea ref={descriptionRef} />
				</CardContent>
				<CardFooter>
					<Button
						onClick={(e) =>
							createNewProject()
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
		<Button onClick={(e) => open(true)}>Criar um Projeto</Button>
	);
}
