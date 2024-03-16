'use client';
import { useState } from 'react';

export default function Tabs({ className = '', items }) {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<div className={`${className}`}>
			<div className='tabs'>
				{items.map((tab, index) => (
					<span
						key={index}
						onClick={() => handleTabClick(index)}
						className={`tab tab-lifted ${activeTab === index ? 'tab-active' : ''}`}>
						{tab.title}
					</span>
				))}
			</div>
			<div className='tab-content bg-base-100 p-4 rounded-lg'>{items[activeTab].content}</div>
		</div>
	);
}
