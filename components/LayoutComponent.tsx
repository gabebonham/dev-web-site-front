'use client';
import logo from '@/public/a.png';
import Image from 'next/image';
import { Button } from './ui/button';
import { NavBar } from './NavBar';
import LayoutNavBar from './LayoutNavBar';
import { NotebookPen } from 'lucide-react';
import { AccordionComponenet } from './AccordionComponent';
import {
	MenubarMenu,
	MenubarContent,
	MenubarTrigger,
	Menubar,
} from './ui/menubar';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import SectionsComponent from './Sections';
import { Separator } from './ui/separator';
import Link from 'next/link';

import { useRef, useState } from 'react';
import ScheduleModal from './ScheduleModal';
import { authenticate, logout } from '@/app/admin/services/AuthService';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';

const cookie = {
	name: 'session',
	options: { httpOnly: true, secure: true, sameSite: 'lax', path: '/' },
	duration: 24 * 60 * 60 * 1000,
};

export default function LayoutComponent({ children }) {
	const [isOpen, open] = useState(false);
	const router = useRouter();
	const name = useRef<any>(null);
	const pass = useRef<any>(null);
	const authHandler = async () => {
		const token = await authenticate(
			name.current.value,
			pass.current.value,
		);
		Cookie.set('session', token);
		console.log(token);
		router.push('/admin/competences');
	};
	const logoutHandler = async () => {
		await logout();
		Cookie.remove('session');
		router.refresh();
	};

	return (
		<div className="bg-[url('/back.gif')]">
			{isOpen && <ScheduleModal open={open} />}
			<div className="shadow-2xl sticky top-0 z-40 shadow-gray">
				<header className=" place-items-center flex px-8 text-black ">
					<Link href="/home">
						<Image
							src={logo}
							alt="logo"
							width="100"
						/>
					</Link>
					<div className="px-48"></div>
					<p className="flex hover:animate-flash z-90">
						<NotebookPen />
						<span
							onClick={(e) => {
								open(true);
							}}
							className="cursor-pointer"
						>
							Agendar uma reunião
						</span>
					</p>
					<LayoutNavBar />
					<div className="">
						<Menubar className="opacity-100 bg-black">
							<MenubarMenu>
								<MenubarTrigger className="hover:cursor-pointer bg-black opacity-100 text-white ">
									Login
								</MenubarTrigger>
								<MenubarContent className="mr-4">
									<Card className="">
										<CardHeader>
											<CardTitle>
												Somente
												para
												admin
											</CardTitle>
											<CardContent>
												User:
												<Input
													ref={
														name
													}
													className="h-8"
												/>
												Password:
												<Input
													ref={
														pass
													}
													className="h-8"
												/>
											</CardContent>
											<CardFooter>
												<Button
													onClick={(
														e,
													) =>
														authHandler()
													}
												>
													Send
												</Button>
												<Button
													className="ml-4"
													onClick={(
														e,
													) =>
														logoutHandler()
													}
												>
													Logout
												</Button>
											</CardFooter>
										</CardHeader>
									</Card>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					</div>
				</header>
			</div>
			{children}
			<Separator className="bg-gray-500 w-2/3 place-self-center" />
			<SectionsComponent />
			<footer className="bg-black mt-4 flex p-12 justify-between shadow shadow-black shadow-inner ">
				<div className="w-96 order-first">
					<AccordionComponenet />
				</div>
				<div className="pr-24 self-center">
					<p className="drop-shadow-[0_2px_2px_rgba(0,0,0,2)] text-white">
						Gabriel Grote
					</p>
				</div>
			</footer>
		</div>
	);
}
