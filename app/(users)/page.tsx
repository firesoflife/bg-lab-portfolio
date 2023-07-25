import getPosts from '@/sanity/api/getPosts';
import BlogList from '../components/BlogList';

export default async function Home() {
	const post = await getPosts();

	console.log(post);

	return (
		<>
			{/* <h1>Here is DATA: {post.title} </h1> */}
			<BlogList posts={post} />
		</>
	);
}
