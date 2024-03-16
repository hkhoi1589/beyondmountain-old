import Link from 'next/link';
import BG from '@/components/bg/gradient';

export default function Newsletter({ className = '' }) {
	return (
		<section className={`py-14 max-w-screen-xl mx-auto ${className}`}>
			<div className='relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-primary md:px-8 md:mx-8'>
				<div className='relative z-10 max-w-xl mx-auto sm:text-center'>
					<div className='space-y-3'>
						<h3 className='text-3xl text-white font-bold'>
							Subscribe to our newsletter
						</h3>
						<p className='text-blue-100 leading-relaxed'>
							Stay up to date with the roadmap progress, announcements and exclusive
							discounts feel free to sign up with your email.
						</p>
					</div>
					<div className='mt-6'>
						<form className='flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto'>
							<input
								type='email'
								placeholder='Enter your email'
								className='opacity-60 w-full p-2 outline-none'
							/>
							<button className='btn btn-sm btn-primary capitalize'>Subscribe</button>
						</form>
						<div className='mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto'>
							No spam ever, we are care about the protection of your data. Read our{' '}
							<Link className='underline' href='/'>
								{' '}
								Privacy Policy{' '}
							</Link>
						</div>
					</div>
				</div>
				<BG />
			</div>
		</section>
	);
}
