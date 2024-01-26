import React from 'react';
import NavBar from '../navBar';
import Link from 'next/link';
import LogoNoBG from '../Assets/LogoNoBG.png';
import Image from 'next/image';
import Footer from '../Footer';

export default function Component() {
	return (
		<>
			<NavBar currentPage='About' />
			<section className='flex flex-col items-center justify-center w-full py-4 md:py-24 lg:py-32'>
				<div className='container px-4 md:px-6'>
					<div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2'>
						<Image
							alt='Profile Picture'
							className='mx-auto aspect-video overflow-hidden rounded-full object-cover object-center sm:w-full'
							height='550'
							src={LogoNoBG}
							width='550'
						/>
						<div className='flex flex-col justify-center space-y-4'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
									About Me
								</h1>
								<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
									Hi, I&apos;m a senior high school student passionate about
									coding and problem-solving. I created this to-do app to help
									students like me manage their tasks and improve productivity.
								</p>
							</div>
							<div className='space-y-2'>
								<h2 className='text-2xl font-bold tracking-tighter sm:text-4xl'>
									Why I Created This App
								</h2>
								<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
									As a student, I often found it challenging to keep track of
									all my assignments, projects, and deadlines. I wanted a simple
									and intuitive tool that could help me manage my tasks
									effectively. That&apos;s why I created this to-do app.
								</p>
							</div>
							<div className='space-y-2'>
								<h2 className='text-2xl font-bold tracking-tighter sm:text-4xl'>
									Key Features
								</h2>
								<ul className='list-disc list-inside space-y-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
									<li>Easy task management</li>
									<li>Deadline reminders</li>
									<li>Task prioritization</li>
									<li>Progress tracking</li>
								</ul>
							</div>
							<div className='flex flex-col gap-2 min-[400px]:flex-row'>
								<Link
									className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
									href='#'
								>
									Try the App
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
