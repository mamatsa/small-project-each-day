import { Section, Input, Title } from "./components";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormData } from "App";

export interface IFormValues {
  Name: string;
  "Email Address": string;
  "Phone Number": string;
}

interface PersonalInfoProps {
  onSectionSubmit: (data: FormData) => void;
  formData: FormData;
}

const PersonalInfo = ({ onSectionSubmit, formData }: PersonalInfoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    onSectionSubmit({ ...formData, ...data });
  };

  return (
    <Section>
      <Title
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <form id="multiStepForm" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          placeholder="e.g. Stephen King"
          register={register}
          errors={errors}
        />
        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          register={register}
          errors={errors}
          type="email"
        />
        <Input
          label="Phone Number"
          placeholder="e.g. +995 555 555 555"
          register={register}
          errors={errors}
        />
      </form>
    </Section>
  );
};

export default PersonalInfo;
