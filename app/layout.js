import '@/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import Client from './client'; // all plugins run only client

export const metadata = {
	title: 'Beyond',
	description: 'The home page',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body>
				<ToastContainer draggable={false} />
				{children}
			</body>
			{/* <Client /> */}
		</html>
	);
}
