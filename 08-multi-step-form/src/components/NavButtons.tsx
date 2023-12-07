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
        className={`w-[100px] whitespace-nowrap rounded-sm bg-marine-blue py-3 text-sm font-medium text-white md:w-[130px] md:rounded-md md:text-base md:hover:bg-hover-blue ${
          currentStep === 4 && "bg-purplish-blue md:hover:bg-pastel-blue"
        }`}
        type="submit"
        form="multiStepForm"
        onClick={() => {
          onStepChange(currentStep + 1);
        }}
      >
        {currentStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default NavButtons;
