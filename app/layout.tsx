import type { Metadata } from 'next';
import './globals.css';
import 'dotenv';
export const metadata: Metadata = {
	title: 'Gabriel Grote',
	description: 'Gabriel Grote Web Site',
	icons: {
		icon: [
			{
				url: './favicon.jpg',
				href: './favicon.jpg',
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
			<body className="font-imfell h-full">
				{process.env.RAILWAY_PUBLIC_DOMAIN.length > 4 &&
					children}
			</body>
		</html>
	);
}
