import { storeMessage } from '@/app/admin/messages/_services/MessagesService';
export async function storeMessageFromModal(message) {
	await storeMessage(message);
}
