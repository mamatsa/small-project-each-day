import { Section } from "./components";
import { IconThankYou } from "components";

const ThankYou = () => {
  return (
    <Section>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 py-14">
        <IconThankYou />
        <h1 className="mt-5 text-2xl font-bold text-marine-blue md:text-3xl">
          Thank You!
        </h1>
        <p className="text-center leading-6 text-cool-gray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </Section>
  );
};

export default ThankYou;
