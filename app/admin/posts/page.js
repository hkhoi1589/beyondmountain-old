'use client';
import Pagination from '@/components/Post/Pagination/base';
import React from 'react';

export default function Page() {
	return (
		<div className='flex flex-col justify-between flex-1'>
			<div>
				<div className='flex justify-between'>
					<div className='tabs items-start space-x-12'>
						<a className={`px-0 tab tab-bordered tab-active font-bold`}>All (20)</a>
						<a className={`px-0 tab tab-bordered`}>Published (15)</a>
						<a className={`px-0 tab tab-bordered`}>Draft (3)</a>
						<a className={`px-0 tab tab-bordered`}>Trash (1)</a>
					</div>
				</div>
				<div className='flex space-x-2 py-4'>
					<select className='select select-bordered w-40 overflow-hidden text-ellipsis'>
						<option selected>Action</option>
						<option>Edit</option>
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
							<th>Title</th>
							<th>Author</th>
							<th>In Channel</th>
							<th>Comments</th>
							<th className='text-end'>Date</th>
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
								<div className='font-bold'>Hello world!</div>
							</td>
							<td>John B</td>
							<td>Teacher</td>
							<td>10</td>
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
								<div className='font-bold'>Hello world!</div>
							</td>
							<td>katie W.</td>
							<td>Student</td>
							<td>5</td>
							<td className='text-end'>1 week 4 h ago</td>
						</tr>
						{/* row 3 */}
						<tr className='text-sm'>
							<th>
								<label>
									<input type='checkbox' className='checkbox' />
								</label>
							</th>
							<td>
								<div className='font-bold'>Hello world!</div>
							</td>
							<td>mc Maggie</td>
							<td>Sports</td>
							<td>0</td>
							<td className='text-end'>1 week 4 h ago</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Pagination page={1} total={31} offset={6} setPage={() => {}} />
		</div>
	);
}
