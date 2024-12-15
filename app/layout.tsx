import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Gabriel Grote',
	description: 'Gabriel Grote Web Site',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" className="">
			{process.env.RAILWAY_DOMAIN != undefined && (
				<body className="font-imfell h-full">
					{children}
				</body>
			)}
		</html>
	);
}
