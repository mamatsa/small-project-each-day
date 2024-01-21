interface InfoBoxProps {
  label: string;
  data: string;
}

const InfoBox = ({ label, data }: InfoBoxProps) => {
  return (
    <div className="border border-white border-opacity-20 p-4">
      <p className="text-xs font-bold opacity-70">{label}</p>
      <h2 className="text-3xl uppercase">{data}</h2>
    </div>
  );
};

export default InfoBox;
