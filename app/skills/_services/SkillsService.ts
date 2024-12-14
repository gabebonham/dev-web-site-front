import Competence from '@/app/admin/competences/_models/CompetenceModel';

export async function getAllSkills() {
	try {
		const skills = await (
			await fetch(process.env.BACKEND_URL + '/competences', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'GET',
				credentials: 'include',
			})
		).json();
		return skills;
	} catch (e) {
		return [];
	}
}
