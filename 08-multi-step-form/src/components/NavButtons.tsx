const NavButtons = ({
  currentStep,
  onStepChange,
}: {
  currentStep: number;
  onStepChange: (newStep: number) => void;
}) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex justify-between bg-white p-4"
      style={currentStep > 4 ? { visibility: "hidden" } : {}}
    >
      <button
        className="text-cool-gray text-sm font-medium"
        onClick={() => {
          onStepChange(currentStep - 1);
        }}
        style={currentStep === 1 ? { visibility: "hidden" } : {}}
      >
        Go Back
      </button>
      <button
        className="bg-marine-blue w-[100px] rounded-sm py-3 text-sm font-medium text-white"
        onClick={() => {
          onStepChange(currentStep + 1);
        }}
        style={
          currentStep === 4 ? { backgroundColor: "hsl(243, 100%, 62%)" } : {}
        }
      >
        {currentStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default NavButtons;
