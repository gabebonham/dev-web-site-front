import SideBarComponent from '../_components/SideBarComponent';
import EditAbout from './_components/EditAbout';
import About from './models/AboutMode';
import { getAbout } from './service/AboutService';

export default async function AboutPage() {
	const about = (await getAbout()) as About;
	return (
		<SideBarComponent>
			{about && <EditAbout about={about} />}
		</SideBarComponent>
	);
}
