import { ArrowIcon } from "../icons";

export default function ResumeButton() {
  return (
    <a
      className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
      href="/cv.pdf"
      download="resume">
      <ArrowIcon />
      <span className="h-7">Resume</span>
    </a>
  );
}
