'use client';
import Script from 'next/script';

export default function plugins({ children }) {
	return (
		<>
			<Script src='https://unpkg.com/@popperjs/core@2' />
			<Script
				src='https://unpkg.com/tippy.js@6'
				onLoad={() => {
					/**
					 * use <element data-tippy-content="tootip text"></element>
					 */
					if (tippy) tippy('[data-tippy-content]'); // run all element attribute data-tippy-content
				}}
			/>
		</>
	);
}
