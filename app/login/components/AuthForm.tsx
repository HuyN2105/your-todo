'use client';
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

function AuthForm() {
	const { push } = useRouter();

	if (sessionStorage.getItem('userId') != null) push('/todo');

	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [truePass, setTruePass] = useState('');

	const {
		register,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const useFetchUserPass = useEffect(() => {
		const PassRequestURL = '/api/userlist/?email=' + email;
		fetch(PassRequestURL, { cache: 'no-store' })
			.then((res) => res.json())
			.then((data) => setTruePass(data.pass));
	});

	useFetchUserPass;

	const handleLoginRequest = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		if (pass == truePass) {
			const LoginRequest = '/api/userlist/?email=' + email + '&pass=' + pass;
			fetch(LoginRequest, { cache: 'no-store' })
				.then((res) => res.json())
				.then((data) => {
					sessionStorage.setItem('userId', data.userId);
					push('/todo');
				});
		}
	};

	return (
		<>
			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
				<div className='bg-base-100 px-4 py-8 shadow sm:rounded-lg sm:px-10'>
					<form className='space-y-6'>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6'
							>
								Email address
							</label>
							<div className='mt-2'>
								<input
									id='email'
									type='email'
									autoComplete='email'
									{...register('email')}
									className={clsx(
										` bg-base-100 form-input block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm text:leading-6`,
										errors['email'] && 'focus:ring-error'
									)}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6'
							>
								Email address
							</label>
							<div className='mt-2'>
								<input
									id='password'
									type='password'
									autoComplete='password'
									{...register('password')}
									className={clsx(
										` bg-base-100 form-input block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm text:leading-6`,
										errors['password'] && 'focus:ring-error'
									)}
									onChange={(e) => setPass(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<button
								onClick={(e) => handleLoginRequest(e)}
								type='submit'
								className={`flex justify-center rounded-sm px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full hover:bg-sky-600`}
							>
								Sign in
							</button>
						</div>
					</form>
					<div className='mt-6'>
						<div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-gray-300' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AuthForm;
