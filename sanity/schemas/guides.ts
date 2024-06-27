import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'guide',
	title: 'Guide',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'string',
		}),
		defineField({
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'category' } }],
		}),
		defineField({
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: [{ type: 'author' }],
		}),
		defineField({
			name: 'file',
			title: 'File',
			type: 'file',
		}),
	],
});
