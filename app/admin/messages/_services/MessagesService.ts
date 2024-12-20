export async function getAllMessages(setData) {
	await fetch(process.env.BACKEND_URL + '/messages', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}
export async function updateMessage(id: number) {
	await fetch(process.env.BACKEND_URL + '/messages/' + id, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		credentials: 'include',
	});
}
export async function deleteMessageById(id: number) {
	await fetch(process.env.BACKEND_URL + '/messages/' + id, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
		credentials: 'include',
	});
}
export async function storeMessage(message) {
	await fetch(process.env.BACKEND_URL + '/messages', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(message),
		credentials: 'include',
	});
}
