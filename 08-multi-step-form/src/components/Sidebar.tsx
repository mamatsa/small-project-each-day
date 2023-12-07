import SidebarStep from "./SidebarStep";

interface SidebarProps {
  currentStep: number;
}

const Sidebar = ({ currentStep }: SidebarProps) => {
  if (currentStep > 4) currentStep -= 1;
  return (
    <div className="absolute left-0 right-0 top-0 flex h-[172px] justify-center gap-4 bg-sidebar-mobile bg-cover bg-no-repeat pt-8 text-white md:static md:h-full md:min-w-[274px] md:flex-col md:justify-start md:gap-8 md:rounded-lg md:bg-sidebar md:px-8 md:pt-10">
      <SidebarStep step={1} currentStep={currentStep} title={"YOUR INFO"} />
      <SidebarStep step={2} currentStep={currentStep} title={"SELECT PLAN"} />
      <SidebarStep step={3} currentStep={currentStep} title={"ADD-ONS"} />
      <SidebarStep step={4} currentStep={currentStep} title={"SUMMARY"} />
    </div>
  );
};

export default Sidebar;
