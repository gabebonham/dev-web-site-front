import Competence from '@/app/admin/competences/_models/CompetenceModel';

export async function getAllSkills(): Promise<Competence[]> {
	const skills = await (
		await fetch(process.env.BACKEND_URL + '/competences')
	).json();
	return skills;
}
