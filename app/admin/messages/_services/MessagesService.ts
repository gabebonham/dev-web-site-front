export async function getAllMessages(): Promise<
	{
		id: number;
		msg: string;
		email: string;
		scheduled: Date;
		createdAt: Date;
		isNew: boolean;
	}[]
> {
	const message = (await (
		await fetch(process.env.BACKEND_URL + '/messages', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json()) as {
		id: number;
		msg: string;
		email: string;
		scheduled: Date;
		createdAt: Date;
		isNew: boolean;
	}[];
	return message;
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
