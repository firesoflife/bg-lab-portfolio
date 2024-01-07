import getPosts from '@/sanity/api/getPosts';
import bgImage from '../../public/bg-portfolio4.png';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { FaInstagram } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

import Link from 'next/link';
import BlogListDisplay from '../components/BlogListDisplay';

export const revalidate = 30;

export default async function Home() {
	// const post = await getPosts();

	return (
		<>
			<main
				className='relative text-white h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat '
				style={{ backgroundImage: `url(${bgImage.src})` }}>
				<div className='absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50'></div>
				<div className='relative flex flex-col z-10 h-full justify-center'>
					<h1 className='text-5xl font-light mb-4 text-green-300'>
						<span className='text-pink-300'>Hello,</span> I'm Bryan
					</h1>
					<h2 className='text-3xl mb-6'>
						Web Designer | Developer | IT Professional
					</h2>
					<p className='mb-4'>
						Have a poke around and take a look at some of my work
					</p>
					<div className='flex flex-col justify-between'>
						<button className='text-left mb-10'>
							<Link
								href='/blog'
								className='inline-block outline outline-1 outline-green-300 text-white px-6 py-3 rounded-sm font-semibold transition duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50'>
								SEE MY WORK
							</Link>
						</button>
						<p className='mb-4'>See why I'm the right person for the job</p>
						<button className='text-left'>
							<Link
								href='#work'
								className='inline-block outline outline-1 outline-green-300 text-white px-6 py-3 rounded-sm font-semibold transition duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50'>
								SEE MY CV
							</Link>
						</button>
					</div>
				</div>
				<footer className='flex p-10 justify-between w-full z-50'>
					<p className=''>
						Design + Code by
						<br /> Bryan Goertz &copy; 2023
					</p>
					<div className='flex align-middle'>
						<ul className='flex space-x-3'>
							<li className='border-b-2 border-transparent hover:border-b-2 hover:border-pink-100 text-2xl pb-1'>
								<Link href={'https://www.linkedin.com/in/bryan-goertz/'}>
									<TiSocialLinkedin height={100} />{' '}
								</Link>
							</li>
							<li className='border-b-2 border-transparent hover:border-b-2 hover:border-pink-100 text-2xl pb-1'>
								<Link href={'https://www.facebook.com/bryan.d.goertz'}>
									<TiSocialFacebook height={100} />{' '}
								</Link>
							</li>
							<li className='border-b-2 border-transparent hover:border-b-2 hover:border-pink-100 text-2xl pb-1'>
								<Link href={'https://github.com/firesoflife'}>
									<FaGithub height={100} />{' '}
								</Link>
							</li>
							<li className='border-b-2 border-transparent hover:border-b-2 hover:border-pink-100 text-2xl pb-1'>
								<Link href={'https://www.instagram.com/bryangoertz/'}>
									<FaInstagram height={100} />{' '}
								</Link>
							</li>
						</ul>
					</div>
				</footer>
			</main>
		</>
	);
}
