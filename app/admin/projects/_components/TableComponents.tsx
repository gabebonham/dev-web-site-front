'use client';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Project from '../_models/ProjectModel';
import { Button } from '@/components/ui/button';
import { deleteProjectById } from '../_service/ProjectsService';
import { Pencil, X } from 'lucide-react';
import EditProjectModal from './EditProjectModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TableComponent({ projects }: { projects: Project[] }) {
	const router = useRouter();
	const [isOpen, open] = useState(false);
	const [project, setProject] = useState(null);
	const deleteProject = async (id: number) => {
		await deleteProjectById(id);
		open(false);
		router.refresh();
	};
	return (
		<div>
			<Table className="w-full">
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">
							ID
						</TableHead>
						<TableHead>Nome</TableHead>
						<TableHead>Descrição</TableHead>
						<TableHead>Link</TableHead>
						<TableHead>Editar</TableHead>
						<TableHead>Excluir</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{projects.map((p) => (
						<TableRow key={p.id}>
							<TableCell className="font-medium">
								{p.id}
							</TableCell>
							<TableCell>
								{p.name}
							</TableCell>
							<TableCell>
								{p.description}
							</TableCell>
							<TableCell>
								{p.link}
							</TableCell>
							<TableCell>
								<Button
									onClick={(
										e,
									) => {
										open(
											true,
										);
										setProject(
											p,
										);
									}}
								>
									<Pencil />
								</Button>
							</TableCell>
							<TableCell>
								<Button
									onClick={() =>
										deleteProject(
											p.id,
										)
									}
								>
									<X />
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter></TableFooter>
			</Table>

			{isOpen && <EditProjectModal b={project} open={open} />}
		</div>
	);
}
