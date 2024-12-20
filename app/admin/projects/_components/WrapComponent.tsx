'use client';

import { useEffect, useState } from 'react';
import CreateProjectComponent from './CreateProjectComponent';
import TableComponent from './TableComponents';
import { getAllProjects } from '../_service/ProjectsService';

export default function WrapComponent() {
	const [canGetAll, getAll] = useState(false);
	const [data, setData] = useState([]);
	useEffect(() => {
		const get = async () => {
			await getAllProjects(setData);
		};
		get();
	}, [canGetAll]);
	return (
		<div>
			<CreateProjectComponent
				canGetAll={canGetAll}
				getAll={getAll}
			/>
			{data.length && (
				<TableComponent
					projects={data}
					getAll={getAll}
					canGetAll={canGetAll}
				/>
			)}
		</div>
	);
}
