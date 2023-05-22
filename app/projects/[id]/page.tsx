"use client";

import MazeSolver from "../../../content/projects/MazeSolver/MazeSolver.mdx";
import PhoneShop from "../../../content/projects/PhoneShop/PhoneShop.mdx";
import BigTwoGame from "../../../content/projects/BigTwoGame/BigTwoGame.mdx";
import INotes from "../../../content/projects/iNotes/iNotes.mdx";
import ProjectButton from "components/buttons/projectButton";

export default function Project({ params }) {
  return (
    <>
      <div className="font-bold text-3xl font-serif max-w-[650px]"></div>
      <article className="prose dark:prose-invert prose-lg prose-headings:text-green-500">
        {params.id == "Maze-Solver" && <MazeSolver />}
        {params.id == "Phone-Shop" && <PhoneShop/>}
        {params.id == "Big-Two-Game" && <BigTwoGame/>}
        {params.id == "iNotes" && <INotes/>}
      </article>
      <br />
      <ProjectButton/>
    </>
  );
}
