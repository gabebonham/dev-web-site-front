'use client';
import { useEffect, useState } from 'react';
import ContactsTable from './ContactsTable';
import { getAllContacts } from '../_service/ContactService';
import CreateContactComponent from './CreateContactComponent';

export default function WrapComponent() {
	const [data, setData] = useState([]);
	const [canGet, getAll] = useState(false);
	useEffect(() => {
		const get = async () => {
			await getAllContacts(setData);
		};
		get();
	}, [canGet]);
	return (
		<div>
			<CreateContactComponent
				getAll={getAll}
				canGetAll={canGet}
			/>
			{
				<ContactsTable
					contacts={data}
					getAll={getAll}
					canGetAll={canGet}
				/>
			}
		</div>
	);
}
