import React from 'react';
import Image from 'next/image';
import Logo from '@/app/Assets/R.png';
import AuthForm from './components/AuthForm';

function UserSignIn() {
	return (
		<>
			<div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-base-100'>
				<div className='sm:mx-auto sm:w-full sm:max-w-md'>
					<Image
						alt='Logo'
						width={232}
						height={232}
						className='mx-auto w-auto'
						src={Logo}
					/>
					<h2 className='mt-6 text-center text-3xl font-bold tracking-tight'>
						Đăng nhập
					</h2>
				</div>
				<AuthForm />
			</div>
		</>
	);
}

export default UserSignIn;
