import { Section, Title } from "./components";
import { FormData } from "App";

interface SummaryProps {
  formData: FormData;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const Summary = ({ formData, setCurrentStep }: SummaryProps) => {
  const period = formData.yearly ? "yr" : "mo";
  const finalPrice =
    (formData.optionPrice +
      Number(formData["Online service"]) +
      Number(formData["Customizable profile"]) * 2 +
      Number(formData["Larger storage"]) * 2) *
    10 ** Number(formData.yearly);
  return (
    <Section>
      <Title
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />
      <div className="rounded-md bg-magnolia p-4 text-sm">
        {/* Plan */}
        <div className="flex items-center justify-between md:text-base">
          <div>
            <h3 className="font-medium text-marine-blue">
              {formData.selectedOption} (
              {formData.yearly ? "Yearly" : "Monthly"})
            </h3>
            <button
              className="text-cool-gray underline md:text-sm"
              onClick={() => {
                setCurrentStep(2);
              }}
            >
              Change
            </button>
          </div>
          <p className="font-bold text-marine-blue">
            ${formData.optionPrice * 10 ** Number(formData.yearly)}/{period}
          </p>
        </div>

        <div className="my-3 h-px w-full bg-light-gray"></div>

        {/* Picked addons */}
        <div className="space-y-3">
          {formData["Online service"] && (
            <div className="flex items-center justify-between">
              <h4 className="text-cool-gray">Online service</h4>
              <p className="text-marine-blue">
                +${1 * 10 ** Number(formData.yearly)}/{period}
              </p>
            </div>
          )}

          {formData["Larger storage"] && (
            <div className="flex items-center justify-between">
              <h4 className="text-cool-gray">Larger storage</h4>
              <p className="text-marine-blue">
                +${2 * 10 ** Number(formData.yearly)}/{period}
              </p>
            </div>
          )}

          {formData["Customizable profile"] && (
            <div className="flex items-center justify-between">
              <h4 className="text-cool-gray">Customizable profile</h4>
              <p className="text-marine-blue">
                +${2 * 10 ** Number(formData.yearly)}/{period}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Total price */}
      <div className="mt-6 flex items-center justify-between px-4">
        <h4 className="text-sm text-cool-gray">
          Total (per {formData.yearly ? "year" : "month"})
        </h4>
        <p className="font-semibold text-purplish-blue md:text-xl">
          ${finalPrice}/{period}
        </p>
      </div>
    </Section>
  );
};

export default Summary;
