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
	try {
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
	} catch (e) {
		return [];
	}
}
export async function updateMessage(id: number) {
	try {
		await fetch(process.env.BACKEND_URL + '/messages/' + id, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PUT',
			credentials: 'include',
		});
	} catch (e) {
		return [];
	}
}
export async function deleteMessageById(id: number) {
	try {
		await fetch(process.env.BACKEND_URL + '/messages/' + id, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'DELETE',
			credentials: 'include',
		});
	} catch (e) {
		return [];
	}
}
export async function storeMessage(message) {
	try {
		await fetch(process.env.BACKEND_URL + '/messages', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(message),
			credentials: 'include',
		});
	} catch (e) {
		return [];
	}
}
