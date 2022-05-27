export interface CardProps {
  job: Job;
}

export type Job = {
  jobId: string;
  company: string;
  companyDescription: string;
  techStack: string[];
  title: string;
  jobDescription: string[];
  multipleJobs: { title: string; descriptions: string[] }[];
  imageSrc: string;
  imageAlt: string;
  dates: string;
  featuredImages: { imageSrc: string; imageAlt: string }[];
  links: { siteLink: string; githubLink: string; youtubeLink: string };
  isTechnicalJob: boolean;
};

export type PageProps = {
  canonicalUrl?: string;
};
