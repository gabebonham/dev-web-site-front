import Contact from '../_models/ContactModel';

export async function getAllContacts(): Promise<Contact[]> {
	const a = await (
		await fetch(process.env.BACKEND_URL + '/contacts', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json();
	return a;
}

export async function getContactById(id) {
	return await (
		await fetch(process.env.BACKEND_URL + '/contacts/' + id, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json();
}
export async function createContact(contact) {
	const contactJson = await JSON.stringify(contact);
	const a = await fetch(process.env.BACKEND_URL + '/contacts', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: contactJson,
		credentials: 'include',
	});
	return a;
}
export async function deleteContactById(id: number) {
	console.log(id);
	const a = await fetch(
		process.env.BACKEND_URL + '/contacts/' + id.toString(),
		{
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		},
	);
}
