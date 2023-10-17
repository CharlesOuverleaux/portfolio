import { FaJedi } from "react-icons/fa";

export default {
  name: "job",
  title: "Jobs",
  type: "document",
  icon: FaJedi,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "jobId",
      title: "jobId",
      type: "string",
    },
    {
      name: "gridOrder",
      title: "gridOrder",
      type: "number",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "companyDescription",
      title: "Company description",
      type: "text",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "jobDescription",
      title: "Job Description",
      type: "blockContent",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      name: "dates",
      title: "Dates",
      type: "string",
    },
    {
      name: "featuredImages",
      title: "Slider Images",
      type: "gallery",
    },
    {
      name: "links",
      title: "Redirect Links",
      type: "redirectLinks",
    },
    {
      name: "isTechnicalJob",
      title: "is it a Technical Job ?",
      type: "boolean",
    },
  ],

  preview: {
    select: {
      title: "title",
      company: "company",
      dates: "dates",
    },
    prepare(selection) {
      const { title, company, dates } = selection;
      return Object.assign({}, selection, {
        title: title,
        subtitle: `${company} - ${dates}`,
      });
    },
  },
};
