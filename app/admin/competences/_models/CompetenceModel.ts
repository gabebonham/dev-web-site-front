export default class Competence {
	id: number;
	name: string;
	rating: number;

	constructor(id: number, name: string, rating: number) {
		this.id = id;
		this.name = name;
		this.rating = rating;
	}
}
