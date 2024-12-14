import SideBarComponent from '../_components/SideBarComponent';
import ContactsTable from './_components/ContactsTable';
import CreateContactComponent from './_components/CreateContactComponent';
import Contact from './_models/ContactModel';
import { getAllContacts } from './_service/ContactService';

export default async function ContactsPage() {
	const contacts = (await getAllContacts()) || [];
	return (
		<SideBarComponent>
			<CreateContactComponent />
			{contacts.length && (
				<ContactsTable contacts={contacts} />
			)}
		</SideBarComponent>
	);
}
