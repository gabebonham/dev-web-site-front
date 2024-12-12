'use client';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pencil, X } from 'lucide-react';
import Contact from '../_models/ContactModel';
import { deleteContactById } from '../_service/ContactService';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ContactsTable({ contacts }) {
	const router = useRouter();

	const deleteHandler = async (id) => {
		console.log(id);
		await deleteContactById(id);
		router.refresh();
	};
	return (
		<Table className="w-[700px]">
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">
						ID
					</TableHead>
					<TableHead>Plataforma</TableHead>
					<TableHead>Link Plataforma</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Excluir</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{contacts.map((b) => (
					<TableRow key={b.id}>
						<TableCell className="font-medium">
							{b.id}
						</TableCell>
						<TableCell>
							{b.platformName}
						</TableCell>
						<TableCell>
							{b.platformUserPageLink}
						</TableCell>
						<TableCell>{b.email}</TableCell>
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
