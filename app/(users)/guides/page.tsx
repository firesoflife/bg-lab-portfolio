import GuidesList from '@/app/components/guidesComponents/GuidesList';

export const revalidate = 10;

export default async function Home() {
	return (
		<>
			<GuidesList />
		</>
	);
}
