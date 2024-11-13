
const StackBlock = ({ data }) => {
    const {heading,tech} = data;

    return (
        <div className="w-36 h-80 bg-[rgb(28,27,35)] m-1 p-2">
            <h2 className="text-[rgb(139,138,145)] font-bold text-lg" >{heading}</h2>
            {
                tech.map((item,index) =>(
                   <button className="border-[1px] border-black text-[rgb(139,138,145)] bg-[rgb(28,27,35)] rounded-md  m-1 py-1 px-2 " key={index}>{item}</button> 
                ))
            }
        </div> 
    )
}

export default StackBlock;