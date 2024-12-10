export async function getAllCompetences() {
	const a = await (
		await fetch('http://localhost:3001/api/competences')
	).json();
	return a;
}

export async function getCompetenceById(id) {
	return await (
		await fetch('http://localhost:3001/api/competences/' + id, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			credentials: 'include',
		})
	).json();
}
export async function createCompetence(competence) {
	const competencesJson = await JSON.stringify(competence);
	const a = await fetch('http://localhost:3001/api/competences', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: competencesJson,
		credentials: 'include',
	});
	return a;
}
export async function deleteCompetenceById(id: number) {
	const a = await fetch(
		'http://localhost:3001/api/competences/' + id.toString(),
		{
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'DELETE',
			credentials: 'include',
		},
	);
}
