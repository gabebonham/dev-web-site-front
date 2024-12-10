import Contact from '@/app/admin/contacts/_models/ContactModel';

export async function getAllContacts(): Promise<Contact[]> {
	const conts = await (
		await fetch(process.env.BACKEND_URL + '/contacts')
	).json();
	return conts;
}
