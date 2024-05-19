import { groq } from 'next-sanity';
import { client } from '../lib/client';

async function getCV() {
	return client.fetch(
		groq`
        *[_type == "cv"][0] {
            ...,
            title,
            slug,
            address,
            city,
            state,
            zip,
            country,
            phone,
            email,
            objective,
            education[]->,
            skills[]->,
            experience[]->,
            interests[]->,
        }`
	);
}

export default getCV;
