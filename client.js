// Ref: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "3foixcjk", // you can find this in sanity.json in studio
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2021-10-21", // use a UTC date string
});
