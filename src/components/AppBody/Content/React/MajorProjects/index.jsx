import Card from "../MinorProjects/card";
import { majorProjectsList } from "../MinorProjects/utils";

const ReactMajorProjects = () => {
  return (
    <div className="w-full h-full flex justify-center bg-gray-900 p-10 overflow-auto">
        <div className="w-[80%] h-full text-white flex flex-grow flex-wrap gap-8 items-center justify-center">
            {majorProjectsList.map((project) => {
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

export default ReactMajorProjects