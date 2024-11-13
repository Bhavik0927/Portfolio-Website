import projects from "../projects";
import ProjectCards from "./ProjectCards";

const ProjectSction = () => {
  return (
    <div className=" bg-[rgb(20,19,26)] p-4 ">
      <h1 className="text-[rgb(213,213,216)] font-bold text-xl pl-10">Projcts</h1>
      <div className="flex flex-wrap p-2 justify-center gap-10 mt-2 ">
        {
          projects.map((data) => (
            <ProjectCards key={data.id} data={data} />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectSction