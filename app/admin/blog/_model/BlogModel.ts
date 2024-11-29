import { ImgHTMLAttributes } from 'react';

export default class Blog {
	id: string;
	title: string;
	body: string;
	imageName: string;

	constructor(
		id: string,
		title: string,
		body: string,
		imageName: string,
	) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.imageName = imageName;
	}
}

export class CreateBlog {
	title: string;
	body: string;
	imageName: string;

	constructor(title: string, body: string, imageName: string) {
		this.title = title;
		this.body = body;
		this.imageName = imageName;
	}
}
