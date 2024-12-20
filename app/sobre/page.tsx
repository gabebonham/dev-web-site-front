'use client';
import LayoutComponent from '@/components/LayoutComponent';
import Image from 'next/image';
import img from '@/public/p2.png';
import { getAbout } from './_services/AboutService';
import { useEffect, useState } from 'react';

export default function aboutPage() {
	const [data, setData] = useState(null);
	useEffect(() => {
		const get = async () => {
			await getAbout(setData);
		};
		get();
	}, []);
	return (
		<LayoutComponent>
			<div className="mb-8 p-16 shadow-2xl shadow-black bg-[rgba(0,0,0,0.2)]">
				<Image
					src={img}
					alt="img"
					className="absolute right-0 rounded-2xl opacity-50 pr-4 hover:animate-pulse2 size-48"
				/>
				<div className="text-white w-2/3">
					<h1 className="text-5xl ml-80 drop-shadow-[0_2px_2px_rgba(0,0,0,1)] ">
						Gabriel Grote
					</h1>
					{data != null && (
						<div className="p-16 text-start text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
							{data.about.value}
						</div>
					)}
				</div>
			</div>
		</LayoutComponent>
	);
}
