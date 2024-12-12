import LayoutComponent from '@/components/LayoutComponent';
import SectionsComponent from '@/components/Sections';
import { getAllSkills } from './_services/SkillsService';
import { ListComponent } from '@/components/ListComponent';
import Competence from '../admin/competences/_models/CompetenceModel';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import img from '@/public/skilld.jpeg';

export default async function SkillsPage() {
	const skills = (await getAllSkills()).map((y) => ({
		id: y.id,
		name: y.name,
		rating: y.rating,
	}));
	return (
		<LayoutComponent>
			<div className="mb-8 p-16 shadow-2xl shadow-black bg-[rgba(0,0,0,0.2)]">
				<Image
					src={img}
					alt="img"
					className="absolute right-0 rounded-2xl pr-4 opacity-50 hover:animate-pulse2 size-48"
				/>
				<h1 className="text-5xl pl-80 pb-12 ">
					Skills
				</h1>
				<div className="w-96 pl-4 pb-8">
					<p className="text-red-500 text-lg drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,1)]">
						Algumas técnologias e
						habilidades que conheço e tenho.
						Mas a mais importante é minha
						competencia de aprender novas
						técnologias rapida e facilmente,
						uma vez que os fundamentos ja
						estão estabelecidos, a skill que
						vejo como mais essencial
					</p>
				</div>
				<div className="grid grid-cols-5 gap-8">
					{skills.map((s) => (
						<Card className="hover:animate-flash hover:animate-pulseFlash">
							<CardHeader>
								<CardTitle>
									{s.name}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-lg">
									{
										s.rating
									}
									%
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</LayoutComponent>
	);
}
