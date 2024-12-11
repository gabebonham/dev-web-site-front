import Link from 'next/link';

export default function LandingPage() {
	return (
		<div className="bg-[url('/back.gif')] w-full h-screen ">
			<div className="text-center place-self-center self-center h-screen pt-56">
				<h1 className="text-2xl">Bem Vindo(a)!</h1>
				<Link
					href={'/home'}
					className="hover:animate-pulseFlash text-lg"
				>
					Ir para a Home
				</Link>
			</div>
		</div>
	);
}
