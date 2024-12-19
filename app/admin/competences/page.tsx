import SideBarComponent from '../_components/SideBarComponent';
import CompetencesTable from './_components/CompetencesTable';
import CreateCompetenceComponent from './_components/CreateCompetenceComponent';
import Competence from './_models/CompetenceModel';
import { getAllCompetences } from './_services/CompetencesService';

export async function getServerSideProps() {
	const comp = await getAllCompetences();
	return {
		props: {
			comp,
		},
	};
}

export default async function ComponentsPage({ comp }) {
	return (
		<SideBarComponent>
			<CreateCompetenceComponent />
			<CompetencesTable comp={comp} />
		</SideBarComponent>
	);
}
