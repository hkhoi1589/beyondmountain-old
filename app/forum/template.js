'use client';
import { useNotiStore, useUserStore } from '@/store/forum';
import jwt_decode from 'jwt-decode';
import storage from '@/store/storage';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import schoolApi from '@/services/schoolApi.service';

import dynamic from 'next/dynamic';
import NavBarLoading from '@/components/navbar/loading';
import SideBarLoading from '@/components/sidebar/loading';
import fetcher from '@/utils/fetcher';
import { API } from '@/utils/constant';

const Navbar = dynamic(() => import('@/components/navbar/forum'), {
	loading: () => <NavBarLoading />,
});
const Sidebar = dynamic(() => import('@/components/sidebar/forum'), {
	loading: () => <SideBarLoading />,
	ssr: false,
}); // because more in useAppStore

export default function ForumTemplate({ children }) {
	const router = useRouter();
	const { setNoti, setFCMToken } = useNotiStore();
	const { refresh, setAccess, setRefresh, setProfile } = useUserStore();

	const onLogout = async () => {
		// remove forumUser, forumNoti
		setNoti([]);
		setFCMToken('');

		setAccess('');
		setRefresh('');
		setProfile({});
		return router.push('/auth/login/?msg=forum');
	};

	useEffect(() => {
		storage
			.getItem('forumUser')
			.then(async (forumUser) => {
				if (forumUser) {
					const data = JSON.parse(forumUser);
					const { access } = data.state;

					if (!access) {
						onLogout();
					} else {
						const decodedAccess = jwt_decode(access);
						const currentTime = Date.now() / 1000;

						if (decodedAccess.exp < currentTime) {
							// access het han -> kiem tra refresh het han chua
							const decodedRefresh = jwt_decode(refresh);

							if (decodedRefresh.exp < currentTime) {
								// neu refresh het han luon -> login
								toast.warn('Token is expired');
								onLogout();
							} else {
								console.log('RefreshToken', decodedRefresh);
								const data = await schoolApi.RefreshToken(refresh);
								setAccess(data.access_token);
								setRefresh(data.refresh_token);

								const me = await fetcher(`${API}/api/v1/userprofile/me`, 'GET');

								if (me.status) {
									const obj = me?.data || {};
									const decoded = jwt_decode(data.access_token);

									setProfile({
										...obj,
										school_id: decoded.school_id,
										school_roles: decoded.school_roles,
										user_id: decoded.user_id,
										expire: decoded.exp - decoded.iat, // Time remaining (second)
									});
								}
							}
						}
					}
				} else return router.push('/auth/login/?msg=forum');
			})
			.catch((e) => {
				console.log(e);
				onLogout();
			});
	}, []);

	return (
		<div className='relative h-screen flex flex-col'>
			<Navbar className='relative z-40 border-b border-neutral shadow-sm' />
			<main
				id='main'
				className='relative w-full mx-auto flex-1 flex flex-row overflow-y-hidden'>
				<Sidebar className='relative shadow-sm border-r border-neutral' />
				{children}
			</main>
		</div>
	);
}
