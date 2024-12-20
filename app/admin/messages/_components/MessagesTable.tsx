'use client';
import {
	Table,
	TableBody,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Check, CircleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
	getAllMessages,
	storeMessage,
	updateMessage,
} from '../_services/MessagesService';
import { useRouter } from 'next/navigation';

export default function MessagesTable() {
	const [data, setData] = useState([]);
	const [id, setId] = useState(0);
	const [message, setMessage] = useState('');
	const [canUpdate, update] = useState(false);
	const updateHandler = async (id) => {
		setId(id);
		update(true);
	};
	useEffect(() => {
		const get = async () => {
			await getAllMessages(setData);
		};
		const update = async () => {
			await updateMessage(id);
		};

		canUpdate && update();
		get();
	}, [canUpdate]);
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
					{data.map((m) => (
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
