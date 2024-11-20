import { Link } from "react-router-dom";

const ProjectCards = ({ data }) => {

    const { name, image, link, tech,id, photo } = data;

    return (
        <div className="w-52 h-72 relative bg-white border border-gray-200 rounded-lg shadow overflow-hidden z-10">
            <a href={link} target="_blank">
                <img className="h-40 w-full" src={image} alt={name} />
            </a>
            <div className="p-3">
                <a href={link} target="_blank">
                    <h5 className=" text-base font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <div className="flex flex-wrap font-semibold text-gray-400">
                    {tech?.join(', ')}
                </div>
            </div>
            <div className="p-1 absolute bottom-2 right-2 border rounded-lg border-gray-400 text-white font-semibold bg-[rgb(28,27,35)] ">
                <Link key={id} to={`/project/${id}`} state={{ data }}>View Details</Link>
            </div>
        </div>
    )
}

export default ProjectCards;