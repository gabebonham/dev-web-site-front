import SideBarComponent from '../_components/SideBarComponent';
import EditAbout from './_components/EditAbout';
import { getAbout } from './service/AboutService';

export default async function AboutPage() {
	const about = await getAbout();
	return (
		<SideBarComponent>
			<EditAbout about={about} />
		</SideBarComponent>
	);
}