import Banner from '../../components/Banner';
import Header from '../../components/Header';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<main className='w-[95%] mx-auto'>
				<Header />
				<Banner />
				{children}
			</main>
		</>
	);
}
