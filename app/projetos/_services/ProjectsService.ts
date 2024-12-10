import Project from '@/app/admin/projects/_models/ProjectModel';

export async function getAllProjects(): Promise<Project[]> {
	const backendUrl = process.env.BACKEND_URL as string;
	const projs = await (await fetch(backendUrl + '/projects')).json();
	return projs;
}
