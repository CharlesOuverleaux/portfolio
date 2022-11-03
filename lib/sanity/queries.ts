import { groq } from "next-sanity";


// TODO Add slug && (slug.current == $slug)
export const getJob = groq`*[(_type == 'job')][0];`;

// Ref: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#c69ec037032f
// Used for getStaticPaths
export const getJobsSlugs = groq`*[_type == 'job' && defined(slug.current)][].slug.current`;
