'use client';
import React from 'react';
import Link from 'next/link';
import Logo from './Assets/Logo.png';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const NavBar = () => {
	const cp = usePathname();
	console.log(cp);

	const pages = [
		{
			name: 'Home',
			pageLink: '/',
		},
		{
			name: 'Todo',
			pageLink: '/todo',
		},
		{
			name: 'About',
			pageLink: '/about',
		},
	];

	return (
		<>
			<div className='navbar bg-base-100 max-sm:-translate-x-3.5'>
				<div className='flex-1 navbar-start'>
					<a className='btn btn-ghost text-xl'>yourTodo</a>
				</div>
				<div
					role='tablist'
					className='tabs tabs-lifted navbar-center w-20 sm:-translate-x-8'
				>
					{pages.map((page) => (
						<Link
							role='tab'
							className={page.pageLink == cp ? 'tab tab-active' : 'tab'}
							key={page.name}
							href={page.pageLink}
						>
							{page.name}
						</Link>
					))}
				</div>
				<div className='flex-none gap-2 navbar-end'>
					<div className='dropdown dropdown-end'>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-ghost btn-circle avatar'
						>
							<div className='w-10 rounded-full'>
								<Image alt='Profile Image' src={Logo} />
							</div>
						</div>
						<ul
							tabIndex={0}
							className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
						>
							<li>
								<button className='text-warning' onClick={() => signOut()}>
									Logout
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
