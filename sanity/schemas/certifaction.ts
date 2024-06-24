import { defineField, defineType, defineArrayMember } from 'sanity';

export const certification = defineType({
	name: 'certification',
	title: 'Certification',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'institution',
			title: 'Institution',
			type: 'string',
		}),
		defineField({
			name: 'achieved',
			title: 'Date Achieved',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
		defineField({
			name: 'image',
			title: 'Certification Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
				},
			],
		}),
		defineField({
			name: 'certReference',
			title: 'Certification Reference Number',
			type: 'string',
		}),
		defineField({
			name: 'link',
			title: 'Certification Link',
			type: 'url',
		}),
	],
});
