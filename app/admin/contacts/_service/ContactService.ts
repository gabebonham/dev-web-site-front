export async function getAllContacts() {
	const a = await (
		await fetch('http://localhost:3001/api/contacts')
	).json();
	return a;
}

export async function getContactById(id) {
	return await (
		await fetch('http://localhost:3001/api/contacts/' + id)
	).json();
}
export async function createContact(contact) {
	const contactJson = await JSON.stringify(contact);
	const a = await fetch('http://localhost:3001/api/contacts', {
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
		'http://localhost:3001/api/contacts/' + id.toString(),
		{
			method: 'DELETE',
			credentials: 'include',
		},
	);
}
