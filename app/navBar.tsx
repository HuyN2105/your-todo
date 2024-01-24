'use client';
import React from 'react';
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
			name: 'About',
			pageLink: '/about',
		},
	];

	return (
		<>
			<div className='navbar bg-base-100'>
				<div className='flex-1 navbar-start'>
					<a className='btn btn-ghost text-xl'>yourTodo</a>
				</div>
				<div
					role='tablist'
					className='tabs tabs-lifted navbar-center w-20 translate-y-0.25'
				>
					{pages.map((page) => (
						<Link
							role='tab'
							className={page.name == currentPage ? 'tab tab-active' : 'tab'}
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
								<img
									alt='Tailwind CSS Navbar component'
									src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
						>
							<li>
								<a className='justify-between'>
									Profile
									<span className='badge'>New</span>
								</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a className='text-warning'>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
