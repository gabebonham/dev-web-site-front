import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordionComponenet() {
	return (
		<Accordion
			collapsible
			type="single"
			className="text-white w-full"
		>
			<AccordionItem value="item-1" className="min-h-12">
				<AccordionTrigger>
					<p className="drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">
						O código fonte será
						compartilhado entre eu e você?
					</p>
				</AccordionTrigger>
				<AccordionContent>
					<p className="drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">
						Por conta da hospedagem da
						aplicação, deve ser negociado.
					</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2" className="min-h-12">
				<AccordionTrigger>
					<p className="drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">
						Como é feito o design?
					</p>
				</AccordionTrigger>
				<AccordionContent>
					<p className="drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">
						Sempre junto a você, podemos nos
						basear em outros sites, ou
						deixar o design inteiramente nas
						minhas mãos também.
					</p>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3" className="min-h-12">
				<AccordionTrigger>
					<p className="drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">
						As aplicações são sempre
						fullstack?
					</p>
				</AccordionTrigger>
				<AccordionContent>
					<p className="drop-shadow-[0_2px_2px_rgba(0,0,0,2)]">
						Depende da sua necessidade. Faço
						dês de landing page até sistemas
						de gestão de qualquer recurso.
					</p>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
