import { defineType, defineField, defineArrayMember } from 'sanity';

export const cv = defineType({
	name: 'cv',
	title: 'Curriculum Vitae',
	type: 'document',
	groups: [
		{ name: 'title', title: 'Title and Meta' },
		{ name: 'summary', title: 'Summary' },
		{ name: 'address', title: 'Address' },
		{ name: 'certification', title: 'Certifications' },
		{ name: 'education', title: 'Education' },
		{ name: 'projects', title: 'Projects and Awards' },
		{ name: 'experience', title: 'Experience' },
		{ name: 'skills', title: 'Skills' },
		{ name: 'interests', title: 'Interests' },
		{ name: 'references', title: 'References' },
	],
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			group: 'title',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			group: 'title',
		}),
		// Address fields
		defineField({
			name: 'address',
			title: 'Address',
			type: 'string',
			group: 'address',
		}),
		defineField({
			name: 'city',
			title: 'City',
			type: 'string',
			group: 'address',
		}),
		defineField({
			name: 'state',
			title: 'State',
			type: 'string',
			group: 'address',
		}),
		defineField({
			name: 'zip',
			title: 'Zip',
			type: 'string',
			group: 'address',
		}),
		defineField({
			name: 'country',
			title: 'Country',
			type: 'string',
			group: 'address',
		}),
		defineField({
			name: 'phone',
			title: 'Phone',
			type: 'string',
			group: 'address',
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			group: 'address',
		}),
		// Objective field
		defineField({
			name: 'about',
			title: 'About',
			type: 'text',
			group: 'summary',
		}),
		// Education field
		defineField({
			name: 'education',
			title: 'Education',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'education' }],
				}),
			],
			group: 'education',
		}),
		// Certification field
		defineField({
			name: 'certification',
			title: 'Certifications',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'certification' }],
				}),
			],
			group: 'certification',
		}),
		// Work experience field
		defineField({
			name: 'experience',
			title: 'Experience',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'experience' }],
				}),
			],
			group: 'experience',
		}),
		defineField({
			name: 'skillsList',
			title: 'List of Skills',
			type: 'array',
			of: [{ type: 'string' }],
			group: 'skills',
		}),
		// Skills field
		defineField({
			name: 'skills',
			title: 'Skills',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'skills' }],
				}),
			],
			group: 'skills',
		}),
		// Interests field
		defineField({
			name: 'interests',
			title: 'Interests and Other Activities',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'string',
				}),
			],
			group: 'interests',
		}),
	],
});
