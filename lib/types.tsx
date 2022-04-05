export interface CardProps {
  job: Job;
}

export type Job = {
  jobId: number;
  company: string;
  companyDescription: string;
  techStack: string[];
  title: string;
  jobDescription: string[];
  href: string;
  imageSrc: string;
  imageAlt: string;
  jobImageSrc: string;
  jobImageAlt: string;
  dates: string;
  featuredImages: { imageSrc: string; imageAlt: string }[];
  links: { siteLink: string; githubLink: string; youtubeLink: string };
};
