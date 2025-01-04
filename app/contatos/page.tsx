'use client';
import LayoutComponent from '@/components/LayoutComponent';
import { getAllContacts } from './_services/ContactsService';
import ContactsTableComponent from './_components/ContactsTableComponent';
import Image from 'next/image';
import img from '@/public/p3.png';
import { useEffect, useState } from 'react';
import DefaultSkeleton from '@/components/DefaultSkeleton';

export default function ContactPage() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const get = async () => {
			await getAllContacts(setData);
		};
		get();
	}, []);
	return (
		<LayoutComponent>
			<div className="mb-8 p-16 shadow-2xl shadow-black bg-[rgba(0,0,0,0.2)] ">
				<Image
					src={img}
					alt="img"
					className="absolute right-0 rounded-2xl pr-4 hover:animate-pulse2 opacity-50 size-48"
				/>

				<div className="flex">
					<h1 className="ml-80 text-5xl ">
						Plataformas
					</h1>
					<p className="pl-36 w-[400px] text-end text-red-700 text-lg drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,1)]">
						Caso tenha interesse e queira
						entrar em contato comigo, peço
						que use o meu email.
					</p>
				</div>
				{data.length > 0 && data.length ? (
					<ContactsTableComponent
						contacts={data}
					/>
				) : (
					<DefaultSkeleton />
				)}
			</div>
		</LayoutComponent>
	);
}
