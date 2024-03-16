'use client';
import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useUserStore } from '@/store/forum';
import { useEffect, useRef } from 'react';

export default function Form() {
	const router = useRouter();
	const { access } = useUserStore();

	useEffect(() => {
		if (access) return router.push('/forum');
	}, [access]);

	// prevent submitting invalid or empty emails
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();
	const password = useRef({});
	password.current = watch('password', '');

	const onSubmit = async (input) => {
		// const data = await fetcher(`/api/v1/auth`, 'POST', {
		// 	username: input.username,
		// 	password: input.password,
		// });
		const data = {};
		if (data && !data.errors) {
			router.push('/auth/login');
		}
	};
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='max-w-xl bg-base-100 mx-auto mt-12 rounded-lg overflow-hidden p-12 sm:py-20 sm:px-24 space-y-6'>
				<h2 className='text-2xl font-bold text-center'>Join HIGH Schoozl community</h2>
				<div>
					<p className='text-lg'>
						Get more features and priviliges by joining to the most helpful community
					</p>
					<div className='form-input'>
						<input
							{...register('email', {
								required: 'This field is required',
							})}
							type='text'
							placeholder=' '
						/>
						<label for='email'>Email</label>
					</div>
					{errors.email && <div className='text-error'>{errors.email.message}</div>}
				</div>
				<div>
					<div className='form-input'>
						<input
							{...register('password', {
								required: 'You must specify a password',
								minLength: {
									value: 8,
									message: 'Password must have at least 8 characters',
								},
							})}
							type='password'
							placeholder=' '
						/>
						<label for='password'>Password</label>
					</div>
					{errors.password && <div className='text-error'>{errors.password.message}</div>}
				</div>
				<div>
					<div className='form-input'>
						<input
							{...register('repeatPassword', {
								required: 'This field is required',
								validate: (value) =>
									value === password.current || 'The passwords do not match',
							})}
							type='password'
							placeholder=' '
						/>
						<label for='repeat-password'>Repeat password</label>
					</div>
					{errors.repeatPassword && (
						<div className='text-error'>{errors.repeatPassword.message}</div>
					)}
				</div>
				<button className='btn btn-primary w-full'>Register</button>
			</form>
		</>
	);
}
