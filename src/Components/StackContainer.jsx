import Stacks from "../Stacks";
import StackBlock from "./StackBlock";

const StackContainer = () => {
    return (
        <div className=" p-10 flex gap-5 flex-wrap justify-center bg-[rgb(20,19,26)]">
            <div className="p-4 mt-2">
                <h1 className="text-white font-bold mb-1 text-lg">What I Know </h1>
                <div className="flex flex-wrap  ">
                    {
                        Stacks.map((data) => (
                            <StackBlock key={data.id} data={data} />
                        ))
                    }
                </div>
            </div>
            <div className="w-52 bg-[rgb(28,27,35)] ">
                <h2 className="text-white font-bold mb-1 mt-5 text-center text-lg ">More Projects</h2>
                <div className="px-3">
                    <button className="border-[1px] border-black text-[rgb(139,138,145)] bg-[rgb(28,27,35)] rounded-md  m-1 py-1 px-2 ">Bubble Game</button>
                    <button className="border-[1px] border-indigo-700 text-[rgb(139,138,145)] bg-[rgb(28,27,35)] rounded-md  m-1 py-1 px-2 ">Short URL</button>
                </div>
            </div>
        </div>
    )
}

export default StackContainer