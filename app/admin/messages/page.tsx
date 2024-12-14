import SideBarComponent from '../_components/SideBarComponent';
import MessagesTable from './_components/MessagesTable';
import { getAllMessages } from './_services/MessagesService';

export default async function MessagesPage() {
	const messages = (await getAllMessages()) || [];
	return (
		<SideBarComponent>
			<div>
				{messages.length && (
					<MessagesTable messages={messages} />
				)}
			</div>
		</SideBarComponent>
	);
}
