'use client';
import Project from '@/app/admin/projects/_models/ProjectModel';

export async function getAllProjects(setData) {
	const backendUrl = process.env.BACKEND_URL as string;

	await fetch(backendUrl + '/projects', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}
