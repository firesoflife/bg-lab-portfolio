import { defineType, defineField } from 'sanity';

export const profileBlock = defineType({
	name: 'profileBlock',
	title: 'Profile Block',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Block Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Block Description',
			type: 'text',
		}),
	],
});
