
const OtherTech = () => {

    const OtherTech = [
        {
            id: "1",
            name: "Rest API",
            image: "https://keenethics.com/wp-content/uploads/2022/01/rest-api-1.svg"
        },
        {
            id: "2",
            name: "GraphQl",
            image: "https://marmelab.com/images/blog/graphql/logo.png"
        }
    ]
    return (
        <div className=" pl-16 text-gray-300">
            <h1 className="mb-2 font-bold text-xl">Others</h1>
            <div className="flex items-center  gap-4">
                {
                    OtherTech.map((e) => (
                        <div key={e.id} className="h-36 w-52  flex flex-col  border-solid border-[1px] rounded-lg ">
                            <img className="h-4/5" src={e.image} alt="tech" />
                            <h2 className="pl-2">{e.name}</h2>
                        </div>
                    ))
                } 
            </div>
        </div>
    )
}

export default OtherTech