'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import Contact from '../_models/ContactModel';
import { createContact } from '../_service/ContactService';

export default function CreateContactComponent() {
	const router = useRouter();
	const [isOpen, open] = useState(false);
	const platformRef = useRef<any>(null);
	const platformLinkRef = useRef<any>(null);
	const emailRef = useRef<any>(null);

	const createNewContact = async () => {
		const platform = platformRef.current.value;
		const platformLink = platformLinkRef.current.value;
		const email = emailRef.current.value;
		await createContact({
			platform: platform,
			platformUserPageLink: platformLink,
			email: email,
		});
		open(false);
		router.refresh();
	};

	return isOpen ? (
		<div>
			<div className="top-0 left-0 absolute bg-black size-full z-10 sepia-0 opacity-30"></div>
			<Card className="top-14 left-14 absolute z-20 size-11/12 h-5/6 opacity-1">
				<CardHeader>Criar Contato</CardHeader>
				<CardContent>
					<label>Plataforma</label>
					<Input
						ref={platformRef}
						className="h-6"
					/>
					<label>Link da Plataforma</label>
					<Input
						ref={platformLinkRef}
						className="h-6"
					/>
					<label>Email</label>
					<Input ref={emailRef} className="h-6" />
				</CardContent>
				<CardFooter>
					<Button
						onClick={(e) =>
							createNewContact()
						}
						className="mr-4"
					>
						Salvar
					</Button>
					<Button onClick={(e) => open(false)}>
						Fechar
					</Button>
				</CardFooter>
			</Card>
		</div>
	) : (
		<Button onClick={(e) => open(true)}>Criar um Contato</Button>
	);
}
