import React from 'react';

const CV = () => {
	return (
		<div>
			<div className='bg-neutral-300 p-8'>
				<div className='max-w-4xl mx-auto bg-neutral-800 shadow-lg py-24 px-24'>
					<div className='grid grid-cols-2 gap-4 mb-6'>
						<div>
							<h1 className='text-3xl font-thin flex flex-col'>
								<span>Bryan</span>
								<span className='ml-3'>Goertz</span>
							</h1>
							<p className='text-sm'>[Objective]</p>
						</div>
						<div className='text-right'>
							<p>[Address]</p>
							<p>[Phone]</p>
							<p>[Email]</p>
							<p>[LinkedIn Profile]</p>
							<p>[Twitter/Blog/Portfolio]</p>
						</div>
					</div>

					<div className='mb-6'>
						<h2 className='font-bold text-xl mb-2'>Education</h2>
						<p>[Degree Title] | [School]</p>
						<p>[Dates From] - [To]</p>
						<p>[Details about GPA, awards, and honors]</p>
					</div>

					<div className='mb-6'>
						<h2 className='font-bold text-xl mb-2'>Experience</h2>
						<p>[Job Title] | [Company]</p>
						<p>[Dates From] - [To]</p>
						<p>[Responsibilities and achievements]</p>
					</div>

					<div className='mb-6'>
						<h2 className='font-bold text-xl mb-2'>Skills</h2>
						<ul className='list-disc ml-5'>
							<li>[Skill]</li>
							<li>[Skill]</li>
							<li>[Skill]</li>
						</ul>
					</div>

					<div>
						<h2 className='font-bold text-xl mb-2'>Activities</h2>
						<p>[Activities and relevant passions]</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CV;
