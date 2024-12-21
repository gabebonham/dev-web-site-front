'use client';
import cookiess from 'js-cookie';
export async function getAbout(setData) {
	await fetch(process.env.BACKEND_URL + '/about', {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin':
				'https://dev-web-site-front-production.up.railway.app',
			authorization: 'my custom header value',
			'Access-Control-Allow-Headers':
				'authorization, Content-Type, Access-Control-Allow-Methods',
			Accept: 'application/json',
			'Access-Control-Allow-Methods':
				'GET, POST, PUT, DELETE, OPTIONS,PATCH',
		},
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((d) => setData(d));
}
