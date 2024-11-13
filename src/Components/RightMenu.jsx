import ProjectSction from "./ProjectSction";
import RightHead from "./RightHead";
import StackContainer from "./StackContainer";
import OtherTech from "./OtherTech";

const RightMenu = () => {
  return (
    <div className="w-4/5 h-full ">
        <RightHead />
        <ProjectSction />
        <StackContainer />
        <OtherTech />
    </div>
  )
}

export default RightMenu;