'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/app/components/input/Input';
import Button from '@/app/components/Button';
import AuthSocialButton from './AuthSocialButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { signIn, signOut, useSession } from 'next-auth/react';

type Variant = 'LOGIN' | 'REGISTER';

function AuthForm() {
	const session = useSession();
	const router = useRouter();
	const [variant, setVariant] = useState<Variant>('LOGIN');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		console.log(session?.status);
		if (session?.status == 'authenticated') {
			router.push('/users');
		}
	}, [session?.status, router]);

	const toggleVariant = useCallback(() => {
		if (variant === 'LOGIN') {
			setVariant('REGISTER');
		} else {
			setVariant('LOGIN');
		}
	}, [variant]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		if (variant === 'REGISTER') {
			axios
				.post('/api/register', data)
				.then(() =>
					signIn('credentials', data).then((callback) => {
						if (callback?.ok && !callback?.error) {
							toast.success('Sign up successfully!');
							router.push('/login');
						}
					})
				)
				.catch(() => toast.error('Something went wrong!'))
				.finally(() => setIsLoading(false));
		}
		if (variant === 'LOGIN') {
			signIn('credentials', { ...data, redirect: false })
				.then((callback) => {
					if (callback?.error) {
						toast.error('Invalid credentials');
					}
					if (callback?.ok && !callback?.error) {
						toast.success('Login successfully!');
						router.push('/users');
					}
				})
				.finally(() => setIsLoading(false));
		}
	};

	const SocialAction = (action: string) => {
		setIsLoading(true);

		signIn(action, { redirect: false })
			.then((callback) => {
				if (callback?.error) {
					toast.error('Invalid credentials');
				}
				if (callback?.ok && !callback?.error) {
					toast.success('Login successfully!');
					router.push('/users');
				}
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<>
			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
				<div className='bg-base-100 px-4 py-8 shadow sm:rounded-lg sm:px-10'>
					<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
						{variant === 'REGISTER' && (
							<Input
								id='name'
								label='Name'
								register={register}
								errors={errors}
								disabled={isLoading}
							/>
						)}
						<Input
							id='email'
							label='Email address'
							type='email'
							register={register}
							errors={errors}
							disabled={isLoading}
						/>
						<Input
							id='password'
							label='Password'
							type='password'
							register={register}
							errors={errors}
							disabled={isLoading}
						/>
						<div>
							<Button disabled={isLoading} fullWidth type='submit'>
								{variant === 'LOGIN' ? 'Sign in' : 'Register'}
							</Button>
						</div>
					</form>
					<div className='mt-6'>
						<div className='relative'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-gray-300' />
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='bg-base-100 px-2 text-gray-500'>
									Or continue with
								</span>
							</div>
						</div>
						<div className='mt-6 flex gap-2'>
							<AuthSocialButton
								icon={BsGithub}
								onClick={() => SocialAction('github')}
							/>
							<AuthSocialButton
								icon={BsGoogle}
								onClick={() => SocialAction('google')}
							/>
						</div>

						<div className='flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500'>
							<div>
								{variant === 'LOGIN'
									? 'New to yourTodo?'
									: 'Already have an account?'}
							</div>
							<div onClick={toggleVariant} className='underline cursor-pointer'>
								{variant === 'LOGIN' ? 'Create an account' : 'Login'}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AuthForm;
