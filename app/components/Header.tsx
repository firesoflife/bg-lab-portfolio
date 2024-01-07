'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/bg-lab-logo.png';

function Header() {
	return (
		<div className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
			<div className='flex items-center space-x-2'>
				<Link href='/'>
					<Image
						className='rounded-full'
						src={logo}
						width={50}
						height={50}
						alt='bg-lab logo'
					/>
				</Link>
				<h1>The BG-Lab</h1>
			</div>
			<div>
				<Link
					href='mailto:bryangoertz@gmail.com'
					className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#ffa024] flex items-center rounded-full text-center'>
					Get In Touch with the BG-Lab
				</Link>
			</div>
		</div>
	);
}

export default Header;
