import { groq } from 'next-sanity';
import { client } from '../lib/client';

async function getPosts() {
	return client.fetch(
		groq`      
        *[_type == "post"] {
            ...,
            author->,
            categories[]->,
            projectType,
        } | order(_createdAt desc)
   `
	);
}

export default getPosts;
