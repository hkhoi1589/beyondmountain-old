'use client';
import fetcher from '@/utils/fetcher';
import { API } from '@/utils/constant';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

export default function Form() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const email = searchParams.get('email');
	const [err, setErr] = useState('');

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
		const data = await fetcher(`${API}/api/v1/users/forgot-password`, 'PUT', {
			email: email,
			token: input.token,
			new_password: input.password,
			retype_new_password: input.repeatPassword,
		});
		if (data && data.status) {
			toast.success(data?.message || 'Reset password successfully');
			router.push(`/auth/login`);
		} else {
			setErr(data.message || data.error);
		}
	};
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='max-w-xl bg-base-100 mx-auto mt-12 rounded-lg overflow-hidden p-12 sm:py-20 sm:px-24 space-y-6'>
				<h2 className='text-2xl font-bold text-center'>Reset password</h2>
				<div>
					<div className='form-control w-full'>
						<label className='label pt-0 pb-1'>
							<span className='label-text'>Email</span>
						</label>
						<input className='input input-bordered w-full' type='text' value={email} disabled />
					</div>
					{errors.email && <div className='text-error'>{errors.email.message}</div>}
				</div>
				<div>
					<div className='form-control w-full'>
						<label className='label pt-0 pb-1'>
							<span className='label-text'>Passcode</span>
						</label>
						<input
							className='input input-bordered w-full'
							autoComplete='new-password'
							type='text'
							{...register('token', { required: 'This field is required' })}
						/>
					</div>
					{errors.token && <div className='text-error'>{errors.token.message}</div>}
				</div>
				<div>
					<div className='form-control w-full'>
						<label className='label pt-0 pb-1'>
							<span className='label-text'>Password</span>
						</label>
						<input
							className='input input-bordered w-full'
							type='password'
							{...register('password', {
								required: 'You must specify a password',
								minLength: {
									value: 8,
									message: 'Password must have at least 8 characters',
								},
							})}
						/>
					</div>
					{errors.password && <div className='text-error'>{errors.password.message}</div>}
				</div>
				<div>
					<div className='form-control w-full'>
						<label className='label pt-0 pb-1'>
							<span className='label-text'>Repeat password</span>
						</label>
						<input
							className='input input-bordered w-full'
							type='password'
							{...register('repeatPassword', {
								required: 'This field is required',
								validate: (value) => value === password.current || 'The passwords do not match',
							})}
						/>
					</div>
					{errors.repeatPassword && (
						<div className='text-error'>{errors.repeatPassword.message}</div>
					)}
				</div>

				<div className='pt-2'>
					<button className='btn btn-primary w-full'>Register</button>
				</div>

				{err && <div className='text-error'>{err}</div>}
			</form>
		</>
	);
}
