export default class Project {
	id: number;
	name: string;
	link: string;
	description: string;
	inDev: boolean;
	constructor(
		name: string,
		link: string,
		description: string,
		id: number,
		inDev: boolean,
	) {
		this.id = id;
		this.name = name;
		this.link = link;
		this.description = description;
		this.inDev = inDev;
	}
}
