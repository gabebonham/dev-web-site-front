import SideBarComponent from '../_components/SideBarComponent';
import ContactsTable from './_components/ContactsTable';
import CreateContactComponent from './_components/CreateContactComponent';
import Contact from './_models/ContactModel';
import { getAllContacts } from './_service/ContactService';

export default async function ContactsPage() {
	const contacts: Contact[] = (await getAllContacts()) as Contact[];
	const contactList = contacts.map((c) => ({
		id: c.id,
		platform_name: c.platformName,
		platform_user_page_link: c.platformUserPageLink,
		email: c.email,
	}));
	return (
		<SideBarComponent>
			<CreateContactComponent />
			<ContactsTable contacts={contactList} />
		</SideBarComponent>
	);
}
