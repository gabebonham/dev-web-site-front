'use client';
export async function getAllContacts(setData) {
	await fetch(process.env.BACKEND_URL + '/contacts', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}

export async function createContact(contact) {
	const contactJson = await JSON.stringify(contact);
	await fetch(process.env.BACKEND_URL + '/contacts', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: contactJson,
		credentials: 'include',
	});
}
export async function deleteContactById(id: number) {
	await fetch(process.env.BACKEND_URL + '/contacts/' + id, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
		credentials: 'include',
	});
}
