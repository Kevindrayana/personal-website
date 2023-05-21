import Link from "next/link";
import { ArrowIcon } from "../icons";

export default function ProjectButton() {
  return (
    <Link
      className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
      href="/projects">
      <ArrowIcon />
      <p className="h-7">Projects</p>
    </Link>
  );
}
