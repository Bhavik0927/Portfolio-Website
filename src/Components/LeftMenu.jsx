import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import { BsSendArrowDown } from "react-icons/bs";
import { MdOutlineVideoSettings } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import { useState } from "react";


const LeftMenu = () => {

  const [isOpen,setIsOpen] = useState(false);

  const toggleSideBar = () =>{ setIsOpen(!isOpen) };

  return (
    <div className="w-1/5 h-1/5 sticky top-0 overflow-y-auto  rounded-tl-xl bg-[rgb(28,27,35)] overflow-hidden  ">
      <button className="text-white  md:hidden right-0 top-0" onClick={toggleSideBar}> X </button>
      <ul className="pl-7 pt-8 " >
        <li className="flex justify-start items-center gap-4 text-base mb-7 text-[rgb(139,138,145)]"><span className="text-2xl  font-bold"> <IoHomeOutline /> </span>Home</li>

        <li className="flex justify-start items-center gap-4 text-base mb-7 text-[rgb(139,138,145)]"><span className="text-2xl  "> <AiOutlineFire /> </span>Trending</li>

        <li className="flex justify-start items-center gap-4 text-base mb-7 text-[rgb(139,138,145)]"><span className="text-2xl  "> <BsSendArrowDown /> </span>Snippets</li>

        <li className="flex justify-start items-center gap-4 text-base mb-7 text-[rgb(139,138,145)]">
          <span className="text-2xl"><MdOutlineVideoSettings /> </span>Videos</li>

      </ul>

      <div className="pl-7 pt-8 ">

        <h2 className="text-[rgb(139,138,145)] mb-7 ">Socials</h2>
        
        <a href="#" target="__blank" className="flex justify-start items-center gap-4 text-base mb-7 text-[rgb(139,138,145)]">
          <GrInstagram className="text-[rgb(162,23,143)] text-2xl" />
          <span > Instagram </span>
        </a>

        <a href="https://github.com/Bhavik0927" target="__blank" className="flex justify-start items-center gap-4 text-base mb-7 -[rgb(139,138,145)]">
          <LuGithub className="text-2xl text-[rgb(37,113,106)]" />
          <span  >Github  </span>
        </a>

        <a className="flex justify-start items-center gap-4 text-base mb-7 text-[rgb(139,138,145)] " href="https://www.linkedin.com/in/bhavik-tembhare-b8a76b1a3/" target="__blank" >text
          <FaLinkedinIn className="text-2xl text-[rgb(5,109,164)]" />
          <span> LinkedIn</span>
        </a>

        <a href="https://stackoverflow.com/users/14662991/bhavik-arun-tembhare" target="__blank" className="flex justify-start items-center gap-4 text-base mb-7 text-[rgb(139,138,145)] cursor-pointer "> <RiStackLine className="text-2xl text-[rgb(226,118,3)]" /> <span>Stack-overflow</span> </a>

      </div>


      
    </div>
  )
}

export default LeftMenu