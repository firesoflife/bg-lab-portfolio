// 'use client'


// // import definePreview from 'next-sanity/preview'
// import { definePreview} from 'next-sanity/preview'
// import { projectId, dataset } from '../env'

// function onPublicAccessOnly() {
//         throw new Error(`Unable to load preview as you are not loggein`)
// }

// if (!projectId || !dataset) {
//         throw new Error(
//                 `Missing projectId or dataset values. Check your environment config`
//         )
// }

// export const usePreview = definePreview({
//     projectId,
//     dataset,
//     onPublicAccessOnly,
// });