import { Section, Input } from "./components";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormValues {
  Name: string;
  "Email Address": string;
  "Phone Number": string;
}

const PersonalInfo = ({ onSectionSubmit }: { onSectionSubmit: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
    onSectionSubmit();
  };

  return (
    <Section>
      <h1 className="text-2xl font-bold text-marine-blue">Personal info</h1>
      <p className="mt-1 text-cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <form
        id="multiStepForm"
        className="mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Name"
          placeholder="e.g. Stephen King"
          register={register}
          type="text"
          errors={errors}
        />
        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          register={register}
          type="email"
          errors={errors}
        />
        <Input
          label="Phone Number"
          placeholder="e.g. +995 555 555 555"
          register={register}
          type="text"
          errors={errors}
        />
      </form>
    </Section>
  );
};

export default PersonalInfo;
