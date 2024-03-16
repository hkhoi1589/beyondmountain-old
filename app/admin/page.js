'use client';
import NewChannel from '@/components/Channel/NewChannel/base';
import NewPost from '@/components/Post/NewPost/base';
import Pagination from '@/components/Post/Pagination/base';
import React from 'react';

export default function Page() {
	return (
		<div className='flex flex-col justify-between flex-1'>
			<div>
				<div className='flex justify-between'>
					<div className='tabs items-start space-x-12'>
						<a className={`px-0 tab tab-bordered tab-active font-bold`}>All (1000)</a>
						<a className={`px-0 tab tab-bordered`}>User (998)</a>
						<a className={`px-0 tab tab-bordered`}>Super User (1)</a>
						<a className={`px-0 tab tab-bordered`}>System User (1)</a>
						<a className={`px-0 tab tab-bordered`}>Deleted (1)</a>
					</div>
					<div className='flex flex-col justify-end lg:flex-row ml-4'>
						<NewChannel className='mr-0 lg:mr-4 mb-4 lg:mb-0' />
						<NewPost />
					</div>
				</div>
				<div className='py-4 flex space-x-6'>
					<div className='flex space-x-2'>
						<select className='select select-bordered w-40 overflow-hidden text-ellipsis'>
							<option selected>Action</option>
							<option>Delete</option>
							<option>Send password reset</option>
						</select>
						<button className='btn btn-neutral text-sm'>Apply</button>
					</div>
					<div className='flex space-x-2'>
						<select className='select select-bordered w-40 overflow-hidden text-ellipsis'>
							<option selected>Change role to ..</option>
							<option>Admin</option>
							<option>User</option>
						</select>
						<button className='btn btn-neutral text-sm'>Change</button>
					</div>
				</div>
				<table className='table'>
					{/* head */}
					<thead>
						<tr className='text-sm'>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<th>Name</th>
							<th>Email address</th>
							<th>Role</th>
							<th>Posts</th>
							<th className='text-end'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr className='text-sm'>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='font-bold'>Jack</div>
							</td>
							<td>jack@email.com</td>
							<td>Super User</td>
							<td>5</td>
							<th>
								<div className='dropdown dropdown-left dropdown-bottom flex justify-end'>
									<label
										tabIndex={0}
										className='btn btn-ghost btn-xs text-xl leading-none'>
										<i className='ri-edit-line'></i>
									</label>
									<ul
										tabIndex={0}
										className='menu dropdown-content z-30 p-2 shadow bg-base-100 rounded-box'>
										<li>
											<a>View Profile</a>
										</li>
										<li>
											<a>Send password reset</a>
										</li>
										<li>
											<a>Delete</a>
										</li>
									</ul>
								</div>
							</th>
						</tr>
						{/* row 2 */}
						<tr className='text-sm'>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='font-bold'>Maggie</div>
							</td>
							<td>maggie@email.com</td>
							<td>User</td>
							<td>1</td>
							<th>
								<div className='dropdown dropdown-left dropdown-bottom flex justify-end'>
									<label
										tabIndex={0}
										className='btn btn-ghost btn-xs text-xl leading-none'>
										<i className='ri-edit-line'></i>
									</label>
									<ul
										tabIndex={0}
										className='menu dropdown-content z-30 p-2 shadow bg-base-100 rounded-box'>
										<li>
											<a>View Profile</a>
										</li>
										<li>
											<a>Send password reset</a>
										</li>
										<li>
											<a>Delete</a>
										</li>
									</ul>
								</div>
							</th>
						</tr>
						{/* row 3 */}
						<tr className='text-sm'>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='font-bold'>Katie</div>
							</td>
							<td>katie@email.com</td>
							<td>System User</td>
							<td>0</td>
							<th>
								<div className='dropdown dropdown-left dropdown-bottom flex justify-end'>
									<label
										tabIndex={0}
										className='btn btn-ghost btn-xs text-xl leading-none'>
										<i className='ri-edit-line'></i>
									</label>
									<ul
										tabIndex={0}
										className='menu dropdown-content z-30 p-2 shadow bg-base-100 rounded-box'>
										<li>
											<a>View Profile</a>
										</li>
										<li>
											<a>Send password reset</a>
										</li>
										<li>
											<a>Delete</a>
										</li>
									</ul>
								</div>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
			<Pagination page={1} total={31} offset={6} setPage={() => {}} />
		</div>
	);
}
