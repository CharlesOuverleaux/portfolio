export interface CardProps {
  job: Job;
}

export type Job = {
  jobId: number;
  company: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};
