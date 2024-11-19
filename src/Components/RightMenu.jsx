import ProjectSction from "./ProjectSction";
import RightHead from "./RightHead";
import StackContainer from "./StackContainer";
import OtherTech from "./OtherTech";

const RightMenu = () => {
  return (
    <div className="ml-16 bg-[rgb(20,19,26)] z-10">
        <RightHead />
        <ProjectSction />
        <StackContainer />
        <OtherTech />
    </div>
  )
}

export default RightMenu;