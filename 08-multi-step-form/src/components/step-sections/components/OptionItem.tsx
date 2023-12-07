interface OptionItemProps {
  selectedOption: string;
  setSelectedOption: React.Dispatch<
    React.SetStateAction<"Arcade" | "Advanced" | "Pro">
  >;
  title: "Arcade" | "Advanced" | "Pro";
  price: number;
  children: React.ReactNode;
  yearly: boolean;
}

const OptionItem = ({
  selectedOption,
  setSelectedOption,
  title,
  price,
  yearly,
  children,
}: OptionItemProps) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-md border border-light-gray p-4 md:cursor-pointer md:flex-col md:items-start md:gap-7 md:py-6 ${
        selectedOption === title && "border-purplish-blue bg-magnolia"
      } ${yearly && "pb-8 md:pb-6"}`}
      onClick={() => {
        setSelectedOption(title);
      }}
    >
      {children}

      <div className="relative w-32 space-y-0.5 md:w-auto">
        <h3 className="font-medium text-marine-blue">{title}</h3>
        <p className="text-sm text-cool-gray">
          {yearly ? `$${price * 10}/yr` : `$${price}/mo`}
        </p>
        {yearly && (
          <p className="absolute bottom-[-22px] w-full text-sm text-marine-blue md:static">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default OptionItem;
