import Project from '../_models/ProjectModel';

async function getAllProjects(): Promise<Project[]> {
	try {
		const p = (await (
			await fetch(process.env.BACKEND_URL + '/projects', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'GET',
				credentials: 'include',
			})
		).json()) as Project[];
		console.log(p);
		return p;
	} catch (e) {
		return [];
	}
}
async function getProjectById(id: number): Promise<Project> {
	try {
		return (await (
			await fetch(
				process.env.BACKEND_URL + '/projects/' + id,
				{
					headers: {
						'Content-Type':
							'application/json',
					},
					method: 'GET',
					credentials: 'include',
				},
			)
		).json()) as Project;
	} catch (e) {
		return null;
	}
}
async function createProject(project) {
	try {
		const projectJson = await JSON.stringify(project);
		console.log(projectJson);
		const a = await fetch(process.env.BACKEND_URL + '/projects', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: projectJson,
			credentials: 'include',
		});
	} catch (e) {
		return [];
	}
}
async function updateProject(project) {
	try {
		const projectJson = await JSON.stringify(project);
		await fetch(process.env.BACKEND_URL + '/projects', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PUT',
			body: projectJson,
			credentials: 'include',
		});
	} catch (e) {
		return [];
	}
}
async function deleteProjectById(id: number) {
	try {
		const a = await fetch(
			process.env.BACKEND_URL + '/projects/' + id,
			{
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'DELETE',
				credentials: 'include',
			},
		);
	} catch (e) {
		return [];
	}
}
export {
	getAllProjects,
	getProjectById,
	createProject,
	updateProject,
	deleteProjectById,
};
