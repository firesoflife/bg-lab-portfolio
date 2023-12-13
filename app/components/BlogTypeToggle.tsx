'use client';

import React, { useState } from 'react';

type BlogTypeToggleProps = {
	itProjects: boolean;
	webDev: boolean;
};

export const BlogTypeToggle: React.FC<BlogTypeToggleProps> = ({
	itProjects,
	webDev,
}) => {
	const [showITProjects, setShowITProjects] = useState(true);
	return (
		<>
			<div>
				<ul className='flex space-x-3'>
					<li>
						<button
							onClick={() => setShowITProjects(true)}
							className='px-5 py-3 text-sm md:text-base text-pink-300 hover:text-pink-200 flex items-center text-center border-b-2 border-transparent hover:border-green-300'>
							IT Projects
						</button>
					</li>
					<li>
						<button
							onClick={() => setShowITProjects(true)}
							className='px-5 py-3 text-sm md:text-base text-pink-300 hover:text-pink-200 flex items-center text-center border-b-2 border-transparent hover:border-green-300'>
							Web Dev Projects
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};
