import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import AuthContext from './context/AuthContext';
import ToasterContext from './context/ToasterContext';
import NavBar from './navBar';

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
		<>
			<html lang='en' data-theme='dark'>
				<SpeedInsights />
				<body className={inter.className}>
					<AuthContext>
						<ToasterContext />
						<NavBar />
						{children}
					</AuthContext>
				</body>
			</html>
		</>
	);
}
