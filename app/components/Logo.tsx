import Image from 'next/image';
import bglab from '../../public/bg-lab-logo.png';

function Logo(props: any) {
	const { renderDefault, title } = props;

	return (
		<div className='flex items-center space-x-2'>
			<Image
				className='rounded-full object-cover'
				height={50}
				width={50}
				src={bglab}
				alt='logo'
			/>

			<>{renderDefault(props)}</>
		</div>
	);
}

export default Logo;
