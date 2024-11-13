import { useContext } from "react";
import SidebarContext from './Sidebar';

import { BsFileRichtextFill } from "react-icons/bs";

const RightHead = () => {
    const { expanded } = useContext(SidebarContext);
    console.log(expanded);
    return (

        <div className="h-36 max-w-full flex items-center  p-2 px-4 bg-[url('src/images/blur-background.jpg')]  ">
            <div className="flex items-center justify-center gap-5">
                <div className="w-24 h-24 rounded-full border-solid border-[3px] border-white overflow-hidden">
                    <img className="w-full h-full" src="src/images/port.jpg" alt="port" />
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