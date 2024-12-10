export default class Blog {
	id: number;
	title: string;
	body: string;
	imageName: string;

	constructor(
		id: number,
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
