'use client';
import {
	CardContent,
	CardFooter,
	CardHeader,
	Card,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateProject } from '../_service/ProjectsService';
import Project from '../_models/ProjectModel';

export default function EditProjectModal({
	b,
	open,
	canGetAll,
	getAll,
}: {
	b: any;
	open: (v: boolean) => void;
	canGetAll: boolean;
	getAll: (v: boolean) => void;
}) {
	const nameRef = useRef<any>(null);
	const descriptionRef = useRef<any>(null);
	const linkRef = useRef<any>(null);

	const [canUpdate, updateToggle] = useState(false);

	const [project, setProject] = useState(null);

	useEffect(() => {
		const update = async () => {
			await updateProject(project);

			open(false);
			getAll(!canGetAll);
			updateToggle(false);
		};
		canUpdate && update();
	}, [canUpdate]);

	const updateHandler = () => {
		b.name = nameRef.current.value || b.name;
		b.description = descriptionRef.current.value || b.description;
		b.link = linkRef.current.value || b.link;
		setProject(b);
		updateToggle(true);
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
								open(false)
							}
						>
							Fechar
						</Button>
						<Button
							onClick={(a) => {
								updateHandler();
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
