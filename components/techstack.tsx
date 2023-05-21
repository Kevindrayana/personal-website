import {
  AngularIcon,
  ExpressIcon,
  JavaIcon,
  MongoDBIcon,
  MySQLIcon,
  NextIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  SQLiteIcon,
  TypeScriptIcon,
} from "./icons";

export default function TechStack() {
  return (
    <>
      <h3 className="font-bold text-2xl font-serif">Tech Stack:</h3>
      <div className="flex flex-col md:flex-row mt-5 md:space-x-12 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <div>
          <p className="font-bold text-1xl font-serif">Frontend</p>
          <ul>
            <li className="flex flex-row mt-2">
              <ReactIcon />
              React.js
            </li>
            <li className="flex flex-row mt-2">
              <AngularIcon />
              Angular
            </li>
            <li className="flex flex-row mt-2">
              <NextIcon />
              Next.js
            </li>
            <li className="flex flex-row mt-2">
              <TypeScriptIcon />
            TypeScript
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-1xl font-serif">Backend</p>
          <ul>
            <li className="flex flex-row mt-2">
              <NodeIcon />
              Node.js
            </li>
            <li className="flex flex-row mt-2">
              <ExpressIcon />
              Express.js
            </li>
            <li className="flex flex-row mt-2">
              <PythonIcon />
              Python
            </li>
            <li className="flex flex-row mt-2">
              <JavaIcon />
              Java
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-1xl font-serif">Database</p>
          <ul>
            <li className="flex flex-row mt-2">
              <MySQLIcon />
              MySQL
            </li>
            <li className="flex flex-row mt-2">
              <SQLiteIcon />
              SQLite
            </li>
            <li className="flex flex-row mt-2">
              <MongoDBIcon />
              MongoDB
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
