import { groq } from "next-sanity";

const sharedJobMetaData = `
  "imageSrc": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "featuredImages": featuredImages.images[]{
    "imageSrc": asset->url,
    "imageAlt": alt
    },
  `;


export const getAllJobs = groq`*[_type == 'job'] | order(_createdAt asc) {
  ...,
  ${sharedJobMetaData}
}`;
export const getJob = groq`*[(_type == 'job') && (slug.current == $jobId)][0]{
  ...,
  ${sharedJobMetaData}
}`;

// Ref: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#c69ec037032f
// Used for getStaticPaths
export const getJobsSlugs = groq`*[_type == 'job' && defined(slug.current)][].slug.current`;
