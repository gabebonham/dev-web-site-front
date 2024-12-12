import LayoutComponent from '@/components/LayoutComponent';
import { getAllContacts } from './_services/ContactsService';
import TableComponent from '../admin/projects/_components/TableComponents';
import ContactsTableComponent from './_components/ContactsTableComponent';
import Contact from '../admin/contacts/_models/ContactModel';
import Image from 'next/image';
import img from '@/public/contact.jpeg';

export default async function ContactPage() {
	const contacts = (await getAllContacts()).map((y) => ({
		id: y.id,
		platformName: y.platformName,
		platformUserPageLink: y.platformUserPageLink,
		email: y.email,
	}));
	return (
		<LayoutComponent>
			<div className="mb-8 p-16 shadow-2xl shadow-black bg-[rgba(0,0,0,0.2)] ">
				<Image
					src={img}
					alt="img"
					className="absolute right-0 rounded-2xl pr-4 hover:animate-pulse2 opacity-50 size-48"
				/>

				<div className="flex">
					<h1 className="ml-80 text-5xl ">
						Plataformas
					</h1>
					<p className="pl-36 w-[400px] text-end text-red-700 text-lg drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,1)]">
						Caso tenha interesse e queira
						entrar em contato comigo, peço
						que use o meu email.
					</p>
				</div>
				{contacts.length != 0 && (
					<ContactsTableComponent
						contacts={contacts}
					/>
				)}
			</div>
		</LayoutComponent>
	);
}
