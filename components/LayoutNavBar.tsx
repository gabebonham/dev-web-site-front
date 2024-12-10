import { List } from 'lucide-react';
import { Separator } from './ui/separator';
import Link from 'next/link';

export default function LayoutNavBar() {
	return (
		<ul className="flex pr-16 pl-12 text-black">
			<li>
				<Link
					href={'/projetos'}
					className="transition hover:animate-flash"
				>
					Projetos
				</Link>
			</li>
			<Separator
				orientation="vertical"
				className="mx-4 h-6 rounded bg-black"
			/>
			<li>
				<Link
					href={'/contatos'}
					className="transition hover:animate-flash"
				>
					Contato
				</Link>
			</li>
			<Separator
				orientation="vertical"
				className="mx-4 h-6 rounded bg-black"
			/>
			<li>
				<Link
					href={'/skills'}
					className="transition hover:animate-flash"
				>
					Skills
				</Link>
			</li>
			<Separator
				orientation="vertical"
				className="mx-4 h-6 rounded bg-black"
			/>
			<li>
				<Link
					href={'/blog'}
					className="transition hover:animate-flash"
				>
					Blog
				</Link>
			</li>
			<Separator
				orientation="vertical"
				className="mx-4 h-6 rounded bg-black"
			/>
			<li>
				<Link
					href={'/sobre'}
					className="transition hover:animate-flash"
				>
					Sobre
				</Link>
			</li>
		</ul>
	);
}
