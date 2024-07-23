import Card from "./card";
import { minorProjectsList } from "./utils";

const ReactMinorProjects = () => {
  return (
    <div className="w-full h-full flex justify-center bg-gray-900 p-10 overflow-auto">
        <div className="w-[80%] h-full text-white flex flex-grow flex-wrap gap-8 items-center justify-center">
            {minorProjectsList.map((project) => {
              const { id } = project;
              return (
                <Card
                  key = {id}
                  project = {project}
                />
              )
            })}
        </div>
    </div>
  )
}

export default ReactMinorProjects;