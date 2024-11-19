import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const { data } = location.state || {};
  console.log(data);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project Photo ${index + 1}`}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          ))}
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

{/* */ }
export default ProjectDetails;