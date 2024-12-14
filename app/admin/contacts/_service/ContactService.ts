import Contact from '../_models/ContactModel';

export async function getAllContacts(): Promise<Contact[]> {
	try {
		const a = (await (
			await fetch(process.env.BACKEND_URL + '/contacts', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'GET',
				credentials: 'include',
			})
		).json()) as Contact[];
		return a;
	} catch (e) {
		return [];
	}
}

export async function getContactById(id: number): Promise<Contact> {
	try {
		return (await (
			await fetch(
				process.env.BACKEND_URL + '/contacts/' + id,
				{
					headers: {
						'Content-Type':
							'application/json',
					},
					method: 'GET',
					credentials: 'include',
				},
			)
		).json()) as Contact;
	} catch (e) {
		return null;
	}
}
export async function createContact(contact) {
	try {
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
	} catch (e) {
		return [];
	}
}
export async function deleteContactById(id: number) {
	try {
		console.log(id);
		const a = await fetch(
			process.env.BACKEND_URL + '/contacts/' + id,
			{
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'GET',
				credentials: 'include',
			},
		);
	} catch (e) {
		return [];
	}
}
