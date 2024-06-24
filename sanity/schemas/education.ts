import { defineType, defineField } from 'sanity';

export const education = defineType({
	name: 'education',
	title: 'Education',
	type: 'document',
	fields: [
		defineField({
			name: 'degree',
			title: 'Degree or Certification',
			type: 'string',
		}),
		defineField({
			name: 'institution',
			title: 'Institution',
			type: 'string',
		}),
		defineField({
			name: 'start',
			title: 'Start Date',
			type: 'string',
		}),
		defineField({
			name: 'end',
			title: 'End Date',
			type: 'string',
			description: 'Leave blank if still attending',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'string' }],
		}),
	],
});
