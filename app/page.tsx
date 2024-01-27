import React from 'react';
import NavBar from './navBar';
import Link from 'next/link';
import Footer from './Footer';
import Image from 'next/image';
import TodoImg from './Assets/todo.png';

function Home() {
	return (
		<>
			<NavBar currentPage='Home' />

			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='mx-auto container px-4 md:px-6'>
						<div className='grid grid-cols-1 justify-items-center space-y-4 text-center'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none '>
								Manage your todo with ease
							</h1>
							<p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
								A simple and intuitive todo management app made by a senior high
								school students.
							</p>
							<Link className='btn btn-primary w-[148px]' href='/login'>
								Get Started
							</Link>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
					<div className='container px-4 md:px-6'>
						<div className='grid items-center gap-4 md:grid-cols-2 lg:gap-12'>
							<Image
								alt='Image'
								className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
								height='310'
								src={TodoImg}
								width='550'
							/>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
										Featured Todo
									</div>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
										Manage your todo with ease
									</h2>
									<p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
										A simple and intuitive todo management app made for
										everyone.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									<Link
										className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:focus-visible:ring-gray-300'
										href='#'
									>
										Get Started
									</Link>
									<Link
										className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:focus-visible:ring-gray-300'
										href='#'
									>
										Learn more
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}

export default Home;
