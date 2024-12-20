import SideBarComponent from '../_components/SideBarComponent';
import ContactsTable from './_components/ContactsTable';
import CreateContactComponent from './_components/CreateContactComponent';
import WrapComponent from './_components/WrapComponent';
import { getAllContacts } from './_service/ContactService';

export default async function ContactsPage() {
	return (
		<SideBarComponent>
			<WrapComponent />
		</SideBarComponent>
	);
}
