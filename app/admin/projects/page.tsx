import SideBarComponent from '../_components/SideBarComponent';
import CreateProjectComponent from './_components/CreateProjectComponent';
import TableComponent from './_components/TableComponents';
import WrapComponent from './_components/WrapComponent';
import { getAllProjects } from './_service/ProjectsService';

export default async function ProjectsPage() {
	return (
		<SideBarComponent>
			<WrapComponent />
		</SideBarComponent>
	);
}
