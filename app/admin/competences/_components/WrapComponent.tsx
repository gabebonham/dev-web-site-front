'use client';
import { useState } from 'react';
import CompetencesTable from './CompetencesTable';
import CreateCompetenceComponent from './CreateCompetenceComponent';
export default function WrapComponent() {
	const [isOpen, open] = useState(false);
	const [isAction3, setAction3] = useState(false);
	return (
		<div>
			<CreateCompetenceComponent
				isOpen={isOpen}
				open={open}
				isAction3={isAction3}
				setAction3={setAction3}
			/>
			<CompetencesTable
				open={open}
				isOpen={isOpen}
				isAction3={isAction3}
				setAction3={setAction3}
			/>
		</div>
	);
}
