import ResumeButton from "components/buttons/resumeButton";
import TechStack from "components/techstack";
import experiences from "./experienceData";

export default function ExperiencePage() {
  return (
    <>
      <h1 className="font-bold text-3xl font-serif">Experience</h1>
      <div className="my-5 text-neutral-800 dark:text-neutral-200">
        {experiences.map((experience) => {
          return (
            <div className="m-5">
              <strong className="text-purple-400">
                <a href={experience.website} target="_blank">
                  {experience.company_name}
                </a>
              </strong>
              <hr />
              <div className="flex flex-row justify-between">
                <div className="text-left">{experience.job_desc}</div>
                <div className="text-right">{experience.time}</div>
              </div>
            </div>
          );
        })}
      </div>
      <TechStack />
    </>
  );
}
