import Link from "next/link";
import Image from "next/image";
import { getBlogViews, getTweetCount, getStarCount } from "lib/metrics";
import {
  ArrowIcon,
  GitHubIcon,
  GmailIcon,
  LinkedinIcon,
} from "components/icons";
import { name, about, bio, avatar } from "lib/info";
import TechStack from "components/techstack";
import ExperienceButton from "components/buttons/experienceButton";
import ProjectButton from "components/buttons/projectButton";
import ResumeButton from "components/buttons/resumeButton";

export const revalidate = 60;

export default async function HomePage() {
  let starCount, views, tweetCount;

  try {
    [starCount, views, tweetCount] = await Promise.all([
      getStarCount(),
      getBlogViews(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <section>
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <Image
            alt={name}
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={100}
            priority
          />
          <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/kevindrayana/"
              className="flex items-center gap-2">
              <LinkedinIcon />
              linkedin.com/in/kevindrayana
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Kevindrayana"
              className="flex items-center gap-2">
              <GitHubIcon />
              github.com/Kevindrayana
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:indrayana.kevin@gmail.com"
              className="flex items-center gap-2">
              <GmailIcon />
              indrayana.kevin@gmail.com
            </a>
          </div>
        </div>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          {bio()}
        </p>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
          <ExperienceButton />
          <ProjectButton />
          <ResumeButton />
        </ul>
      </section>
    </>
  );
}
