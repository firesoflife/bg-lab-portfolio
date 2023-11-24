import Image from 'next/image';
import getSinglePost from '@/sanity/api/getSinglePost';
import urlFor from '@/sanity/lib/urlFor';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/app/components/RichTextComponents';
import { client } from '@/sanity/lib/client';

type Props = {
	params: {
		slug: string;
	};
};

// Speed Optimization with StatParams --> Static Pages

export async function generateStaticParams() {
	const query = groq`*[_type=='post']
		{
			slug
		}
	`;
	const slugs: Post[] = await client.fetch(query);
	const slugRoutes = slugs.map((slug) => slug.slug.current);

	return slugRoutes.map((slug) => ({
		slug,
	}));
}

export const revalidate = 60;

async function Post({ params: { slug } }: Props) {
	const singlePost = await getSinglePost(slug);

	return (
		<article className='px-10 pb-28'>
			<section className='space-y-2 border border-[#194604] to-white'>
				<div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
					<div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
						<Image
							className='object-cover origin-center mx-auto'
							src={urlFor(singlePost.mainImage).url()}
							alt={singlePost.author.name}
							fill
						/>
					</div>
					<section className='p-5 bg-[#194604] w-full'>
						<div className='flex flex-col md:flex-row gap-y-5 justify-between'>
							<div>
								<h1 className='text-4xl font-extrabold'>{singlePost.title} </h1>
								<p>
									{new Date(singlePost._createdAt).toLocaleDateString('en-US', {
										day: 'numeric',
										month: 'long',
										year: 'numeric',
									})}{' '}
								</p>
							</div>
							`
							<div className='flex items-center space-x-2'>
								<Image
									className='rounded-full'
									src={urlFor(singlePost.author.image).url()}
									alt={singlePost.author.name}
									height={40}
									width={40}
								/>
								<div className='w-64'>
									<h3 className='text-lg font-bold'>
										{singlePost.author.name}{' '}
									</h3>
									{/* Author Bio - TODO  */}
								</div>
							</div>
							`
						</div>
						<div>
							<h2 className='italic pt-10'>{singlePost.description} </h2>
							<div className='flex items-center justify-end mt-auto space-x-2'>
								{singlePost.categories.map((category: Category) => (
									<p
										key={category._id}
										className='bg-slate-300 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold mt-4'>
										{category.title}
									</p>
								))}
							</div>
						</div>
					</section>
				</div>
			</section>

			<PortableText value={singlePost.body} components={RichTextComponents} />
		</article>
	);
}

export default Post;
