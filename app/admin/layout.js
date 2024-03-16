'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
	const pathname = usePathname();

	const listBadgeTabs = [
		{
			label: 'Users',
			href: '/admin',
			active: pathname === '/admin',
		},
		{
			label: 'Channels',
			href: '/admin/channels',
			active: pathname.match(/\/admin\/channels/),
		},
		{
			label: 'Posts',
			href: '/admin/posts',
			active: pathname.match(/\/admin\/posts/),
		},
		{
			label: 'Comments',
			href: '/admin/comments',
			active: pathname.match(/\/admin\/comments/),
		},
	];

	return (
		<div className='container mx-auto py-4 h-screen flex flex-col'>
			<div className='flex items-center justify-between mb-2'>
				<div className='space-x-4 flex justify-between sm:justify-normal'>
					{listBadgeTabs.map((tab, idx) => (
						<Link
							href={tab.href}
							className={`btn btn-sm rounded-xl capitalize ${!tab.active && 'btn-outline'}`}
							key={`tab_badge-${idx}`}>
							{tab.label}
						</Link>
					))}
				</div>
				<div className='flex items-center'>
					<div className='text-sm font-semibold rounded border-2 p-1 border-success mr-2'>
						Super Admin
					</div>
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
							<div className='w-10 rounded-full'>
								<img src='/img/avatar/kimthiendung.jpg' />
							</div>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content border border-neutral shadow-sm bg-base-100 rounded-box mt-3 z-[1] p-2 w-36'>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<main id='main' className='relative w-full mx-auto flex-1 flex flex-row overflow-y-hidden'>
				{children}
			</main>
		</div>
	);
}
