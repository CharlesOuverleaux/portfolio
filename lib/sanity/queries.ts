import { groq } from "next-sanity";


// TODO Add slug && (slug.current == $slug)
export const getJob = groq`*[(_type == 'job')][0];`;
