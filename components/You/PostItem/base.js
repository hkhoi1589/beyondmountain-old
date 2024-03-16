'use client';
import React, { useState } from 'react';
import Heart from '@/components/Button/Heart';
import Link from 'next/link';

export default function PostItem({ value, link, title, icon, key }) {
	const [amount, setAmount] = useState(value);

	return (
		<li
			className='border-b-2 border-b-neutral flex items-center justify-between p-2 sm:p-4'
			key={key}>
			<div className='flex justify-center items-center flex-1'>
				{icon}
				<div className='ml-2 sm:ml-4 flex-1 line-clamp-2'>
					<Link href={link}>
						<h4 className='capitalize hover:text-accent-focus'>{title}</h4>
					</Link>
					<ul className='flex flex-col list-disc sm:list-none sm:flex-row'>
						<li className='text-sm font-normal hidden sm:inline'>
							in <span className='underline'>General</span>
						</li>
						<li className='font-bold px-2 hidden sm:inline'>·</li>
						<li className='text-sm font-normal hidden sm:inline'>
							Last comment 5 minutes ago by{' '}
							<span className='underline'>Ms. Maggie</span>
						</li>
					</ul>
				</div>
			</div>
			<div className='flex flex-col items-end'>
				<Heart amount={amount} setAmount={setAmount} />
				<div className='flex'>
					<span className='mr-3 text-base tracking-wider font-normal'>2 Comments</span>
					<div className='dropdown dropdown-end dropdown-bottom flex'>
						<label tabIndex={0} className='text-xl leading-none'>
							...
						</label>
						<ul
							tabIndex={0}
							className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-36'>
							<li>
								<a>View Post</a>
							</li>
							<li>
								<a>Inactive</a>
							</li>
							<li>
								<a>Delete</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</li>
	);
}
