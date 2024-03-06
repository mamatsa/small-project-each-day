interface InfoBoxProps {
  label: string;
  data: string;
}

const InfoBox = ({ label, data }: InfoBoxProps) => {
  return (
    <div className="border border-white border-opacity-20 p-4 2xl:p-6">
      <p className="text-xs font-bold opacity-70 2xl:text-base">{label}</p>
      <h2 className="text-3xl uppercase 2xl:text-4xl">{data}</h2>
    </div>
  );
};

export default InfoBox;
