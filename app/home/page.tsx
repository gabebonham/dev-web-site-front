'use client';
import LayoutComponent from '@/components/LayoutComponent';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useEffect, useRef, useState } from 'react';
import eu from '@/public/me.png';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
	const element2Ref = useRef(null);
	const element3Ref = useRef(null);
	const element4Ref = useRef(null);
	const [isVisible2, setIsVisible2] = useState(false);
	const [isVisible3, setIsVisible3] = useState(false);
	const [isVisible4, setIsVisible4] = useState(false);

	useEffect(() => {
		const handleScroll2 = () => {
			if (element2Ref.current) {
				const rect =
					element2Ref.current.getBoundingClientRect();
				const isVisible =
					rect.top < window.innerHeight && // Top of the element is within the viewport height
					rect.bottom > 0 && // Bottom of the element is above the top of the viewport
					rect.left < window.innerWidth && // Left side of the element is within the viewport width
					rect.right > 0;
				setIsVisible2(isVisible);
			}
		};
		const handleScroll3 = () => {
			if (element3Ref.current) {
				const rect =
					element3Ref.current.getBoundingClientRect();
				const isVisible =
					rect.top < window.innerHeight && // Top of the element is within the viewport height
					rect.bottom > 0 && // Bottom of the element is above the top of the viewport
					rect.left < window.innerWidth && // Left side of the element is within the viewport width
					rect.right > 0;
				setIsVisible3(isVisible);
			}
		};
		const handleScroll4 = () => {
			if (element4Ref.current) {
				const rect =
					element4Ref.current.getBoundingClientRect();
				const isVisible =
					rect.top < window.innerHeight && // Top of the element is within the viewport height
					rect.bottom > 0 && // Bottom of the element is above the top of the viewport
					rect.left < window.innerWidth && // Left side of the element is within the viewport width
					rect.right > 0;
				setIsVisible4(isVisible);
			}
		};

		window.addEventListener('scroll', handleScroll2);
		window.addEventListener('scroll', handleScroll3);
		window.addEventListener('scroll', handleScroll4);
		handleScroll2();
		handleScroll3();
		handleScroll4();

		return () => {
			window.addEventListener('scroll', handleScroll2);
			window.addEventListener('scroll', handleScroll3);
			window.addEventListener('scroll', handleScroll4);
		};
	}, []);

	const text1 =
		'Comecei minha carreira como desenvolvedor backend, focando na linguagem Java com o framework Spring Boot.';
	const text2 =
		'Aproximadamente dois anos e meio depois de trabalhar unicamente como backend, explorei o mundo do frontend, com JavaScript e Next Js.';
	const text3 =
		'Dês de então eu venho aprendendo mais sobre o mundo da técnologia. Micro Serviços, Engenharia Reversa, Design Patterns, e técnologias periféricas.';

	return (
		<LayoutComponent>
			<div className="pb-24 pr-24 pl-24 pt-16  text-black shadow-2xl shadow-black mb-4">
				<Image
					src={eu}
					alt="eu"
					className="absolute ml-[400px] -mt-[300] w-[350px] h-[500px] "
				/>
				<div
					ref={element4Ref}
					className="pl-48 w-96 h-48"
				>
					{isVisible4 && (
						<div className="animate-fadeIn">
							<div className="break-normal text-start ">
								<h1 className="text-5xl drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
									Dev
									Backend
								</h1>
								<p className="text-lg drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
									{text1}
								</p>
							</div>
						</div>
					)}
				</div>
				<div
					ref={element3Ref}
					className="place-self-end w-96 h-48"
				>
					{isVisible3 && (
						<div className="animate-fadeIn flex pr-8">
							<div className="break-normal text-end w-96">
								<h1 className="text-5xl drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
									Dev
									Frontend
								</h1>
								<p className="text-lg drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
									{text2}
								</p>
							</div>
						</div>
					)}
				</div>
				<div ref={element2Ref} className="w-96 h-48">
					{isVisible2 && (
						<div className="animate-fadeIn flex w-96 pl-24">
							<div className="break-normal text-start">
								<h1 className="text-5xl drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
									Multiplas
									Áreas
								</h1>
								<p className="text-lg drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.5)]">
									{text3}
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</LayoutComponent>
	);
}
