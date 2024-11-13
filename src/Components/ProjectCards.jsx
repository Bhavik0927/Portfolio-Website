
const ProjectCards = ({ data }) => {

    const { name, image, link, tech } = data;

    return (
        <div className="w-52 h-72 bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
            <a href={link} target="_blank">
                <img className="h-40 w-full" src={image} alt={name} />
            </a>
            <div className="p-5">
                <a href={link} target="_blank">
                    <h5 className=" text-base font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                 <div className="flex flex-wrap">
                    {tech?.join(', ')}
                </div> 
            </div>
        </div>
    )
}

export default ProjectCards;