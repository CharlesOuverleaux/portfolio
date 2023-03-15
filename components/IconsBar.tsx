import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface IconsBarProps {
  links: {
    siteLink: string;
    githubLink: string;
    youtubeLink?: string;
  };
}

export const IconsBar: FC<IconsBarProps> = ({ links }) => {
  return (
    <div className="flex justify-center w-full py-4 sm:justify-start">
      <Link href={links.siteLink}>
        <a
          key="Chrome"
          target="_blank"
          rel="noreferrer"
          className="mx-5 text-gray-500 hover:text-black"
        >
          <span className="sr-only">Chrome</span>
          <FontAwesomeIcon icon={["fab", "chrome" as IconName]} size={"2x"} />
        </a>
      </Link>
      {links.githubLink && (
        <Link href={links.githubLink}>
          <a
            key="GitHub"
            target="_blank"
            rel="noreferrer"
            className="mx-5 text-gray-500 hover:text-black"
          >
            <span className="sr-only">GitHub</span>
            <FontAwesomeIcon icon={["fab", "github" as IconName]} size={"2x"} />
          </a>
        </Link>
      )}
      {links.youtubeLink && (
        <Link href={links.youtubeLink}>
          <a
            key="Youtube"
            target="_blank"
            rel="noreferrer"
            className="mx-5 text-gray-500 hover:text-black"
          >
            <span className="sr-only">Youtube</span>
            <FontAwesomeIcon
              icon={["fab", "youtube" as IconName]}
              size={"2x"}
            />
          </a>
        </Link>
      )}
    </div>
  );
};
