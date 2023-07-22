import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
	return (
		<>
			<div className='flex items-center justify-between p-5'>
				<Link href='/' className='text-[#ffa024] flex items-center'>
					<ArrowUturnLeftIcon className='h-6 w-5 mr-2' />
					Go To Website
				</Link>

				<div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#ffa] '>
					<h1 className='font-bold text-white'>
						Confused? See Guide to Editing Content Here 🔍{' '}
					</h1>
					<Link href='#' className='text-[#ffa024] font-bold ml-2'>
						Guide to Editing Web Content
					</Link>
				</div>
			</div>
			<div>{props.renderDefault(props)} </div>
		</>
	);
}

export default StudioNavbar;
