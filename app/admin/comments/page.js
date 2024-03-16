'use client';
import Pagination from '@/components/Post/Pagination/base';
import React from 'react';

export default function Page() {
	return (
		<div className='flex flex-col justify-between flex-1'>
			<div>
				<div className='flex justify-between'>
					<div className='tabs items-start space-x-12'>
						<a className={`px-0 tab tab-bordered tab-active font-bold`}>All (1000)</a>
						<a className={`px-0 tab tab-bordered`}>Pending (995)</a>
						<a className={`px-0 tab tab-bordered`}>Approved (5)</a>
						<a className={`px-0 tab tab-bordered`}>Spam (5)</a>
						<a className={`px-0 tab tab-bordered`}>Trash</a>
					</div>
				</div>
				<div className='flex space-x-2 py-4'>
					<select className='select select-bordered w-40 overflow-hidden text-ellipsis'>
						<option selected>Action</option>
						<option>Unapprove</option>
						<option>Approve</option>
						<option>Mark as spam</option>
						<option>Move to trash</option>
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
							<th>Author</th>
							<th>Comments</th>
							<th>Commented on Post</th>
							<th>In Respone To</th>
							<th className='text-end'>Submitted on</th>
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
								<div className='font-bold'>John H.</div>
							</td>
							<td>Lorem ipsum dolor sit amet, conse</td>
							<td>Hello world!</td>
							<td>john@email.com</td>
							<td className='text-end'>2023/05/24 at 6:20 pm</td>
						</tr>
						{/* row 2 */}
						<tr className='text-sm'>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='font-bold'>Nick Ut</div>
							</td>
							<td>Lorem ipsum dolor sit amet, conse</td>
							<td>Hello world!</td>
							<td>mc@email.com</td>
							<td className='text-end'>2023/05/24 at 6:20 pm</td>
						</tr>
						{/* row 3 */}
						<tr className='text-sm'>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='font-bold'>Laura H</div>
							</td>
							<td>Lorem ipsum dolor sit amet, conse</td>
							<td>Hello world!</td>
							<td>--</td>
							<td className='text-end'>2023/05/24 at 6:20 pm</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Pagination page={1} total={31} offset={6} setPage={() => {}} />
		</div>
	);
}
