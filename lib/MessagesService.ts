'use client';
export async function storeMessageFromModal(message) {
	await fetch(process.env.BACKEND_URL + '/messages', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(message),
		credentials: 'include',
	});
}
