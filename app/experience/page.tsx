import TechStack from "components/techstack";
import experiences from "./experienceData";

export default function ExperiencePage() {
  return (
    <>
      <h1 className="font-bold text-3xl font-serif">Experience</h1>
      <div className="my-5 text-neutral-800 dark:text-neutral-200">
        {experiences.map((experience) => {
          return (
            <div className="my-7">
              <a href={experience.website} target="_blank">
                <h1 className="font-bold text-2xl font-serif mt-3 text-purple-400 hover:text-purple-500">
                  {experience.company_name}
                </h1>
              </a>
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
