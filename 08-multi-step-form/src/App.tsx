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

export interface FormData {
  Name: string;
  "Email Address": string;
  "Phone Number": string;
  selectedOption: "Arcade" | "Advanced" | "Pro";
  yearly: boolean;
  optionPrice: number;
  "Online service": boolean;
  "Larger storage": boolean;
  "Customizable profile": boolean;
}

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    "Email Address": "",
    "Phone Number": "",
    selectedOption: "Arcade",
    yearly: false,
    optionPrice: 9,
    "Online service": false,
    "Larger storage": false,
    "Customizable profile": false,
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

  const formSubmitHandler = (newData: FormData) => {
    stepChangeHandler(currentStep + 1, true);
    setFormData({ ...formData, ...newData });
  };

  return (
    <div className="flex h-screen w-full items-start justify-center bg-magnolia md:items-center md:p-10">
      <div className="rounded-md bg-white md:relative md:flex md:h-full md:w-full md:max-w-5xl md:rounded-xl md:p-4">
        {/* Sidebar */}
        <Sidebar currentStep={currentStep} />

        {/* Different form step sections */}
        <div className="md:flex md:h-full md:w-full md:flex-col md:justify-between md:gap-5 md:px-10">
          {currentStep === 1 && (
            <PersonalInfo
              onSectionSubmit={formSubmitHandler}
              formData={formData}
            />
          )}
          {currentStep === 2 && (
            <SelectPlan
              onSectionSubmit={formSubmitHandler}
              formData={formData}
            />
          )}
          {currentStep === 3 && (
            <PickAddons
              yearly={formData.yearly}
              onSectionSubmit={formSubmitHandler}
              formData={formData}
            />
          )}
          {currentStep === 4 && (
            <Summary formData={formData} setCurrentStep={setCurrentStep} />
          )}
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
