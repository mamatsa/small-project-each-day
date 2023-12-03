import {
  NavButtons,
  Sidebar,
  PersonalInfo,
  SelectPlan,
  PickAddons,
  Summary,
  ThankYou,
} from "components";
import { useState } from "react";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepChangeHandler = (newStep: number) => {
    setCurrentStep(newStep);
  };
  return (
    <div className="bg-magnolia flex h-screen w-full items-start justify-center">
      <div className="w-full">
        {/* Sidebar */}
        <Sidebar currentStep={currentStep} />
        <div>
          {/* Different step sections */}
          {currentStep === 1 && <PersonalInfo />}
          {currentStep === 2 && <SelectPlan />}
          {currentStep === 3 && <PickAddons />}
          {currentStep === 4 && <Summary />}
          {currentStep === 5 && <ThankYou />}

          {/* Navigation Buttons */}
          <NavButtons
            currentStep={currentStep}
            onStepChange={stepChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
