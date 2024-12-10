export async function getAllContacts() {
	const a = await (
		await fetch(process.env.BACKEND_URL + '/contacts')
	).json();
	return a;
}

export async function getContactById(id) {
	return await (
		await fetch(process.env.BACKEND_URL + '/contacts/' + id)
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
			method: 'DELETE',
			credentials: 'include',
		},
	);
}
