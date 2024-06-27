'use client';

import { useState } from 'react';

type BlogTypeToggleProps = {
	onToggle: (type: string) => void;
};

const BlogTypeToggle: React.FC<BlogTypeToggleProps> = ({ onToggle }) => {
	const [blogType, setBlogType] = useState('webDev');

	const handleToggle = (type: string) => {
		setBlogType(type);
		onToggle(type);
	};

	return (
		<div className='flex justify-center space-x-4 py-4'>
			<button
				onClick={() => handleToggle('webDev')}
				className={`py-2 px-4 rounded ${
					blogType === 'webDev'
						? 'bg-[#ff2457] text-white'
						: 'bg-white text-black'
				}`}>
				Web Projects
			</button>
			<button
				onClick={() => handleToggle('itProject')}
				className={`py-2 px-4 rounded ${
					blogType === 'itProject'
						? 'bg-[#ff2457] text-white'
						: 'bg-white text-black'
				}`}>
				IT Projects
			</button>
		</div>
	);
};

export default BlogTypeToggle;
