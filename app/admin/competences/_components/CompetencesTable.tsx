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
import { getAllCompetences } from '../_services/CompetencesService';
import Competence from '../_models/CompetenceModel';
import { useRouter } from 'next/navigation';

export default function CompetencesTable({
	setAction3,
	isAction3,
	open,
	isOpen,
}) {
	const router = useRouter();
	const [action, setAction] = useState(false);
	const [item, setItem] = useState(0);
	const [c, setC] = useState([]);

	useEffect(() => {
		const deleteHandler = async (id: number) => {
			await fetch(
				process.env.BACKEND_URL + '/competences/' + id,
				{
					headers: {
						'Content-Type':
							'application/json',
					},
					method: 'DELETE',
					credentials: 'include',
				},
			)
				.then((d) => setAction3(!isAction3))
				.then((d) => setAction(false));
		};
		action && deleteHandler(item);
	}, [action]);

	useEffect(() => {
		async function a() {
			await fetch(process.env.BACKEND_URL + '/competences', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'GET',
				credentials: 'include',
			})
				.then((res) => res.json())
				.then((data) => {
					setC(data);
				})
				.then((data) => {
					router.refresh();
				});
		}
		a();
	}, [isAction3]);
	const handler = async (id: number) => {
		await setItem(id);
		await setAction(true);
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
				{c.length > 0 &&
					c.map((b) => (
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
