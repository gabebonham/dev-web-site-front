'use server';
import { cookies } from 'next/headers';
import Competence from '../_models/CompetenceModel';

export async function getAllCompetences(): Promise<Competence[]> {
	try {
		const a = (await (
			await fetch(process.env.BACKEND_URL + '/competences')
		).json()) as Competence[];
		return a;
	} catch (e) {
		return [];
	}
}

export async function getCompetenceById(id: number): Promise<Competence> {
	try {
		const a = await (
			await fetch(
				process.env.BACKEND_URL + '/competences/' + id,
				{
					headers: {
						'Content-Type':
							'application/json',
						Origin: 'https://dev-web-site-front-production.up.railway.app',
					},
					method: 'GET',
					credentials: 'include',
				},
			)
		).json();
		return a;
	} catch (e) {
		return null;
	}
}
export async function createCompetence(competence) {
	try {
		const competencesJson = await JSON.stringify(competence);
		const a = await (
			await fetch(process.env.BACKEND_URL + '/competences', {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: competencesJson,
				credentials: 'include',
			})
		).json();
		return a;
	} catch (e) {
		return [];
	}
}
export async function deleteCompetenceById(id: number) {
	const a = await cookies();
	console.log(a.getAll());
	try {
		const a = await (
			await fetch(
				process.env.BACKEND_URL + '/competences/' + id,
				{
					headers: {
						'Content-Type':
							'application/json',
					},
					method: 'DELETE',
					credentials: 'include',
				},
			)
		).json();
		return a;
	} catch (e) {
		return [];
	}
}
