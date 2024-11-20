import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={() => window.history.back()}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Go Back
      </button>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{data.description}</p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Photos</h2>
        <div >
          <div >
            {data?.images?.map((image, index) => (
              <div key={index} className=" flex  rounded-lg shadow-lg gap-2 p-3 my-2">
                <img
                  src={image?.url}
                  alt={`Project Photo ${index + 1}`}
                  className=" w-[500px] h-[250px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                {
                  image?.description ? <p className=" mt-5 text-base font-semibold  ">{image?.description}</p> : " "
                }
                
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
        <ul className="flex flex-wrap gap-2">
          {data?.tech?.map((tech, index) => (
            <li
              key={index}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full shadow-sm hover:bg-gray-200 transition-colors duration-200"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}

{/*  */ }
export default ProjectDetails;