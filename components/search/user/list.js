'use client';
import Progress from '@/components/progress';
import Loading from '@/app/forum/you/friends-list/loading';
import UserItem from './item';
import { useRequest } from '@/utils/request';
import useIsInViewport from '@/utils/useIsInViewport';
import { useEffect, useRef } from 'react';

export default function UserList({
	className = '',
	src = '/api/v1/users/search',
	loader = false,
	limit = 8,
	q = '',
	fill = false,
}) {
	if (!loader) return;

	const { data, error, size, setSize, isLoading, hitEnd, noData } = useRequest(src, {
		limit: limit,
		q: q,
	});

	if (error) return 'An error has occurred.';

	// handle autoload with is viewport
	const btnLoad = useRef(null);
	const isInViewport = useIsInViewport(btnLoad);

	useEffect(() => {
		if (data && isInViewport) {
			if (!isLoading && !hitEnd) {
				// console.log('load');
				setSize(size + 1);
			}
		}
	}, [isInViewport]);

	return (
		<div>
			{data &&
				data.map((page, i) => (
					<ul key={i} className={`divide-y-2 divide-neutral ${className}`}>
						{page.data &&
							page.data.map((item, idx) => <UserItem {...item} key={idx} fill={fill} />)}
					</ul>
				))}

			{isLoading && <Loading className='mx-auto my-4' />}

			<div className='text-center my-4' ref={btnLoad}>
				{!isLoading && !hitEnd && <Progress className='mx-auto my-4' />}
			</div>

			{!isLoading && noData && <div className='text-base my-2'>No data</div>}
		</div>
	);
}
