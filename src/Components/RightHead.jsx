
import { BsFileRichtextFill } from "react-icons/bs";
import { useSidebarContext } from "../utils/SidebarProvider";

const RightHead = () => {
    const { extended } = useSidebarContext();

    return (

        <div className={` h-36 w-full flex items-center justify-between  p-2 px-8 `}
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="flex items-center justify-center gap-5">
                <div className="w-24 h-24 rounded-full border-solid border-[3px] border-white overflow-hidden">
                    <img className="w-full h-full" src="https://i.postimg.cc/X7RHGVcN/1691651295602.jpg" alt="port" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white">Bhavik Arun Tembhare</h1>
                    <a className="text-white" href="">@bhavik927</a>
                </div>
            </div>

            <button className="bg-black p-3 flex items-center justify-center gap-1 text-gray-500 rounded-md font-bold w-52"><BsFileRichtextFill /> Resume</button>
        </div>

    )
}

export default RightHead;

{/*  */ }