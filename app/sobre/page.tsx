import LayoutComponent from '@/components/LayoutComponent';
import Image from 'next/image';
import img from '@/public/p2.jpeg';
import { getAbout } from './_services/AboutService';

export async function getStaticProps() {
	const about = await getAbout();
	return {
		porps: {
			about,
		},
	};
}
export default async function aboutPage(about) {
	let aboutText = await getAbout();
	if (aboutText == undefined) {
		aboutText = about;
	}
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
					{aboutText && (
						<div className="p-16 text-start text-lg drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
							{aboutText.value}
						</div>
					)}
				</div>
			</div>
		</LayoutComponent>
	);
}
