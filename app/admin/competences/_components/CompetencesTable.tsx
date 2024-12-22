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
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
	deleteCompetenceById,
	getAllCompetences,
} from '../_services/CompetencesService';
import Competence from '../_models/CompetenceModel';
import { useRouter } from 'next/navigation';

export default function CompetencesTable({ data }) {
	const [action, setAction] = useState(false);
	const [item, setItem] = useState(0);

	useEffect(() => {
		const deleteHandler = async () => {
			await deleteCompetenceById(item);
			setAction(false);
		};
		action && deleteHandler();
	}, [action]);

	const handler = async (id: number) => {
		setItem(id);
		setAction(true);
	};
	return (
		<Table className="w-[700px]">
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">
						ID
					</TableHead>
					<TableHead>Nome</TableHead>
					<TableHead>Porcentagem</TableHead>
					<TableHead>Excluir</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.length > 0 &&
					data.map((b) => (
						<TableRow key={b.id}>
							<TableCell className="font-medium">
								{b.id}
							</TableCell>
							<TableCell>
								{b.name}
							</TableCell>
							<TableCell>
								{b.rating}
							</TableCell>
							<TableCell>
								<Button
									onClick={(
										e,
									) =>
										handler(
											b.id,
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
	);
}
