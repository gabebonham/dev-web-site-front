import Project from '../_models/ProjectModel';

async function getAllProjects(): Promise<Project[]> {
	const p = await (
		await fetch('http://localhost:3001/api/projects')
	).json();
	console.log(p);
	return p;
}
async function getProjectById(id): Promise<Project> {
	return await (
		await fetch('http://localhost:3001/api/projects/' + id)
	).json();
}
async function createProject(project) {
	const projectJson = await JSON.stringify(project);
	console.log(projectJson);
	const a = await fetch('http://localhost:3001/api/projects', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: projectJson,
		credentials: 'include',
	});
}
async function updateProject(project) {
	const projectJson = await JSON.stringify(project);
	await fetch('http://localhost:3001/api/projects', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		body: projectJson,
		credentials: 'include',
	});
}
async function deleteProjectById(id: string) {
	const a = await fetch(`http://localhost:3001/api/projects/${id}`, {
		method: 'DELETE',
		credentials: 'include',
	});
}
export {
	getAllProjects,
	getProjectById,
	createProject,
	updateProject,
	deleteProjectById,
};
