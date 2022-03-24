import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";

export const IconsBar: FC = () => {
  return (
    <div className="flex justify-center w-full py-4 sm:justify-start">
      <a
        key="Chrome"
        href="/"
        target="_blank"
        rel="noreferrer"
        className="mx-5 text-gray-500 hover:text-black"
      >
        <span className="sr-only">Chrome</span>
        <FontAwesomeIcon icon={["fab", "chrome" as IconName]} size={"2x"} />
      </a>
      <a
        key="GitHub"
        href="/"
        target="_blank"
        rel="noreferrer"
        className="mx-5 text-gray-500 hover:text-black"
      >
        <span className="sr-only">GitHub</span>
        <FontAwesomeIcon icon={["fab", "github" as IconName]} size={"2x"} />
      </a>
      <a
        key="Youtube"
        href="/"
        target="_blank"
        rel="noreferrer"
        className="mx-5 text-gray-500 hover:text-black"
      >
        <span className="sr-only">Youtube</span>
        <FontAwesomeIcon icon={["fab", "youtube" as IconName]} size={"2x"} />
      </a>
    </div>
  );
};
