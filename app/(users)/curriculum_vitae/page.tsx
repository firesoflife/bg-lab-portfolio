import getCV from '@/sanity/api/getCV';
import Link from 'next/link';

// Icons
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const CV = async () => {
	const cvData: CV = await getCV();
	return (
		<div>
			<div className='bg-neutral-300 p-8'>
				<h1 className='text-4xl text-center text-neutral-800 m-5 font-serif underline underline-offset-4 decoration-black'>
					{cvData.title}
				</h1>
				<div className='max-w-4xl mx-auto bg-neutral-800 shadow-lg py-24 px-24'>
					<section className='flex flex-col'>
						<div>
							<h1 className='text-3xl font-thin flex flex-col justify-center text-center mb-4'>
								Bryan Goertz
							</h1>
							<div className='text-center'>
								<p>
									{cvData.address}, {cvData.city}, {cvData.state}, {cvData.zip},{' '}
									{cvData.country}
								</p>
								<p>
									{cvData.phone} | {cvData.email}{' '}
								</p>
								<div className='my-4 text-3xl flex  mx-auto px-8 justify-center gap-x-12 pb-10'>
									<Link href='' className=''>
										<FaLinkedin />
									</Link>
									<Link href=''>
										<FaGithub />
									</Link>
								</div>
							</div>
						</div>
					</section>

					<section className='pb-8 font-thin'>
						<h2 className='text-2xl'>Profile</h2>
						<div className='border bg-white w-full'></div>
					</section>

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
