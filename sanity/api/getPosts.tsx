// import { groq } from 'next-sanity';
// import { client } from '../lib/client';

// async function getPosts(projectType: string) {
// 	return client.fetch(
// 		// groq`
// 		// *[_type == "post"] {
// 		//     ...,
// 		//     author->,
// 		//     categories[]->,
// 		//     projectType,
// 		// } | order(_createdAt desc)
// 		// `
// 		groq`
//         *[_type == "post" && projectType == $projectType] {
//             ...,
//             author->,
//             categories[]->,
//             projectType,
//         } | order(_createdAt desc)
//         `,
// 		{ projectType }
// 	);
// }

// export default getPosts;

import { groq } from 'next-sanity';
import { client } from '../lib/client';

async function getPosts(projectType?: string) {
	const query = projectType
		? groq`*[_type == "post" && projectType == $projectType] {...}`
		: groq`*[_type == "post"] {...}`;

	return client.fetch(query, projectType ? { projectType } : {});
}

export default getPosts;
