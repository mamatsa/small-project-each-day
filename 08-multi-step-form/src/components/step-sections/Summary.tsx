import { Section } from "./components";
import { FormData } from "App";

interface SummaryProps {
  formData: FormData;
}

const Summary = ({ formData }: SummaryProps) => {
  console.log(formData);
  return (
    <Section>
      <h1 className="text-2xl font-bold text-marine-blue">Finishing Up</h1>
      <p className="mb-5 mt-1 text-cool-gray">
        Double-check everything looks OK before confirming.
      </p>
    </Section>
  );
};

export default Summary;
