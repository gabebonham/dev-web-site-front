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
import { useRouter } from 'next/navigation';
import Competence from '../_models/CompetenceModel';
import { deleteCompetenceById, getAllCompetences } from '../_services/CompetencesService';
import { useState } from 'react';

export async function getServerSideProps(){
	await 
}


export default function CompetencesTable({
	competences,
}: {
	competences: Competence[];
}) {
	const [data, setData] = useState([]);
	const router = useRouter();
	const deleteHandler = async (id: number) => {
		await deleteCompetenceById(id);
		router.push('/admin/competences');
	};
	const getHandler = async () => {
		const comp = await getAllCompetences();
		setData(comp)
		router.refresh();
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
				{data.length &&
					competences.map((b) => (
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
									onClick={() =>
										deleteHandler(
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
