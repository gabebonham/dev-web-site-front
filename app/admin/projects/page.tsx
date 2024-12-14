import SideBarComponent from '../_components/SideBarComponent';
import CreateProjectComponent from './_components/CreateProjectComponent';
import TableComponent from './_components/TableComponents';
import Project from './_models/ProjectModel';
import { getAllProjects } from './_service/ProjectsService';

export default async function ProjectsPage() {
	const projects = (await getAllProjects()) || [];
	return (
		<SideBarComponent>
			<CreateProjectComponent />
			{projects.length && (
				<TableComponent projects={projects} />
			)}
		</SideBarComponent>
	);
}
