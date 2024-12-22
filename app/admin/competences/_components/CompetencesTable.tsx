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

export default function CompetencesTable({ b, trigger, t }) {
	const [action, setAction] = useState(false);
	const [item, setItem] = useState(0);

	useEffect(() => {
		const deleteHandler = async () => {
			await deleteCompetenceById(item);
			setAction(false);
			trigger(!t);
		};
		action && deleteHandler();
	}, [action]);

	const handler = async (id: number) => {
		setItem(id);
		setAction(true);
	};
	return (
		<TableRow key={b.id}>
			<TableCell className="font-medium">{b.id}</TableCell>
			<TableCell>{b.name}</TableCell>
			<TableCell>{b.rating}</TableCell>
			<TableCell>
				<Button onClick={(e) => handler(b.id)}>
					<X />
				</Button>
			</TableCell>
		</TableRow>
	);
}
