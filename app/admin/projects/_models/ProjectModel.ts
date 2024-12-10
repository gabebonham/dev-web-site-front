export default class Project {
	id: number;
	name: string;
	link: string;
	description: string;
	constructor(
		name: string,
		link: string,
		description: string,
		id: number,
	) {
		this.id = id;
		this.name = name;
		this.link = link;
		this.description = description;
	}
}
