import { defineType, defineField } from 'sanity';

export const experience = defineType({
	name: 'experience',
	title: 'Work Experience',
	type: 'document',
	fields: [
		defineField({
			name: 'jobTitle',
			title: 'Job Title',
			type: 'string',
		}),
		defineField({
			name: 'company',
			title: 'Company',
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
