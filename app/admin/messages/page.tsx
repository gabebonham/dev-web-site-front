import SideBarComponent from '../_components/SideBarComponent';
import MessagesTable from './_components/MessagesTable';
import { getAllMessages } from './_services/MessagesService';

export default async function MessagesPage() {
	const messages = (await getAllMessages()) as {
		id: number;
		msg: string;
		email: string;
		scheduled: Date;
		createdAt: Date;
		isNew: boolean;
	}[];
	const messageList = messages.map((c) => ({
		id: c.id,
		msg: c.msg,
		email: c.email,
		scheduled: c.scheduled,
		createdAt: Date.now(),
		isNew: c.isNew,
	}));
	return (
		<SideBarComponent>
			<div>
				{messageList.length != 0 && (
					<MessagesTable messages={messageList} />
				)}
			</div>
		</SideBarComponent>
	);
}
