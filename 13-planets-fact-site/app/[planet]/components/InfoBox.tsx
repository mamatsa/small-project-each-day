interface InfoBoxProps {
  label: string;
  data: string;
}

const InfoBox = ({ label, data }: InfoBoxProps) => {
  return (
    <div className="flex items-center justify-between border border-white border-opacity-20 p-4 sm:block 2xl:p-6">
      <p className="text-sm font-bold opacity-70 sm:text-xs 2xl:text-base">
        {label}
      </p>
      <h2 className="text-2xl uppercase lg:text-3xl 2xl:text-4xl">{data}</h2>
    </div>
  );
};

export default InfoBox;
