interface CountryDetailProps {
  label: string;
  children: React.ReactNode;
}

const CountryDetail = ({ label, children }: CountryDetailProps) => {
  return (
    <p className="pb-1 text-sm font-light lg:text-base 2xl:text-lg">
      <span className="font-semibold">{label}</span>
      {children}
    </p>
  );
};

export default CountryDetail;
