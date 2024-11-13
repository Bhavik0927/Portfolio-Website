import RightMenu from "./Components/RightMenu";
import Sidebar, { SidebarItem } from "./Components/Sidebar";
import { LayoutDashboard, Home, SquareDashedBottomCode, FolderKanban, Github, Instagram, Linkedin, Layers } from "lucide-react";


const App = () => {
  return (
    <div className="flex overflow-hidden  bg-[rgb(20,19,26)] " >
      <div className="flex ">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home"  />
          <SidebarItem icon={<FolderKanban size={20} />} text="Projects" />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Trending"  />
          <SidebarItem icon={<SquareDashedBottomCode size={20} />} text="Snippets"  />

          <hr className="my-3" />
          
          <a href="#" ><SidebarItem icon={<Instagram size={20} className="text-[rgb(162,23,143)]" />} text="Instagram" /></a>
          <SidebarItem icon={<Github size={20} className="text-[rgb(37,113,106)]" />} text="Github"  />
          <SidebarItem icon={<Linkedin size={20} className="text-[rgb(5,109,164)]" />} text="LinkedIn"  />
          <SidebarItem icon={<Layers size={20} className="text-[rgb(226,118,3)]" />} text="Stack-overflow"  />
        </Sidebar>
      </div>
      <RightMenu />
    </div>
  )
}

export default App