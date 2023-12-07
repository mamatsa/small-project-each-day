interface NavButtonsProps {
  currentStep: number;
  onStepChange: (newStep: number) => void;
}

const NavButtons = ({ currentStep, onStepChange }: NavButtonsProps) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex justify-between bg-white p-4 md:static md:w-full"
      style={currentStep > 4 ? { visibility: "hidden" } : {}}
    >
      <button
        className="text-sm font-medium text-cool-gray"
        onClick={() => {
          onStepChange(currentStep - 1);
        }}
        style={currentStep === 1 ? { visibility: "hidden" } : {}}
      >
        Go Back
      </button>
      <button
        className="w-[100px] rounded-sm bg-marine-blue py-3 text-sm font-medium text-white"
        type="submit"
        form="multiStepForm"
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
