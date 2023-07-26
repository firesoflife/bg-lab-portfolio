import getPosts from '@/sanity/api/getPosts';
import BlogList from '../components/BlogList';

export default async function Home() {
	const post = await getPosts();

	return (
		<>
			<BlogList posts={post} />
		</>
	);
}
