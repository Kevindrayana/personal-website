import projects from "./projectData";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <section>
        <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
        {projects.map((project) => {
          return (
            <>
              <Link href={`projects/${project.title}`}>
                <h1 className="font-bold text-2xl font-serif mt-3 text-green-300 hover:text-green-500">
                  {project.title}
                </h1>
              </Link>
              <p>{project.description}</p>
            </>
          );
        })}
      </section>
    </>
  );
}
