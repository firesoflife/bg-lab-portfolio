import getSinglePost from '@/sanity/api/getSinglePost';

type Props = {
	params: {
		slug: string;
	};
};

async function Post({ params: { slug } }: Props) {
	const singlePost = await getSinglePost(slug);

	return (
		<>
			<div>Post: {singlePost.slug.current} </div>
			<p> {singlePost.title} </p>
		</>
	);
}

export default Post;
