'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { useEffect, useRef, useState } from 'react';
import p1 from '@/public/p1.png';
import p2 from '@/public/p2.png';
import p3 from '@/public/p3.png';
import p4 from '@/public/p4.png';
import p5 from '@/public/p5.png';
import p6 from '@/public/p6.png';

export default function SectionsComponent() {
	const elementRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (elementRef.current) {
				const rect =
					elementRef.current.getBoundingClientRect();
				const isVisible =
					rect.top < window.innerHeight && // Top of the element is within the viewport height
					rect.bottom > 0 && // Bottom of the element is above the top of the viewport
					rect.left < window.innerWidth && // Left side of the element is within the viewport width
					rect.right > 0;
				setIsVisible(isVisible);
			}
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.addEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<div className="bg-[rgba(0,0,0,0.2)]">
			<div
				ref={elementRef}
				className="p-16 h-[1000px] shadow-2xl shadow-black"
			>
				<h2 className="text-7xl text-center text-black drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,1)]">
					Ir para
				</h2>
				<div className="mt-24 h-[450px] ">
					{isVisible ? (
						<div className="grid grid-cols-4 gap-8 place-self-center">
							<Link href="/projetos">
								<Image
									src={p1}
									alt="p1"
									width={
										200
									}
									className="transition hover:translate-y-5 rounded-2xl hover:cursor-pointer opacity-75 hover:opacity-100  shadow-2xl shadow-black"
								/>
							</Link>
							<Link href={'/sobre'}>
								<Image
									src={p2}
									alt="p2"
									width={
										200
									}
									className="transition hover:translate-y-5 rounded-2xl hover:cursor-pointer opacity-75 hover:opacity-100 shadow-2xl shadow-black"
								/>
							</Link>
							<Link
								href={
									'/contatos'
								}
							>
								<Image
									src={p3}
									alt="p3"
									width={
										200
									}
									className="transition hover:translate-y-5 rounded-2xl hover:cursor-pointer opacity-75 hover:opacity-100 shadow-2xl shadow-black"
								/>
							</Link>
							<Link href={'/blog'}>
								<Image
									src={p4}
									alt="p4"
									width={
										200
									}
									className="transition hover:translate-y-5 rounded-2xl hover:cursor-pointer opacity-75 hover:opacity-100 shadow-2xl shadow-black"
								/>
							</Link>
							<Link href={'/skills'}>
								<Image
									src={p5}
									alt="p5"
									width={
										200
									}
									className="transition hover:translate-y-5 rounded-2xl hover:cursor-pointer opacity-75 hover:opacity-100 shadow-2xl shadow-black"
								/>
							</Link>
							<Image
								src={p6}
								alt="p6"
								width={200}
								className="transition hover:translate-y-5 rounded-2xl hover:cursor-pointer opacity-75 hover:opacity-100 shadow-2xl shadow-black"
							/>
						</div>
					) : (
						<div className=""></div>
					)}
				</div>
			</div>
		</div>
	);
}
