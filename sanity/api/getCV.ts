import { groq } from 'next-sanity';
import { client } from '../lib/client';

async function getCV() {
	return client.fetch(
		groq`
        *[_type == "cv"]{
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
            skillsList,
            education[]->{
                _id,
                degree,
                institution,
                start,
                end,
                description
            },
            certification[]->{
                _id,
                title,
                institution,
                achieved,
                expiration,
                description,
                "imageUrl": image.asset->url,
                certReference,
                link
            },
            skills[]->{
                _id,
                title
            },
            experience[]->{
                _id,
                jobTitle,
                company,
                start,
                end,
                description
            },
            interests[]->{
                _id,
                title
            },
        }
        [0]    // Ensuring only the first cv document is fetched
        `
	);
}

export default getCV;
