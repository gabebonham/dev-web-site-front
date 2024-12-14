import SideBarComponent from '../_components/SideBarComponent';
import CompetencesTable from './_components/CompetencesTable';
import CreateCompetenceComponent from './_components/CreateCompetenceComponent';
import Competence from './_models/CompetenceModel';
import { getAllCompetences } from './_services/CompetencesService';

export default async function ComponentsPage() {
	const competences = ((await getAllCompetences()) || []) as Competence[];
	return (
		<SideBarComponent>
			<CreateCompetenceComponent />
			{competences.length != 0 && (
				<CompetencesTable competences={competences} />
			)}
		</SideBarComponent>
	);
}
