import { Section, Input } from "./components";

const PersonalInfo = () => {
  return (
    <Section>
      <h1 className="text-marine-blue text-2xl font-bold">Personal info</h1>
      <p className="text-cool-gray mt-1">
        Please provide your name, email address, and phone number.
      </p>
      <form action="" className="mt-5">
        <Input id="userName" label="Name" placeholder="e.g. Stephen King" />
        <Input
          id="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <Input
          id="phoneNumber"
          label="Phone Number"
          placeholder="e.g. +995 555 555 555"
        />
      </form>
    </Section>
  );
};

export default PersonalInfo;
