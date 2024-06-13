// typings.d.ts

interface Base {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: Date;
}

interface Block {
	_key: string;
	_type: 'block';
	children: Span[];
	markDefs: any[];
	style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface Span {
	_key: string;
	_type: 'span';
	marks: any[];
	text: string;
}

interface Image {
	_type: 'image';
	asset: Reference;
}

interface Reference {
	_ref: string;
	_type: 'reference';
}

interface Slug {
	_type: 'slug';
	current: string;
}

interface Author extends Base {
	name: string;
	slug: Slug;
	image: Image;
	bio: Block[];
}

interface Category extends Base {
	description: string;
	title: string;
}

interface Post extends Base {
	author?: Author;
	body: Block[];
	categories?: Category[];
	mainImage: Image;
	slug: Slug;
	title: string;
	description: string;
	projectType: string;
}

interface SinglePost extends Base {
	author: Author;
	body: Block[];
	categories: Category[];
	mainImage: Image;
	slug: Slug;
	title: string;
	link: string;
	description: string;
}

interface CV extends Base {
	title: string;
	slug: Slug;
	address: string;
	city: string;
	state: string;
	zip: string;
	country: string;
	phone: string;
	email: string;
	objective: string;
	education: EducationReference[];
}

interface EducationReference extends Reference {
	_ref: string;
}

interface Education extends Base {
	degree: string;
	institution: string;
	start: Date;
	end: Date | null; // null if still attending
	description: Block[];
}

interface Url {
	_type: 'url';
	link: string;
}
