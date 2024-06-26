/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { myTheme } from './theme';
import Logo from './app/components/Logo';
import StudioNavbar from './app/components/StudioNavbar';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { structureTool } from 'sanity/structure';
import { portfolioStructure } from './sanity/lib/portfolioStructure';

export default defineConfig({
	basePath: '/studio',
	projectId,
	name: 'BG-Lab_Content_Studio',
	title: 'BG-Lab Content Studio',
	dataset,
	// Add and edit the content schema in the './sanity/schema' folder
	schema,
	plugins: [
		structureTool({
			structure: portfolioStructure,
		}),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		// visionTool({ defaultApiVersion: apiVersion }),
		visionTool(),
	],
	studio: {
		components: {
			logo: Logo,
			navbar: StudioNavbar,
		},
	},
	theme: myTheme,
});
