'use client';
import { useEffect, useRef, useState } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { DatePicker } from './DatePicker';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { storeMessageFromModal } from '@/lib/MessagesService';
import { fallbackModeToStaticPathsResult } from 'next/dist/lib/fallback';

export default function ScheduleModal({
	open,
}: {
	open: (v: boolean) => void;
}) {
	const [date, setDate] = useState<Date>();
	const obsRef = useRef<any>(null);
	const emailRef = useRef<any>(null);
	document.body.classList.add('overflow-y-hidden');
	const [canSend, send] = useState(false);
	useEffect(() => {
		const sendEmailHandler = async () => {
			const email = emailRef.current.value || '';
			const obs = obsRef.current.value || '';
			await storeMessageFromModal({
				email: email,
				msg: obs,
				scheduled: date,
			});
			open(false);
			send(false);
		};
		canSend && sendEmailHandler();
	}, [canSend]);

	return (
		<div className="absolute justify-items-center bg-[rgba(0,0,0,0.2)] z-50 w-full h-full">
			<Card className=" mt-36 w-[1000px] h-[400px] z-100">
				<CardHeader>
					<CardTitle>
						Mande um Email agendando uma
						reunião.
					</CardTitle>
					<CardDescription className="text-red-600">
						Fique atento(a) ao seu email.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<CardDescription>
						<div className="flex flex-row items-center gap-8 mb-8">
							Data
							<DatePicker
								setDateSource={
									setDate
								}
							/>
							Email
							<Input ref={emailRef} />
						</div>
						Observações
						<Textarea ref={obsRef} />
					</CardDescription>
				</CardContent>
				<CardFooter>
					<Button
						onClick={(e) => {
							open(false);
							document.body.classList.remove(
								'overflow-y-hidden',
							);
						}}
					>
						Fechar
					</Button>
					<Button
						onClick={(e) => send(true)}
						className="ml-4"
					>
						Agendar
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
