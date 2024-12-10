import {
	CaptionsIcon,
	AlignJustifyIcon,
	AtomIcon,
	CircleUserRoundIcon,
	ClipboardListIcon,
	Mail,
} from 'lucide-react';

const sideBarMenuItems = [
	{
		title: 'Blog',
		url: 'blog',
		icon: CaptionsIcon,
	},
	{
		title: 'Projetos',
		url: 'projects',
		icon: AtomIcon,
	},
	{
		title: 'Sobre',
		url: 'about',
		icon: AlignJustifyIcon,
	},
	{
		title: 'Contato',
		url: 'contacts',
		icon: CircleUserRoundIcon,
	},
	{
		title: 'Competencias',
		url: 'competences',
		icon: ClipboardListIcon,
	},
	{
		title: 'Mensagens',
		url: 'messages',
		icon: Mail,
	},
];

export default sideBarMenuItems;
