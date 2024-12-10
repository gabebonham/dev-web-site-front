export default class Contact {
	id: number;
	platform_name: string;
	platform_user_page_link: string;
	email: string;
	constructor(
		id: number,
		platformName: string,
		platformUserPageLink: string,
		email: string,
	) {
		this.id = id;
		this.platform_name = platformName;
		this.platform_user_page_link = platformUserPageLink;
		this.email = email;
	}
}
