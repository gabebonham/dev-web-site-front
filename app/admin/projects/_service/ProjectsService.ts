'use client';
import cookie from 'js-cookie';
async function getAllProjects(setData) {
	await fetch(process.env.BACKEND_URL + '/projects', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: await cookie.get('Authorization'),
		},
		method: 'GET',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}

async function createProject(project) {
	const projectJson = await JSON.stringify(project);
	console.log(projectJson);
	await fetch(process.env.BACKEND_URL + '/projects', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: await cookie.get('Authorization'),
		},
		method: 'POST',
		body: projectJson,
		credentials: 'include',
	});
}
async function updateProject(project) {
	const projectJson = JSON.stringify(project);
	await fetch(process.env.BACKEND_URL + '/projects', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: await cookie.get('Authorization'),
		},
		method: 'PUT',
		body: projectJson,
		credentials: 'include',
	});
}
async function deleteProjectById(id: number) {
	await fetch(process.env.BACKEND_URL + '/projects/' + id, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: await cookie.get('Authorization'),
		},
		method: 'DELETE',
		credentials: 'include',
	});
}
export { getAllProjects, createProject, updateProject, deleteProjectById };
