'use client';
import Competence from '../_models/CompetenceModel';
import cookie from 'js-cookie';
export async function getAllCompetences(): Promise<Competence[]> {
	try {
		const a = (await (
			await fetch(process.env.BACKEND_URL + '/competences', {
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
			})
		).json()) as Competence[];
		return a as Competence[];
	} catch (e) {
		return [] as Competence[];
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
export async function createCompetence(competence, token) {
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
