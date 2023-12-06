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
import { IFormValues } from "components/step-sections/PersonalInfo";

const App = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [formData, setFormData] = useState({
    Name: "",
    "Email Address": "",
    "Phone Number": "",
  });

  const stepChangeHandler = (newStep: number, sectionPassed?: boolean) => {
    // Always let user go back
    if (newStep < currentStep) setCurrentStep(newStep);

    // Final submit doesn't need any check
    if (newStep === 5) setCurrentStep(newStep);

    // If section form is submitted correctly move forward
    if (sectionPassed) {
      setCurrentStep(newStep);
    }
  };

  const formSubmitHandler = (newData: IFormValues) => {
    stepChangeHandler(currentStep + 1, true);
    setFormData({ ...formData, ...newData });
  };

  return (
    <div className="flex h-screen w-full items-start justify-center bg-magnolia">
      <div className="w-full">
        {/* Sidebar */}
        <Sidebar currentStep={currentStep} />
        <div>
          {/* Different form step sections */}
          {currentStep === 1 && (
            <PersonalInfo
              onSectionSubmit={formSubmitHandler}
              formData={formData}
            />
          )}
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
