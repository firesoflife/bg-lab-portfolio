import Image from 'next/image';
import urlFor from '../../sanity/lib/urlFor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ClientSideRoute from './ClientSideRoute';

type Props = {
	posts: Post[];
	projectType: string;
};

function BlogList({ posts, projectType }: Props) {
	const filteredPosts = posts.filter(
		(post) => post.projectType === projectType
	);

	return (
		<div>
			<hr className='border-[ffa024#] mb-10' />

			<div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
				{/* Posts */}
				{filteredPosts.map((post) => (
					<ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
						<div className='flex flex-col group cursor-pointer'>
							<div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
								<Image
									className='object-cover object-left lg:object-center'
									src={urlFor(post.mainImage).url()}
									alt='image'
									fill
								/>
								<div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
									<div>
										<p className='font-bold'>{post.title}</p>
										<p>
											{new Date(post._createdAt).toLocaleDateString('en-US', {
												day: 'numeric',
												month: 'long',
												year: 'numeric',
											})}
										</p>
									</div>
								</div>
							</div>

							<div className='mt-5 flex-1'>
								<p className='underline text-lg font-bold'>{post.title} </p>
								<p className='line-clamp-2 text-gray-500 '>
									{post.description}
								</p>
							</div>

							<p className='mt-5 font-bold flex items-center group-hover:underline'>
								Read Post
								<ArrowUpRightIcon className='ml-2 h-4 w-4' />
							</p>
						</div>
					</ClientSideRoute>
				))}
			</div>
		</div>
	);
}

export default BlogList;
