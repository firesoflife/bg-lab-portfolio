import BlogListDisplay from '@/app/components/BlogListDisplay';
import getPosts from '@/sanity/api/getPosts';

export const revalidate = 30;

export default async function Home() {
	const post = await getPosts();

	return (
		<>
			<BlogListDisplay posts={post} />
		</>
	);
}
