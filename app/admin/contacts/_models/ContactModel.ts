export default class Contact {
	id: number;
	platformName: string;
	platformUserPageLink: string;
	email: string;
	constructor(
		id: number,
		platformName: string,
		platformUserPageLink: string,
		email: string,
	) {
		this.id = id;
		this.platformName = platformName;
		this.platformUserPageLink = platformUserPageLink;
		this.email = email;
	}
}
