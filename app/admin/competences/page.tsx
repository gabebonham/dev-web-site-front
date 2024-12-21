import SideBarComponent from '../_components/SideBarComponent';
import CompetencesTable from './_components/CompetencesTable';
import CreateCompetenceComponent from './_components/CreateCompetenceComponent';
import WrapComponent from './_components/WrapComponent';
import Competence from './_models/CompetenceModel';
import { getAllCompetences } from './_services/CompetencesService';

export default function ComponentsPage() {
	return (
		<SideBarComponent>
			<WrapComponent />
		</SideBarComponent>
	);
}
