import getCV from '@/sanity/api/getCV';
import {
	Certification,
	Education,
	Experience,
	CV as CVType,
	Skill,
} from '@/typings';
import Link from 'next/link';
import Image from 'next/image';

import { HiExternalLink } from 'react-icons/hi';

// Icons
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { cv } from '@/sanity/schemas/cv';

export const revalidate = 1;

const CV = async () => {
	const cvData = await getCV();

	return (
		<div>
			<div className='bg-neutral-300 p-8'>
				<h1 className='text-4xl text-center text-neutral-800 m-5 font-serif underline underline-offset-4 decoration-black'>
					{cvData.title}
				</h1>
				<div className='flex'>
					<div className='max-w-4xl mx-auto bg-neutral-800 shadow-lg py-24 px-24'>
						<section className='flex flex-col'>
							<div>
								<h1 className='text-3xl font-thin flex flex-col justify-center text-center mb-4'>
									Bryan Goertz
								</h1>
								<div className='text-center'>
									<p>
										{cvData.address}, {cvData.city}, {cvData.state},{' '}
										{cvData.zip}, {cvData.country}
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
							<h2 className='text-2xl pb-2'>Profile</h2>
							<div className='p-4  pl-0 rounded-tl-none rounded-bl-none w-full font-light text-base text-neutral-200'>
								{cvData.about}
							</div>
						</section>
						{/* ///////////// EDUCATION SECTION///////////// */}
						<section className='mb-6'>
							<h2 className='border border-x-0 border-spacing-1 py-1 border-white font-extralight text-2xl mb-5 border-opacity-30'>
								Education
							</h2>

							{cvData.education &&
								cvData.education.map((edu: Education) => (
									<div key={edu._id}>
										<div className='flex justify-between'>
											<p className='pb-2 text-lg'>
												<span className='font-bold italic'>{edu.degree}</span>{' '}
												&mdash;{' '}
												<span className='italic'> {edu.institution} </span>
											</p>
											<p className='font-thin italic'>
												{edu.start ? edu.start + ' -' : ''}{' '}
												{edu.end ? edu.end : 'Present'}
											</p>
										</div>
										<ul className='list-disc ml-5 max-w-[80%] mb-4'>
											{edu.description?.map((desc, index) => (
												<li className='mb-1' key={index}>
													{desc}
												</li>
											))}
										</ul>
									</div>
								))}
						</section>
						{/* ///////////// CERTIFICATION SECTION///////////// */}
						<section className='mb-6'>
							<h2 className='border border-x-0 border-spacing-1 py-1 border-white font-extralight text-2xl mb-5 border-opacity-30'>
								Technical & Professional Certifications
							</h2>
							<div className='grid grid-cols-3 gap-3'>
								{cvData.certification &&
									cvData.certification.map((cert: Certification) => (
										// <div key={cert._id} className='flex flex-col items-center'>
										<div key={cert._id} className='grid grid-col-2 m-auto'>
											<div className='m-auto'>
												<Link target='_blank' href={cert.link}>
													<div className='m-h-[120px]'>
														<Image
															src={cert.imageUrl}
															width={100}
															height={100}
															alt={cert.alt}
														/>
													</div>
												</Link>
											</div>
											<div className='text-left'>
												<p>{cert.title}</p>
												<p>{cert.institution}</p>
												<p>{cert.certReference || 'No Referrence'}</p>
											</div>
										</div>
									))}
							</div>
						</section>

						{/* ///////////// EXPERIENCE SECTION///////////// */}
						<section className='mb-6'>
							<h2 className='border border-x-0 border-spacing-1 py-1 border-white font-extralight text-2xl mb-5 border-opacity-30'>
								Experience
							</h2>
							{cvData.experience &&
								cvData.experience.map((exp: Experience) => (
									<div key={exp._id}>
										<div className='flex justify-between'>
											<p className='pb-1'>
												<span className='font-semibold italic text-lg'>
													{exp.jobTitle}
												</span>{' '}
												&mdash; <span className='italic'>{exp.company}</span>
											</p>
											<p className='font-thin italic'>
												{exp.start} - {exp.end ? exp.end : 'Present'}
											</p>
										</div>
										<ul className='list-disc ml-5 mb-4'>
											{exp.description?.map((desc, index) => (
												<li className='mb-1' key={index}>
													{desc}
												</li>
											))}
										</ul>
									</div>
								))}
						</section>

						{/* ///////////// SKILLS SECTION///////////// */}
						<section className='mb-6'>
							<h2 className='font-extralight text-2xl mb-1'>Skills</h2>
							<div className='border border-neutral-700 mb-2'></div>
							{cvData.skillsList && (
								<div className='grid grid-cols-3 gap-3'>
									{cvData.skillsList.map((skill: string, index: number) => (
										<div className='flex items-center'>
											<p className='pr-2'>•</p>
											<div key={index} className='flex items-center'>
												{skill}
											</div>
										</div>
									))}
								</div>
							)}
						</section>

						<div>
							<h2 className='font-extralight text-2xl mb-1'>Activities</h2>
							<div className='border border-neutral-700 b mb-2 '></div>

							<p>[Activities and relevant passions]</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CV;
