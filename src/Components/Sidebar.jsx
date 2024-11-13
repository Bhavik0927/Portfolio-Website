import { ChevronFirst, ChevronLast } from "lucide-react";
import { useSidebarContext } from "../utils/SidebarProvider";

const Sidebar = ({ children }) => {
    const { expanded, setExpanded } = useSidebarContext();

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                <ul className="flex-1 px-3">{children}</ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
