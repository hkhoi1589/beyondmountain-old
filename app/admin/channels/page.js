'use client';
import NewChannel from '@/components/Channel/NewChannel/base';
import Pagination from '@/components/Post/Pagination/base';
import React from 'react';

export default function Page() {
	return (
		<div className='flex flex-col justify-between flex-1'>
			<div>
				<div className='flex justify-between'>
					<div className='tabs items-start space-x-12'>
						<a className={`px-0 tab tab-bordered tab-active font-bold`}>All (16)</a>
						<a className={`px-0 tab tab-bordered`}>Public (10)</a>
						<a className={`px-0 tab tab-bordered`}>Private (5)</a>
						<a className={`px-0 tab tab-bordered`}>Suspended (1)</a>
						<a className={`px-0 tab tab-bordered`}>Deleted (1)</a>
					</div>
					<NewChannel className='mr-0 lg:mr-4 mb-4 lg:mb-0' />
				</div>
				<div className='flex space-x-2 py-4'>
					<select className='select select-bordered w-40 overflow-hidden text-ellipsis'>
						<option selected>Action</option>
						<option>Suspended</option>
						<option>Delete</option>
					</select>
					<button className='btn btn-neutral text-sm'>Apply</button>
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
							<th>Owner</th>
							<th>Description</th>
							<th>Amount of Members</th>
							<th className='text-end'>Age</th>
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
								<div className='font-bold'>Announcement</div>
							</td>
							<td>Jack R.</td>
							<td>Hello world!</td>
							<td>100</td>
							<td className='text-end'>1 week 4 h ago</td>
						</tr>
						{/* row 2 */}
						<tr className='text-sm'>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='font-bold'>Teacher</div>
							</td>
							<td>Maggie Mc</td>
							<td>Hello world!</td>
							<td>1000</td>
							<td className='text-end'>1 year ago</td>
						</tr>
						{/* row 3 */}
						<tr className='text-sm'>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='font-bold'>Student</div>
							</td>
							<td>Katie</td>
							<td>Hello world!</td>
							<td>5</td>
							<td className='text-end'>1 month ago</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Pagination page={1} total={31} offset={6} setPage={() => {}} />
		</div>
	);
}
