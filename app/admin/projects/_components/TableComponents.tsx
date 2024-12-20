'use client';
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Project from '../_models/ProjectModel';
import { Button } from '@/components/ui/button';
import { deleteProjectById, updateProject } from '../_service/ProjectsService';
import { Pencil, X } from 'lucide-react';
import EditProjectModal from './EditProjectModal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TableComponent({ projects, getAll, canGetAll }) {
	const [project, setProject] = useState(null);
	const [isOpen, open] = useState(false);
	const [id, setId] = useState(0);
	const [canDelete, deleteToggle] = useState(false);
	const deleteHandler = async (id: number) => {
		setId(id);
		deleteToggle(true);
	};

	useEffect(() => {
		const del = async () => {
			await deleteProjectById(id);
			deleteToggle(false);
			open(false);
			getAll(!canGetAll);
		};

		canDelete && del();
	}, [canDelete]);
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
										setProject(
											p,
										);
										open(
											true,
										);
									}}
								>
									<Pencil />
								</Button>
							</TableCell>
							<TableCell>
								<Button
									onClick={() =>
										deleteHandler(
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

			{isOpen && (
				<EditProjectModal
					getAll={getAll}
					canGetAll={canGetAll}
					b={project}
					open={open}
				/>
			)}
		</div>
	);
}
