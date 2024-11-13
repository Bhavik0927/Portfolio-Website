import { createContext, useContext, useState } from "react";
// import { ChevronFirst, ChevronLast } from "lucide-react";

// Create SidebarContext
const SidebarContext = createContext();

// SidebarProvider component to wrap Sidebar and SidebarItems
const SidebarProvider = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
            {children}
        </SidebarContext.Provider>
    );
};

// Custom hook for consuming SidebarContext easily
export const useSidebarContext = () => {
    return useContext(SidebarContext);
};

export default SidebarProvider;
