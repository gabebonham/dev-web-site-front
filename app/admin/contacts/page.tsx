import SideBarComponent from '../_components/SideBarComponent';
import ContactsTable from './_components/ContactsTable';
import CreateContactComponent from './_components/CreateContactComponent';
import Contact from './_models/ContactModel';
import { getAllContacts } from './_service/ContactService';

export default async function ContactsPage() {
	const contacts = ((await getAllContacts()) || []) as Contact[];
	const contactList = contacts.map((c) => ({
		id: c.id,
		platformName: c.platformName,
		platformUserPageLink: c.platformUserPageLink,
		email: c.email,
	}));
	return (
		<SideBarComponent>
			<CreateContactComponent />
			{contacts.length != 0 && (
				<ContactsTable contacts={contacts} />
			)}
		</SideBarComponent>
	);
}
