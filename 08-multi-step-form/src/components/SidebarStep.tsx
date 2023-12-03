const SidebarStep = ({
  step,
  currentStep,
}: {
  step: number;
  currentStep: number;
}) => {
  return (
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
  );
};

export default SidebarStep;
