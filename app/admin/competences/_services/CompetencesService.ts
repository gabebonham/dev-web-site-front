import Competence from '../_models/CompetenceModel';

export async function getAllCompetences(): Promise<Competence[]> {
	const a = await (
		await fetch(process.env.BACKEND_URL + '/competences')
	).json();
	return a;
}

export async function getCompetenceById(id) {
	return await (
		await fetch(process.env.BACKEND_URL + '/competences/' + id, {
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
	const a = await fetch(process.env.BACKEND_URL + '/competences', {
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
		process.env.BACKEND_URL + '/competences/' + id.toString(),
		{
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'DELETE',
			credentials: 'include',
		},
	);
}
