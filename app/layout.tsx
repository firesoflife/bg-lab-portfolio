import { Lato } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const lato = Lato({
	weight: ['100', '400', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'BG-LAB',
	icons: {
		icon: '/favicon.ico',
	},
	description:
		'A personal website and CV for Bryan Goertz. Web Design, Home-Lab Projects and more.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='lato.className'>
			<head />
			<body className='bg-slate-800 text-gray-300'>{children}</body>
		</html>
	);
}
