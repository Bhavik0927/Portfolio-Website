import RightMenu from "./Components/RightMenu";
import Sidebar from "./Components/Sidebar";
import { SidebarItem } from "./Components/SidebarItem";
import { LayoutDashboard, Home, SquareDashedBottomCode, FolderKanban, Github, Instagram, Linkedin, Layers } from "lucide-react";
import SidebarProvider from "./utils/SidebarProvider";

const App = () => {
  return (

    <SidebarProvider>
      <div className="flex  z-10 overflow-hidden  bg-[rgb(20,19,26)] " >
        <div className="flex fixed top-0">
          <Sidebar>
            <SidebarItem icon={<Home size={20} />} text="Home" />
            <SidebarItem icon={<FolderKanban size={20} />} text="Projects" />
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Trending" />
            <SidebarItem icon={<SquareDashedBottomCode size={20} />} text="Snippets" />

            <hr className="my-3" />

            <a href="#" target="__blank" >
              <SidebarItem icon={<Instagram size={20} className="text-[rgb(162,23,143)]" />} text="Instagram" />
            </a>
            <a href="https://github.com/Bhavik0927" target="__blank">
              <SidebarItem icon={<Github size={20} className="text-[rgb(37,113,106)]" />} text="Github" />
            </a>
            <a href="https://www.linkedin.com/in/bhavik-tembhare-b8a76b1a3/" target="__blank">
              <SidebarItem icon={<Linkedin size={20} className="text-[rgb(5,109,164)]" />} text="LinkedIn" />
            </a>
            <a href="https://stackoverflow.com/users/14662991/bhavik-arun-tembhare" target="__blank">
              <SidebarItem icon={<Layers size={20} className="text-[rgb(226,118,3)]" />} text="Stack-overflow" />
            </a>
          </Sidebar>
        </div>
      </div>
      <RightMenu />
    </SidebarProvider>

  )
}

export default App