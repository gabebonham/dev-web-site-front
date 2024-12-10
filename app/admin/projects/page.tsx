import SideBarComponent from '../_components/SideBarComponent';
import CreateProjectComponent from './_components/CreateProjectComponent';
import TableComponent from './_components/TableComponents';
import Project from './_models/ProjectModel';
import { getAllProjects } from './_service/ProjectsService';

export default async function ProjectsPage() {
	const projects: Project[] = (await getAllProjects()) as Project[];
	const projectList = projects.map((p) => ({
		name: p.name,
		id: p.id,
		description: p.description,
		link: p.link,
	}));
	return (
		<SideBarComponent>
			<CreateProjectComponent />
			<TableComponent projects={projectList} />
		</SideBarComponent>
	);
}
