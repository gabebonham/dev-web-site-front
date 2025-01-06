import type { Metadata } from 'next';
import './globals.css';
import 'dotenv';
export const metadata: Metadata = {
	title: 'Gabriel Grote',
	description: 'Gabriel Grote Web Site',
	icons: {
		icon: [
			{
				url: './icon.png',
				href: './icon.png',
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" className="">
			<head></head>
			<body className="font-imfell h-full">{children}</body>
		</html>
	);
}
