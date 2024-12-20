import SideBarComponent from '../_components/SideBarComponent';
import MessagesTable from './_components/MessagesTable';
import { getAllMessages } from './_services/MessagesService';

export default async function MessagesPage() {
	return (
		<SideBarComponent>
			<MessagesTable />
		</SideBarComponent>
	);
}
