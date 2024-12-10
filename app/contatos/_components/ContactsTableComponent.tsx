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
		if (contact.platform_name == 'Github') {
			return <Github />;
		}
		if (contact.platform_name == 'Gmail') {
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
							{c.platform_name}
						</TableCell>
						<TableCell>
							{c.platform_user_page_link ==
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
										c.platform_user_page_link
									}
								>
									{
										c.platform_user_page_link
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
