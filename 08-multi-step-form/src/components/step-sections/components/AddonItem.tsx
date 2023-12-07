import { FormData } from "App";

interface AddonItemProps {
  title: string;
  about: string;
  yearly: boolean;
  price: number;
  selected: boolean;
  setSelectedAddons: React.Dispatch<React.SetStateAction<FormData>>;
}

const AddonItem = ({
  title,
  about,
  price,
  yearly,
  selected,
  setSelectedAddons,
}: AddonItemProps) => {
  return (
    <div
      className={`flex items-center justify-between rounded-md border border-light-gray p-4 ${
        selected && "border-purplish-blue bg-magnolia"
      }`}
      onClick={() => {
        setSelectedAddons((prevState) => {
          return { ...prevState, [title]: !selected };
        });
      }}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="h-5 w-5"
          checked={selected}
          readOnly={true}
          name="checkbox"
        />
        <div className="space-y-0.5">
          <h3 className="text-sm text-marine-blue">{title}</h3>
          <p className="text-xs text-cool-gray">{about}</p>
        </div>
      </div>
      <p className="text-xs text-purplish-blue">
        {yearly ? `+$${price * 10}/yr` : `+$${price}/mo`}
      </p>
    </div>
  );
};

export default AddonItem;
