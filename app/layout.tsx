import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'yourTodo App',
	description: 'Developed by HuyN - a senior highschool at the age of 18',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-theme='dark'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
