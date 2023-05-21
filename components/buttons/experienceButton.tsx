import Link from "next/link";
import { ArrowIcon } from "../icons";

export default function ExperienceButton() {
  return (
    <Link
      className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
      href="/experience">
      <ArrowIcon />
      <p className="h-7">Experiences</p>
    </Link>
  );
}
