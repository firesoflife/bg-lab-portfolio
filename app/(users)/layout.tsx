import Banner from '../components/Banner';
import Header from '../components/Header';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<main>{children}</main>
		</>
	);
}
