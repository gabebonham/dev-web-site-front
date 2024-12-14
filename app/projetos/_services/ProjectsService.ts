import Project from '@/app/admin/projects/_models/ProjectModel';

export async function getAllProjects(): Promise<Project[]> {
	try {
		const backendUrl = process.env.BACKEND_URL as string;
		const projs = (await (
			await fetch(backendUrl + '/projects', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'GET',
				credentials: 'include',
			})
		).json()) as Project[];
		return projs;
	} catch (e) {
		return [];
	}
}
