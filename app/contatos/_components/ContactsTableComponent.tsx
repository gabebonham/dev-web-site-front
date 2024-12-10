import Contact from '@/app/admin/contacts/_models/ContactModel';
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
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactsTableComponent({
	contacts,
}: {
	contacts: Contact[];
}) {
	const getIcon = (contact) => {
		if (contact.platformName == 'Github') {
			return <Github />;
		}
		if (contact.platformName == 'Gmail') {
			return <Mail />;
		}
	};

	return (
		<Table className="w-[1000px]">
			<TableBody>
				{contacts.map((c) => (
					<TableRow key={c.id}>
						<TableCell>
							{getIcon(c)}
						</TableCell>
						<TableCell className="">
							{c.platformName}
						</TableCell>
						<TableCell>
							{c.platformUserPageLink ==
							'NDA' ? (
								<>
									Não
									contém
									link
									para a
									minha
									pagina
									da
									plataforma
								</>
							) : (
								<Link
									href={
										c.platformUserPageLink
									}
								>
									{
										c.platformUserPageLink
									}
								</Link>
							)}
						</TableCell>
						<TableCell>{c.email}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
