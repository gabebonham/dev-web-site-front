import Contact from '@/app/admin/contacts/_models/ContactModel';

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
