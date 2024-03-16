import Link from 'next/link';

export default function Authen({ className = '' }) {
	return (
		<section
			className={`w-full h-screen flex flex-col items-center justify-center px-4 ${className}`}>
			<div className='max-w-sm w-full'>
				<div className='text-center'>
					<div className='flex items-center justify-center'>
						<img src='/img/svg/logo.svg' width={36} />
						<span className='ml-3 text-3xl font-semibold opacity-90'>WindyUI</span>
					</div>
					<div className='mt-5 space-y-2'>
						<h3 className='opacity-90 text-2xl font-bold sm:text-3xl'>
							Log in to your account
						</h3>
						<div>
							Don't have an account?{' '}
							<Link href='/' className='font-medium text-primary hover:text-primary'>
								Sign up
							</Link>
						</div>
					</div>
				</div>
				<form className='mt-8 space-y-5'>
					<div>
						<label className='font-medium'>Email</label>
						<input
							type='email'
							required
							className='w-full mt-2 px-3 py-2 opacity-60 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg'
						/>
					</div>
					<div>
						<label className='font-medium'>Password</label>
						<input
							type='password'
							required
							className='w-full mt-2 px-3 py-2 opacity-60 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg'
						/>
					</div>
					<button className='w-full px-4 py-2 text-white font-medium bg-primary hover:bg-primary active:bg-primary rounded-lg duration-150'>
						Sign in
					</button>
					<div className='text-center'>
						<Link href='/' className='hover:text-primary'>
							Forgot password?
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
}
