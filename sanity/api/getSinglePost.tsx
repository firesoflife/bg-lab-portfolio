import { groq } from 'next-sanity';
import { client } from '../lib/client';

async function getSinglePost(slug: string) {
	return client.fetch(
		groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]
    }
    `,
		{ slug }
	);
}

export default getSinglePost;
