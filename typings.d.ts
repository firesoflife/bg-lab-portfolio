type Base = {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: Date;
};

interface Post extends Base {
	author?: Author;
	body: Block[];
	categories?: category[];
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
	link: Url;
	description: string;
}

interface Author extends Base {
	bio: Block[];
	image: Image;
	name: string;
	slug: Slug;
}

interface Image extends Base {
	_type: 'image';
	asset: Reference;
}

interface Reference extends Base {
	_ref: string;
	_type: 'reference';
}

interface Slug extends Base {
	_type: 'slug';
	current: string;
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

interface Category extends Base {
	description: string;
	title: string;
}

interface mainImage {
	_type: 'image';
	asset: 'reference';
}

interface Title {
	_type: 'string';
	current: string;
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
	// Additional fields for projects, experience, skills, interests, and references
	// can be added here as per your schema's structure
}

interface EducationReference extends Reference {
	_ref: string; // References to education documents
}

interface Education extends Base {
	degree: string;
	institution: string;
	start: Date;
	end: Date | null; // null if still attending
	description: Block[]; // Assuming 'block' type is similar to the one in your existing typings
}
