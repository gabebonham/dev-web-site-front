'use client';
import { useEffect, useState } from 'react';
import CompetencesTable from './CompetencesTable';
import CreateCompetenceComponent from './CreateCompetenceComponent';
import { getAllCompetences } from '../_services/CompetencesService';
import {
	Table,
	TableBody,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
export default function WrapComponent() {
	const [isOpen, open] = useState(false);
	const [isAction, action] = useState(false);
	const [data, setData] = useState([]);
	useEffect(() => {
		async function a() {
			await getAllCompetences(setData);
		}
		a();
	}, [isOpen, isAction]);
	return (
		<div>
			<CreateCompetenceComponent
				open={open}
				isOpen={isOpen}
			/>
			<Table className="w-[700px]">
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">
							ID
						</TableHead>
						<TableHead>Nome</TableHead>
						<TableHead>
							Porcentagem
						</TableHead>
						<TableHead>Excluir</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.length > 0 &&
						data.map((b) => (
							<CompetencesTable
								b={b}
								t={isAction}
								trigger={action}
							/>
						))}
				</TableBody>
				<TableFooter></TableFooter>
			</Table>
		</div>
	);
}
