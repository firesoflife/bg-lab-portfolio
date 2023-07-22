function Banner() {
	return (
		<div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
			<div>
				<h1 className='text-7xl'>The BG-Lab Project Site</h1>
				<h2 className='mt-5 md:mt-0'>
					Welcom to the top{' '}
					<span className='underline decoration-2 leading-relaxed decoration-white text-[#ffa024] '>
						Technology, Home Lab and Web Development
					</span>{' '}
					site on the web
				</h2>
			</div>
			<p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
				Web Development | | Tech Projects | | Home Lab Projects | | Tutorials
			</p>
		</div>
	);
}

export default Banner;
