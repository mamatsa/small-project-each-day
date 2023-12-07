interface NavButtonsProps {
  currentStep: number;
  onStepChange: (newStep: number) => void;
}

const NavButtons = ({ currentStep, onStepChange }: NavButtonsProps) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 flex justify-between bg-white p-4 md:static md:w-full md:max-w-xl md:px-0"
      style={currentStep > 4 ? { visibility: "hidden" } : {}}
    >
      <button
        className="text-sm font-medium text-cool-gray md:text-base"
        onClick={() => {
          onStepChange(currentStep - 1);
        }}
        style={currentStep === 1 ? { visibility: "hidden" } : {}}
      >
        Go Back
      </button>
      <button
        className="md:hover:bg-hover-blue w-[100px] rounded-sm bg-marine-blue py-3 text-sm font-medium text-white md:rounded-md md:text-base"
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
