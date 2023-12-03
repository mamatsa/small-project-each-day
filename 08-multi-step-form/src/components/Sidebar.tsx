import SidebarStep from "./SidebarStep";

const Sidebar = ({ currentStep }: { currentStep: number }) => {
  if (currentStep > 4) currentStep -= 1;
  return (
    <div className="bg-sidebar-mobile absolute left-0 right-0 top-0 flex h-[172px] justify-center gap-4 bg-cover bg-no-repeat pt-8 text-white">
      <SidebarStep step={1} currentStep={currentStep} />
      <SidebarStep step={2} currentStep={currentStep} />
      <SidebarStep step={3} currentStep={currentStep} />
      <SidebarStep step={4} currentStep={currentStep} />
    </div>
  );
};

export default Sidebar;
