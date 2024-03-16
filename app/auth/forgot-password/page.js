'use client';
import fetcher from '@/utils/fetcher';
import { API } from '@/utils/constant';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ForgotPage() {
	const router = useRouter();
	const [err, setErr] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (input) => {
		const data = await fetcher(`${API}/api/v1/users/forgot-password/search-email`, 'PUT', {
			email: input.email,
		});
		if (data && data.status) {
			router.push(`/auth/reset-password?email=${input.email}`);
		} else {
			setErr(data.error_description || data.error);
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='max-w-xl bg-base-100 mx-auto mt-12 rounded-lg overflow-hidden p-12 sm:py-20 sm:px-24 space-y-6'>
				<h2 className='text-2xl font-bold text-center'>Forgot password</h2>
				<div>
					<div className='form-control w-full'>
						<label className='label pt-0 pb-1'>
							<span className='label-text'>Email</span>
						</label>
						<input
							className='input input-bordered w-full'
							type='text'
							{...register('email', { required: 'This field is required' })}
						/>
					</div>
					{errors.email && <div className='text-error'>{errors.email.message}</div>}
				</div>
				<div className='pt-2'>
					<button type='submit' className='btn btn-primary w-full'>
						Submit
					</button>
				</div>

				{err && <div className='text-error'>{err}</div>}
			</form>
		</div>
	);
}
