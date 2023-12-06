interface SelectOptionProps {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  price: number;
  children: React.ReactNode;
  yearly: boolean;
}

const SelectOption = ({
  selectedOption,
  setSelectedOption,
  title,
  price,
  yearly,
  children,
}: SelectOptionProps) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-md border border-light-gray p-4 ${
        selectedOption === title && "border-purplish-blue bg-magnolia"
      } ${yearly && "pb-8"}`}
      onClick={() => {
        setSelectedOption(title);
      }}
    >
      {children}

      <div className="relative w-32 space-y-0.5">
        <h3 className="font-medium text-marine-blue">{title}</h3>
        <p className="text-sm text-cool-gray">
          {yearly ? `$${price * 10}/yr` : `$${price}/mo`}
        </p>
        {yearly && (
          <p className="absolute bottom-[-22px] w-full text-sm text-marine-blue">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectOption;
