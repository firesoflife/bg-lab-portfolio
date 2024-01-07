'use client';

import { useState } from 'react';
import BlogTypeToggle from './BlogTypeToggle';
import BlogList from './BlogList';

type BlogListDisplay = {
	posts: Post[];
};

const BlogListDisplay: React.FC<BlogListDisplay> = ({ posts }) => {
	const [projectType, setProjectType] = useState('webDev');

	const handleToggle = (type: string) => {
		setProjectType(type);
	};

	return (
		<div>
			<BlogTypeToggle onToggle={handleToggle} />
			<BlogList posts={posts} projectType={projectType} />
		</div>
	);
};

export default BlogListDisplay;
