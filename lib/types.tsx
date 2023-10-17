import type {
  PortableTextBlock,
  PortableTextSpan,
  PortableTextLink,
} from "@portabletext/types";

export interface CardProps {
  job: Job;
}

export type Job = {
  jobId: string;
  company: string;
  companyDescription: string;
  techStack: string[];
  title: string;
  // Ref: https://github.com/portabletext/types
  jobDescription: PortableTextBlock | PortableTextSpan | PortableTextLink;
  multipleJobs: { title: string; descriptions: string[] }[];
  imageSrc: string;
  imageAlt: string;
  dates: string;
  featuredImages: { imageSrc: string; imageAlt: string }[];
  links: { siteLink: string; githubLink: string; youtubeLink: string };
  isTechnicalJob: boolean;
  gridOrder: number;
};

export type PageProps = {
  canonicalUrl?: string;
};
