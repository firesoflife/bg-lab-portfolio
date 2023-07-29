# NextJS + Sanity Studio + TailwindCSS Starter

This is a starter template for [Next.js](https://nextjs.org/), [Sanity Studio](https://www.sanity.io/docs/sanity-studio) and [TailwindCSS](https://tailwindcss.com/). It was created by Sonny Sangha for his Youtube Channel followers and the guided code-along can be found [here](https://www.youtube.com/watch?v=x3fCEPFgUSM&t=2595s).

Oh right. I almost forgot the star of the show - this `npm create sanity@latest -- --template get-started --project lqql357j --dataset production --provider github` command will create a new Sanity project for you. You'll need to have the [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) installed first.

**Don't run it yet** There is a trick - so follow the steps below.

## Getting Started

1.  Create a new NextJS project using this template by running `npx create-next-app@latest` and follow the prompts. At the time of writing, I chose the all the defaults with the exception of the project name.

    ```
    What is your project named? _Your Project Name_
    Would you like to use TypeScript? No / _Yes_
    Would you like to use ESLint? _No_ / Yes
    Would you like to use Tailwind CSS? No / _Yes_
    Would you like to use `src/` directory? _No_ / Yes
    Would you like to use App Router? (recommended) No / _Yes_
    Would you like to customize the default import alias? _No_ / Yes
    ```

2.  Cd into the new project once its created
3.  From inside the Next project we work the magic of Sonny's script which will install the Sanity.io studio into our Next app, hook the apps up and configure our enivoronment variables.

    - Note that it may be useful to already have created a Sanity account and logged in before running this script. You can do that [here](https://www.sanity.io/login).

4.  There are a set of additional questions -- some may seem redundant after the questions from next -- but remember you are setting up your Sanity studio - keep it consisten with what you chose for the Next app base.

Ok, You're in. Now `cd` into the project and load'er up.

```
cd _Your Project Name_
```

5. Test it out. `npm run dev' should fire up the Next boilerplate splash when you navigate to `http://localhost:3000/`and the Sanity Studio should be available at`http://localhost:3000/studio`.

## Sanity Studio

Most of the initial setup wherein the Sanity Studio is configured to work with NextJS is done for you via the handy installer we ran to get up and running. However, there are a few things you'll want to do to customize your studio.

1. In the `sanity.config.ts` file under the `projectID` add a name and title that the studio will use. This is not required, but is nice:

```
// ... code above

export default defineConfig({
  basePath: '/studio',
  projectId,
  name: 'BG-Lab_Content_Studio',
  title: 'BG-Lab Content Studio',
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})

```

2. Create a `loading.tsx` file in `studio/[[...index]]` and add the following code:

```
'use client'

import {NextStudio} from 'next-sanity/studio'

import config from '../../../sanity.config'

export default function StudioPage() {
// Supports the same props as `import {Studio} from 'sanity'`, `config` is required
return <NextStudio config={config} />
}
```

3. While Next 13 has reconfigured the Head component for easier implementation, adding a `head.tsx` file is still supported when using the `next-sanity` package. In the `app` folder, add a `head.tsx` file and add the following code:

```
export default function Head() {
	return (
		<>
			<title>BG-Lab Blog</title>
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel='icon' href='/favicon.ico' />
		</>
	);
}
```

4. Now bring in teh Head component into the `layout.tsx` file just above the `<body>` tag:

```
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from './head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BG-Copies-Sonny',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Head />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
```

## Populate Content in your Sanity Studio

You heard me. This is the boring part. Well, maybe not boring, and maybe you'll have fun doing but there is a risk that you get carried away from this build for too long while adding in your content that it becomes hard to pick up where you left off. The choise is yours, you can populate with proper content now, or you can add in some dummy content and come back to it later. Just head to hipster ipsum or, even easier, if you have emmet installed in your editor, just type `lorem` with a number for character length you want and hit tab. Copy that and pop it into your content.

## Optional Customization of the Sanity Studio

### Create a Theme File

1. At the top leve of your file structure, create a `theme.ts` file and add the following code, most of which sets out our personalized color shceme:

```

import { buildLegacyTheme } from '@sanity'

const props = {
"--my-white": '#f3f3f3',
"--my-black": '#1a1a1a',
"--my-brand": '#D28540',
"--my-red": '#854B50',
"--my-green": '#818E7B',
"--my-yellow": '#E4CA60',
}

export const myTheme = buildLegacyTheme({
"--gray-base": "#666",

      "--component-bg": props["--my-black"],
      "--component-text-color": props["--my-white"],

      /* BRAND COLORS */
      "--brand-primary": props["--my-brand"],

      /* DEFAULT BUTTON */
      "--default-button-color": "#666",
      "--default-button-primary-color": props["--my-brand"],
      "--default-button-success-color": props["--my-green"],
      "--default-button-danger-color": props["--my-red"],
      "--default-button-warning-color": props["--my-yellow"],

      /* STATE */

      "--state-success-color": props["--my-green"],
      "--state-danger-color": props["--my-red"],
      "--state-warning-color": props["--my-yellow"],
      "--state-info-color": props["--my-brand"],

      /* NAVBAR */
      "--main-navigation-color": props["--my-black"],
      "--main-navigation-color--inverted": props["--my-white"],

      "--focus-color": props["--my-brand"],

})

```

2. Now that we've got a theme file built out, we need to head into the `sanity.config.ts` and bring it in so we can use it:

```

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { myTheme } from './theme' // IMPORT THIS HERE

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'

export default defineConfig({
basePath: '/studio',
projectId,
name: 'BG-Lab_Content_Studio',
title: 'BG-Lab Content Studio',
dataset,
// Add and edit the content schema in the './sanity/schema' folder
schema,
plugins: [
deskTool(),
// Vision is a tool that lets you query your content with GROQ in the studio
// https://www.sanity.io/docs/the-vision-plugin
visionTool({defaultApiVersion: apiVersion}),
],
theme: myTheme, // ADD THIS HERE
})

```

In the above, we imported our new theme file and then added it to the `theme` property of the `defineConfig` object just below plugins array.

### Create some new Components for our Studio

1. In the `sanity.config.ts` we will add new studio components just above where we added the theme:

```

// ... other imports
import StudioNavbar from './app/components/StudioNavbar'
import Logo from './app/components/Logo'

// ... other code

sudio: {
components: {
logo: Logo,
navbar: StudioNavbar,
}
},
theme: myTheme,

```

Now we need to go and create those components.

2. Create a components folder if you don't already have one - `app/components` and add a `Logo.tsx` and `StudioNavbar.tsx` file.

3. We will be using some nice icons from hero icons that work with TailwindCSS so let's install that package now: `npm install @heroicons/react`

4. In the `SudioNavbar.tsx` file add the following code:

```

import Link from 'next/link'

function StudioNavbar() {
return (
<div>SutdioNavbar</div>
)
}

export default StudioNavbar

```

5. Create some placeholder code for the logo:

```

function Logo() {
return <div>Logo</div>;
}

export default Logo;

```

Now when we navigate to our studio, it's broke. We can see our custome nav but the default, and required Desktop and Vision tool views are gone. Let's get them back.

6. Add props inside the StudioNavbar function:

```

function StudioNavbar(props: any) {
return <div>{props.renderDefault(props)} </div>;
}

```

You should now see the old elements back and we can start to customize the navbar while including the default view.

7. Build out some StudioNavbar customizations:

```

import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
return (
<>
<div className='flex items-center justify-between p-5'>
<Link href='/' className='text-[#ffa024] flex items-center'>
<ArrowUturnLeftIcon className='h-6 w-5 mr-2' />
Go To Website
</Link>

    			<div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#ffa] '>
    				<h1 className='font-bold text-white'>
    					Confused? See Guide to Editing Content Here 🔍{' '}
    				</h1>
    				<Link href='#' className='text-[#ffa024] font-bold ml-2'>
    					Guide to Editing Web Content
    				</Link>
    			</div>
    		</div>
    		<div>{props.renderDefault(props)} </div>;
    	</>
    );

}

export default StudioNavbar;

```

Here we've built out a simple navbar with a link to the website, and a link to a guide for editing content. We've also added a bit of styling to the navbar and the guide link.

8. Add a Logo if you want. This first thing to do is to grab your logo and add it to the `public` folder. I've added a `bg-lab-logo.png` file to the `public` folder and then added the following code to the `Logo.tsx` file:

```

import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
return (
<>
<div className='flex items-center justify-between p-5'>
<Link href='/' className='text-[#ffa024] flex items-center'>
<ArrowUturnLeftIcon className='h-6 w-5 mr-2' />
Go To Website
</Link>

    			<div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#ffa] '>
    				<h1 className='font-bold text-white'>
    					Confused? See Guide to Editing Content Here 🔍{' '}
    				</h1>
    				<Link href='#' className='text-[#ffa024] font-bold ml-2'>
    					Guide to Editing Web Content
    				</Link>
    			</div>
    		</div>
    		<div>{props.renderDefault(props)} </div>
    	</>
    );

}

export default StudioNavbar;

```

## Add the Preview Functionality to Sanity Studio

<!-- To Do -->

## Start to build out the Front page

### Folder Structure Organization

1. Inside the `app` folder we are going to create 2 new folders enclosed in parenthesis. Parenthesis are used to leave the folder name out of the route so we can create a `(user)/about.tsx` and the path would simply be `/about`.

2. Create a `(users)` and an `(admin)` folder in the App directory

3. Inside the `(users)` folder, we will drag the existing `page.tsx` file. Ensure your paths for imports into and from the file are either autoupdated or you manually update them.

4. Now grab the entire `studio` folder and put that into the `(admin)` folder. Again, ensure your paths for imports into and from the file are either autoupdated or you manually update them.

5. As an example as to how the parnthesis do not affect the route, we can still navigate to localhost:3000/studio and still load up our studio. The `(admin)` folder is not icluded.

6. Create a new `layout.tsx` filed in the `(admin)` folder. Remove the `<Head />` component as that one refers to the Next app and not the Studio.

### Create the Header Component

1. Navigate into the `components` folder and create a new `Header.tsx` file.

2. Add the following code to the `Header.tsx` file:

```

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/bg-lab-logo.png';

function Header() {
return (

<header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
<div className='flex items-center space-x-2'>
<Link href='/'>
<Image
						className='rounded-full'
						src={logo}
						width={50}
						height={50}
						alt='bg-lab logo'
					/>
</Link>
<h1>The BG-Lab</h1>
</div>
</header>
);
}

export default Header;

```

3. Bring the Header into the primary layout that controls every part of the app that does not have a specific layout. In the `layout.tsx` file add the following code:

```

import Header from './components/Header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
title: 'BG-LAB',
description: 'Generated by create next app',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (

<html lang='en'>
<body>
<Header />
{children}
</body>
</html>
);
}

```

Ensure the header is being rendered inside the `<body>` tag or you may see Next complain about server mismatch.

## Create the Banner Component

1. In the `components` folder create a `Banner.tsx` file

2. Add the following code to the `Banner.tsx` file:

```

function Banner() {
return <div>Banner</div>;
}

export default Banner;

```

3. We just created a wee function to render. Now bring it into the `layout.tsx` just below the `<Header />` component:

```

import Banner from './components/Banner';
import Header from './components/Header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
title: 'BG-LAB',
description: 'Generated by create next app',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (

<html lang='en'>
<head />
<body className='bg-slate-800 text-gray-300'>
<Header />
<Banner />
{children}
</body>
</html>
);
}

```

4. Add some things to the Banner component:

```
function Banner() {
return (

<div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
<div>
<h1 className='text-7xl'>The BG-Lab Project Site</h1>
<h2 className='mt-5 md:mt-0'>
Welcom to the top{' '}
<span className='underline decoration-2 leading-relaxed decoration-white text-[#ffa024] '>
Technology, Home Lab and Web Development
</span>{' '}
site on the web
</h2>
</div>
<p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
Web Development | | Tech Projects | | Home Lab Projects | | Tutorials
</p>
</div>
);
}

export default Banner;

```

## Type Definitions

Before we get in the weeds on fetching data and gettign errors, lets deal with our Type definitions to avoid silly mistakes. In the root of the project create a `typings.d.ts` file and add the following definitions. There is a Base definition that Sanity uses and the rest correspond to the different schemas we have set up:

````
type Base = {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
 };

 interface Post extends Base {
    author: Author;
    body: Block[];
    categories: category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
 }

 interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug
 }

 interface Image extends Base {
    _type: "image";
    asset: Reference
    }

  interface Reference extends Base {
    _ref: string;
    _type: "reference";
    }

    interface Slug extends Base {
        _type: "slug";
        current: string;
    }

    interface Block {
        _key: string;
        _type: "block";
        children: Span[];
        markDefs: any[];
        style: "nomal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    }

    interface Span {
        _key: string;
        _type: "span";
        marks: any[];
        text: string;
    }

    interface Category extends Base {
        description: string;
        title: string;
    }

    interface mainImage {
        _type: "image"
        asset: "reference"
    }

    interface Title {
        _type: "string";
        current: string;
    }
	```

* NOTE - ensure you don't have anything auto-imported at the top of your file. If you do, delete it. It will cause errors reading types automatically in other Compoenents

## Fetch Data from Sanity for Blog List

1. In the `app/Components` folder create a `BlogList.tsx` file

2. Add the following code to the `BlogList.tsx` file:

````

type Props = {
posts: Post[];
};

function BlogList(posts: Props) {
return <div>BlogList</div>;
}

export default BlogList;

```

3. With the bones of the BlogList in Place. Lets test that we can grab data and render it to our front end. In the `sanity` folder we will create a new folder to hold our calls to the Sanity API. Create a `api` folder and inside that create a `getPosts.tsx` file.

4. We will now write our first, simple Groq query. Add the following code to the `getPosts.tsx` file:

```

import { groq } from 'next-sanity';
import { client } from '../lib/client';

async function getPosts() {
return client.fetch(
groq`

            *[_type == "post"][0]{

title
}
`
);
}

export default getPosts;

```

* Note that we just fetched a single post, selecting the first in the array by adding the `[0]` - we will remove this later.

5. Now let's test this in our home `page.tsx`:

```

import getPosts from '@/sanity/api/getPosts';

export default async function Home() {
const post = await getPosts();

    console.log(post);

    return (
    	<>
    		<h1>Here is DATA: {post.title} </h1>
    	</>
    );

}

```

6. Great, now that we've got stuff rendered to the page, let's get it into our BlogList component. In the `page.tsx` file, add the following code:

```

type Props = {
posts: Post[];
};

function BlogList({ posts }: Props) {
return <div>BlogList</div>;
}

export default BlogList;

```

7. Now we can bring in the BlogList component into the `page.tsx` file and pass in the `posts` data:

```

import getPosts from '@/sanity/api/getPosts';
import BlogList from '../components/BlogList';

export default async function Home() {
const post = await getPosts();

    console.log(post);

    return (
    	<>
    		{/* <h1>Here is DATA: {post.title} </h1> */}
    		<BlogList posts={post} />
    	</>
    );

}

```

8. We are also going to change what we fetch in the `getPosts.tsx` file:

```

import { groq } from 'next-sanity';
import { client } from '../lib/client';

async function getPosts() {
return client.fetch(
groq`  
        *[_type == "post"] {
            ...,
            author->,
            categories[]->,
        } | order(_createdAt desc)`
);
}

export default getPosts;

```

* Note that we've removed the `[0]` from the query and added in the `author` and `categories` fields. We've also added in a `| order(_createdAt desc)` to order the posts by the most recent. This call will fetch the full array of posts.


Now if we `console.log(posts)` we see nothing on the front end but we do see the data in the console. This is because we are not rendering anything to the front end and we're in a server side componenent. Let Build out the `BlogList.tsx` now:

## The Blog List Component

1. Now in the `BlogList.tsx` file we will add the following code:


```

import Image from 'next/image';

type Props = {
posts: Post[];
};

function BlogList({ posts }: Props) {
return (

<div>
<hr className='border-[#ffa024] mb-10' />

    		<div>
    			{/* Posts */}
    			{posts.map((post) => (
    				<div key={post._id}>
    					<div>
    						<Image
    							className='object-cover object-left lg:object-center'
    							src={urlFor(post.mainImage).url()}
    							alt='image'
    							fill
    						/>
    					</div>
    				</div>
    			))}
    		</div>
    	</div>
    );

}

export default BlogList;

```

2. We aren't done yet, but we need to consider carefully the way we handle the `<Image />` tage and the use of the `urlFor` helper function. With the code above, we will be getting an error. Head into the `sanity/lib` folder can create a new `urlFor.ts` file and add the following:

```

import { client } from "./client";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
return builder.image(source)
}

export default urlFor

```

3. Now we can import our helper function into the `BlogList.tsx` file at the top and clear the previous error that was looing for it.


4. Errors! We need to whitelist the Sanity CDM from our iamge directory. Head to `next.config.js` and change it as follows:

```

/\*_ @type {import('next').NextConfig} _/
const nextConfig = {}

module.exports = {
images: {
domains: ["cdn.sanity.io"]
}
}

```
We've not whitelisted `cdn.sanity.io`

5. Disgusting! Our images are huge and nothing looks right. Time to style it up. Make the dive surrounding our `<Image />` tag a `relative` div and add the following code. In fact, now is a good time to take a look at some of Tailwinds functionality and add some classes to the `BlogList.tsx` file. Add the structure and stylings below and then I'll explain what's going on:

```

import Image from 'next/image';
import urlFor from '../../sanity/lib/urlFor';

type Props = {
posts: Post[];
};

function BlogList({ posts }: Props) {
return (

<div>
<hr className='border-[#ffa024] mb-10' />

    		<div>
    			{/* Posts */}
    			{posts.map((post) => (
    				<div key={post._id} className='flex flex-col group cursor-pointer'>
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
    				</div>
    			))}
    		</div>
    	</div>
    );

}

export default BlogList;

```

* We've added a `group` class to the parent div of the `<Image />` tag. This allows us to add a `group-hover` class to the child div of the `<Image />` tag. This is a TailwindCSS feature that allows us to add a class to a child element when the parent is hovered.

* We've also added a `transition-transform` class to the parent div which will allow us to animate the scale of the image when hovered.

* We've also added a `drop-shadow-xl` class to the parent div which will add a shadow to the image. We've also added a `duration-200` class to the parent div which will set the duration of the transition to 200ms.

* We've also added an `ease-out` class to the parent div which will set the transition to ease out. We've also added a `scale-105` class to the child div which will set the scale of the image to 105% when hovered.

* We've also added a `transition-transform` class to the child div which will allow us to animate the scale of the image when hovered.

* We've also added a `duration-200` class to the child div which will set the duration of the transition to 200ms.

* We've also added an `ease-out` class to the child div which will set the transition to ease out.

* We've also added a `drop-shadow-lg` class to the child div which will add a shadow to the image.

<!-- TODO -->
[ TODO -- GPT to explain what and why we are doing this ]

```

### Install TailwindCSS LineClamp Plugin

1. Install the TailwindCSS LineClamp plugin: `npm install @tailwindcss/line-clamp`

2. Open up the `tailwind.config.js` file and add the following code:

```
// other code above

 plugins: [
    require ('@tailwindcss/line-clamp'),],
// other code below
```

### Correct the missing "Description" field in the Sanity Schema.

Navigate into the `sanity/schema` folder and open up the `post.ts` file. Add the following code somewhere that it makes the most sense to you. I'll add it just above the `categories` field:

```
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
```

Now add in a description to each of the posts in the studio so we can see it on the front end.

### Continue to build out the BlogList Component

1. For the sake of brevity, I'll add the code for the BlogList component here in totality. Note that divs already listed above may also have some added styling, so be sure to look through the whole component.

```
import Image from 'next/image';
import urlFor from '../../sanity/lib/urlFor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

type Props = {
	posts: Post[];
};

function BlogList({ posts }: Props) {
	return (
		<div>
			<hr className='border-[ffa024#] mb-10' />

			<div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
				{/* Posts */}
				{posts.map((post) => (
					<div key={post._id} className='flex flex-col group cursor-pointer'>
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

								<div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
									{post.categories.map((category) => (
										<div className='bg-[#ffa024] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
											<p>{category.title}</p>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className='mt-5 flex-1'>
							<p className='underline text-lg font-bold'>{post.title} </p>
							<p className='line-clamp-2 text-gray-500 '>{post.description}</p>
						</div>

						<p className='mt-5 font-bold flex items-center group-hover:underline'>
							Read Post
							<ArrowUpRightIcon className='ml-2 h-4 w-4' />
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default BlogList;
```

Now, things are looking nice. However, you may notice that things are a bit wider -- the images might be a bit .... lenghtly ... widthy? Let's fix that.

2. Hop into the layout file for the main page - `app/(users)/layout.tsx` and add the following code to the `<main>` tag:

```
import Banner from '../components/Banner';
import Header from '../components/Header';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<main className='max-w-7xl mx-auto'>
				<Header />
				<Banner />
				{children}
			</main>
		</>
	);
}
```

## Dynamic Client Side Routing

1. In the components file, create a new file `ClientSideRoute.tsx` and add the following code. Note that we are passing as props, the same things we have on the main RooutLayout component. We will pass that as props on this component as well.

```
'use client'

import Link from 'next/link';

function ClientSideRoute({
	children,
	route,
}: {
	children: React.ReactNode;
	route: string;
}) {
	return <Link href={route}>{children}</Link>;
}

export default ClientSideRoute;
```

So, what is going one here?

- we are making a client side route by using the `use client` note at the top of the file
- we are passing in `children` as props
- we are also passing in route and giving it a type of string
- We then return a Link component from Next and pass in the route as a prop to the Link component.
- The Link component wraps the children to make them clickable and route to the route we pass in as a prop.

2. Now back in the `BlogList.tsx`, navigate to the div just below the `.map` fuction. Wrap that div in the `ClientSideRoute` component

The code should look like this so far, but I've trancated the middle code between the ClientSideRoute component for brevity:

```
import Image from 'next/image';
import urlFor from '../../sanity/lib/urlFor';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ClientSideRoute from './ClientSideRoute';

type Props = {
	posts: Post[];
};

function BlogList({ posts }: Props) {
	return (
		<div>
			<hr className='border-[ffa024#] mb-10' />

			<div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
				{/* Posts */}
				{posts.map((post) => (
					<ClientSideRoute>

					// ... all the code inside the map function

					</ClientSideRoute>
			))}
			</div>
		</div>
	);
}

export default BlogList;
```

3. We need to pass our dynamic route to the ClientSideRoute component. We can do this by adding the following code to the ClientSideRoute component tag:

```
<ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
```

Note that we also took the key out of the div and added it to the ClientSideRoute component because the new component has the higher key value.

## Create Wildcard Dynamic Routes

1. Inside the (user) folder we are going to create a new folder called `post` and inside that folder we will create another new folder called `[slug]`.

2. Inside the `[slug]` folder, we will create a `page.tsx` inside the `[slug]` folder for our dynamic route and add the following code:

```
type Props = {
	params: {
		slug: string;
	};
};

async function Post({ params }: Props) {
	return <div>Post</div>;
}

export default Post;
```

3. Now we are going to need to fetch the data for our Single Posts to render when we click on the BlogList post that we iterated over on the home page. In the `sanity/api` folder, create a new file called `getSinglePost.tsx` and add the following code:

```
import { groq } from 'next-sanity';
import { client } from '../lib/client';

async function getSinglePost(slug: string) {
	return client.fetch(
		groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]
    }
    `,
		{ slug }
	);
}

export default getSinglePost;
```

We've queried for our post with the current slug, and then pass in the slug as a variable to the query.

4. We now need to import the `getSinglePost` function into our `[slug]/page.tsx` file and fetch the data. We do this by storing the function in a vairable `singlePost` and then awaiting the `getSinglePost()` function.

```
import getSinglePost from '@/sanity/api/getSinglePost';

type Props = {
	params: {
		slug: string;
	};
};

async function Post({ params: { slug } }: Props) {
	const singlePost = await getSinglePost(slug);

	return <div>Post: {singlePost.slug.current} </div>;
}

export default Post;

```

This should render out the slug of the post we clicked on to show us that we are correctly fetching the data.

Now we are ready to start building out the dynamic post page.

## Build out the Dynamic Post Page

This part is copy and paste, or you can build it out yourself. I'll add the code here and then you can do what you want with it.

```
import Image from 'next/image';
import getSinglePost from '@/sanity/api/getSinglePost';
import urlFor from '@/sanity/lib/urlFor';

type Props = {
	params: {
		slug: string;
	};
};

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
		</article>
	);
}

export default Post;
```

There are some cool TailwindCSS features in here that you can check out. I'll add some comments to the code to explain what's going on

<!-- TODO  -->
<!-- Add Tailwind explainers -->

## Portable Text

In the sanity project in the console, run `npm install react-portable-text`

1. Once installed, we are going to add a `PortableText` component that gets passed a components prop `RichTextComponents` that will allow us to render the different types of text that we have in our schema. We will also add a `RichTextComponents.tsx` file in the `components` folder to handle the different types of text.

```
// all the code within the 'section' tag and above
</section>

			<PortableText value={singlePost.body} components={RichTextComponents} />

// all the code below the 'section' tag
```

2. Now we will create the `RichTextComponents.tsx` file in the `components` folder and add the following code:

```
import Image from 'next/image';
import Link from 'next/link';
import urlFor from '@/sanity/lib/urlFor';

export const RichTextComponents = {
	types: {
		image: ({ value }: any) => {
			return (
				<div className='relative w-full h-96 m-10 mx-auto'>
					<Image
						className='object-contain'
						src={urlFor(value).url()}
						alt='Blog Post Image'
						fill
					/>
				</div>
			);
		},
	},
	list: {
		bullet: ({ children }: any) => (
			<ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
		),
		number: ({ children }: any) => (
			<ol className='mt-lg list-decimal'>{children}</ol>
		),
	},
	block: {
		h1: ({ children }: any) => (
			<h1 className='text-5xl py-10 font-bold'>{children}</h1>
		),
		h2: ({ children }: any) => (
			<h2 className='text-4xl py-10 font-bold'> {children}</h2>
		),
		h3: ({ children }: any) => (
			<h2 className='text-3xl py-10 font-bold'> {children}</h2>
		),
		h4: ({ children }: any) => (
			<h2 className='text-2xl py-10 font-bold'> {children}</h2>
		),

		blockquote: ({ children }: any) => (
			<blockquote className='border-l-[#194604] border-l-4 pl-5 py-5 my-5 '>
				{children}
			</blockquote>
		),
	},
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startWith('/')
				? 'noreferrer noopener'
				: undefined;

			return (
				<Link
					href={value.href}
					rel={rel}
					className='underline decoration-[#194604] hover:decoration-black'>
					{children}
				</Link>
			);
		},
	},
};
```

3. Ensure that you have some styles added to your 'body' field for your blog posts in the Sanity Studio so you can see the different types of text rendered. I've added a few header types, a list and blockquote to see how it looks. Spoiler - it looks great.

## Make things Speedy using NextJS 13

1. Navigate to `app/(users)/post/[slug]/page.tsx` and add the following code to the top of the file:

```

```
