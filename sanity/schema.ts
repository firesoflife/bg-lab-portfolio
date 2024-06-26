import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import { cv } from './schemas/cv';
import { education } from './schemas/education';
import skills from './schemas/skills';
import { experience } from './schemas/experience';
import { profileBlock } from './schemas/profileBlock';
import { certification } from './schemas/certifaction';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		post,
		author,
		category,
		blockContent,
		cv,
		education,
		certification,
		skills,
		experience,
		profileBlock,
	],
};
