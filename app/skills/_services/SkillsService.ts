import Competence from '@/app/admin/competences/_models/CompetenceModel';

export async function getAllSkills(): Promise<Competence[]> {
	try {
		const skills = (await (
			await fetch(process.env.BACKEND_URL + '/competences', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'GET',
				credentials: 'include',
			})
		).json()) as Competence[];
		return skills;
	} catch (e) {
		return [];
	}
}
