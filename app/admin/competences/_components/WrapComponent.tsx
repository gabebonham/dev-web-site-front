'use client';
import { useEffect, useState } from 'react';
import CompetencesTable from './CompetencesTable';
import CreateCompetenceComponent from './CreateCompetenceComponent';
import { getAllCompetences } from '../_services/CompetencesService';
export default function WrapComponent() {
	const [isOpen, open] = useState(false);
	const [data, setData] = useState([]);
	useEffect(() => {
		async function a() {
			await getAllCompetences(setData);
		}
		a();
	}, [isOpen]);
	return (
		<div>
			<CreateCompetenceComponent
				open={open}
				isOpen={isOpen}
			/>
			<CompetencesTable data={data} />
		</div>
	);
}
