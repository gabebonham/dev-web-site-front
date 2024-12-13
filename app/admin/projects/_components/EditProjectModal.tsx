'use client';
import {
	CardContent,
	CardFooter,
	CardHeader,
	Card,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteProjectById, updateProject } from '../_service/ProjectsService';
import Project from '../_models/ProjectModel';
import { TableCell, TableRow } from '@/components/ui/table';
import { Pencil, X } from 'lucide-react';

export default function EditProjectModal({
	b,
	open,
}: {
	b: Project;
	open: Function;
}) {
	const router = useRouter();

	const nameRef = useRef<any>(null);
	const descriptionRef = useRef<any>(null);
	const linkRef = useRef<any>(null);

	const updateProjectById = async (proj: Project) => {
		proj.name = nameRef.current.value || proj.name;
		proj.description =
			descriptionRef.current.value || proj.description;
		proj.link = linkRef.current.value || proj.link;
		await updateProject(proj);
		router.refresh();
	};

	return (
		<div>
			<div>
				<div className="top-0 left-0 absolute bg-black size-full z-10 sepia-0 opacity-30"></div>

				<Card className="top-14 left-14 absolute z-20 size-11/12 h-5/6 opacity-1">
					<CardHeader>
						<Input
							ref={nameRef}
							placeholder={b.name}
							type="text"
						/>
					</CardHeader>
					<CardContent>
						<Input
							ref={descriptionRef}
							placeholder={
								b.description
							}
							type="text"
						/>
					</CardContent>
					<CardContent>
						<Input
							ref={linkRef}
							placeholder={b.link}
							type="text"
						/>
					</CardContent>
					<CardFooter>
						<Button
							onClick={(a) =>
								open((e) => !e)
							}
						>
							Fechar
						</Button>
						<Button
							onClick={(a) => {
								open((e) => !e);
								updateProjectById(
									b,
								);
							}}
						>
							Salvar
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
