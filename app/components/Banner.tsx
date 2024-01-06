import { BlogTypeToggle } from './BlogTypeToggle';

function Banner() {
	return (
		<div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
			<div>
				<h1 className='text-5xl font-thin mb-5'>BG-Lab IT Projects</h1>
				<h2 className='mt-5 md:mt-0 font-normal text-xl'>
					Browse through some of my{' '}
					<span className='underline decoration-2 leading-relaxed decoration-white text-green-400'>
						IT & Home Lab Projects
					</span>{' '}
					Projects
				</h2>
			</div>
			{/* <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
				Web Development | | Tech Projects | | Home Lab Projects | | Tutorials
			</p> */}
			{/* REPLACE ABOVE P WITH SUB-MENU TO DIFFERENT BLOG TYPES */}
		</div>
	);
}

export default Banner;
