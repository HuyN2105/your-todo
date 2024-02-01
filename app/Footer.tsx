'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return (
		<footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
			<nav className='grid grid-flow-col gap-4'>
				<a className='link link-hover'>About us</a>
				<a className='link link-hover'>Contact</a>
				<a className='link link-hover'>Jobs</a>
				<a className='link link-hover'>Todo</a>
			</nav>
			<nav>
				<div className='grid grid-flow-col gap-4'>
					<a>
						<FontAwesomeIcon
							icon={faEnvelope}
							size='2x'
							onClick={() => window.open('mailto:huyn.dev.2105@gmail.com')}
						/>
					</a>
					<a>
						<FontAwesomeIcon
							icon={faGithub}
							size='2x'
							onClick={() => window.open('https://www.github.com/HuyN2105')}
						/>
					</a>
					<a>
						<FontAwesomeIcon
							icon={faFacebookF}
							size='2x'
							onClick={() => window.open('https://www.facebook.com/HuyN.2105')}
						/>
					</a>
				</div>
			</nav>
			<aside>
				<p>Copyright © 2024 - Nguyễn Thanh Huy </p>
			</aside>
		</footer>
	);
}

export default Footer;
