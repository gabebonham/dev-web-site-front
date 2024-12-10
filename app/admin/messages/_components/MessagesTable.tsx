'use client';
import { MenubarCheckboxItem } from '@/components/ui/menubar';
import {
	Table,
	TableBody,
	TableCaption,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Check, CircleAlert } from 'lucide-react';
import { useState } from 'react';
import { updateMessage } from '../_services/MessagesService';
import { useRouter } from 'next/navigation';

export default function MessagesTable({ messages }) {
	const router = useRouter();
	const [message, setMessage] = useState('');
	const updateHandler = async (id) => {
		await updateMessage(id);
		router.refresh();
	};
	return (
		<div className="w-auto">
			<Table className="w-[850px]">
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">
							ID
						</TableHead>
						<TableHead>Email</TableHead>
						<TableHead className="w-[200px]">
							Mensagem
						</TableHead>
						<TableHead>
							Agendamento proposto
						</TableHead>
						<TableHead>Novo</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{messages.map((m) => (
						<TableRow key={m.id}>
							<TableHead
								className="cursor-pointer"
								onClick={(e) =>
									setMessage(
										m.msg,
									)
								}
							>
								{m.id}
							</TableHead>
							<TableHead>
								{m.email}
							</TableHead>
							<TableHead>
								{m.msg.substring(
									0,
									80,
								)}
							</TableHead>
							<TableHead>
								{m.scheduled}
							</TableHead>
							<TableHead>
								{m.isNew ? (
									<CircleAlert
										className="cursor-pointer"
										onClick={(
											e,
										) =>
											updateHandler(
												m.id,
											)
										}
										color="#d31717"
									/>
								) : (
									<Check color="#1bd317" />
								)}
							</TableHead>
						</TableRow>
					))}
				</TableBody>
				<TableFooter></TableFooter>
			</Table>
			<div className="p-8 bg-white w-[400px]">
				<p className="text-wrap text-pretty w-[400px] ">
					{message}
				</p>
			</div>
		</div>
	);
}
