import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Competence from '@/app/admin/competences/_models/CompetenceModel';

export function ListComponent({ skills }: { skills: Competence[] }) {
	return (
		<ScrollArea className="max-h-96 w-full rounded-md border bg-white shadow-2xl">
			<div className="p-4">
				{skills.map((s) => (
					<>
						<div
							key={s.id}
							className="text-lg text-center"
						>
							{s.name}
						</div>

						<div
							key={s.id}
							className="text-sm text-center"
						>
							{s.rating}%
						</div>
						<Separator className="my-2" />
					</>
				))}
			</div>
		</ScrollArea>
	);
}
