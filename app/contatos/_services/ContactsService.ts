import Contact from '@/app/admin/contacts/_models/ContactModel';

export async function getAllContacts(): Promise<Contact[]> {
	const conts = (await (
		await fetch(process.env.BACKEND_URL + '/contacts', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json()) as Contact[];
	return conts;
}
