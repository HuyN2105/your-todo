'use client';
import React from 'react';
import { Dropdown, DropdownTrigger } from '@nextui-org/dropdown';
import Link from 'next/link';

const NavBar = ({ currentPage }) => {
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
			name: 'Contact',
			pageLink: '/contact',
		},
	];

	return (
		<>
			<div className='navbar bg-base-100 shadow'>
				<div className='flex-none dropdown dropdown-end'>
					<Dropdown>
						<DropdownTrigger>
							<button tabIndex={0} className='btn btn-square btn-ghost'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									className='inline-block w-5 h-5 stroke-current'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'
									></path>
								</svg>
							</button>
						</DropdownTrigger>
						<ul className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4'>
							{pages.map((page) => (
								<li key={page.name}>
									<Link
										href={page.pageLink}
										className={page.name == currentPage ? 'text-info' : ''}
									>
										{page.name}
									</Link>
								</li>
							))}
						</ul>
					</Dropdown>
				</div>
				<div className='flex-1'>
					<Link href='/' className='btn btn-ghost text-xl'>
						YourTodo
					</Link>
				</div>
				<div className='flex-none'>
					<button className='btn btn-square btn-ghost'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							className='inline-block w-5 h-5 stroke-current'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
							></path>
						</svg>
					</button>
				</div>
			</div>
		</>
	);
};

export default NavBar;
