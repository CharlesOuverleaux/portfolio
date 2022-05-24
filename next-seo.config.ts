// Ref: https://nextjs.org/learn/seo/rendering-and-ranking/metadata
// Ref: https://www.npmjs.com/package/next-seo#user-content-default-seo-configuration
// SEO default config using next-seo, can be overriden on a page by page basis.
// TODO: Add final image, twitter account
import { DefaultSeoProps } from "next-seo/lib/types";

const siteName = "charlesouverleaux.co";
const title = "Charles Ouverleaux | Frontend Engineer";
const description =
  "From business to tech. Frontend developer with business and marketing background. JavaScript, TypeScript, React, Nextjs, Tailwindcss... ";
const keywords = [
  "Frontend engineer",
  "Web developement",
  "Freelance",
  "NFT",
  "Web3",
];

const seoConfig: DefaultSeoProps = {
  title: title,
  titleTemplate: `${siteName} | %s`,
  description: description,
  openGraph: {
    title: `${siteName} | ${title}`,
    description: description,
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/ProfilePicture_Charles.jpg",
        width: 600,
        height: 600,
        alt: "Charles Ouverleaux Frontend Engineer",
        type: "image/jpg",
      },
    ],
    site_name: siteName,
  },
  twitter: {
    handle: "@CO_IN_TECH",
    site: "@charlesouverleaux.co",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [{ name: "keywords", content: keywords.join(",") }],
};
export default seoConfig;
