interface SidebarStepProps {
  step: number;
  currentStep: number;
  title: string;
}

const SidebarStep = ({ step, currentStep, title }: SidebarStepProps) => {
  return (
    <div className="md:flex md:items-center md:gap-3">
      <div
        className="grid h-8 w-8 place-items-center rounded-full border border-white text-sm font-bold"
        style={
          step === currentStep
            ? {
                backgroundColor: "hsl(206, 94%, 87%)",
                color: "hsl(213, 96%, 18%)",
                border: "none",
              }
            : {}
        }
      >
        {step}
      </div>
      <div className="hidden md:block">
        <p className="text-xs text-light-gray">STEP {step}</p>
        <p className="whitespace-nowrap text-sm font-bold text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SidebarStep;
