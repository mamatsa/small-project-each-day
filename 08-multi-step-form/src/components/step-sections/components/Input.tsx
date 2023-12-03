const Input = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => {
  return (
    <div className="text-marine-blue mb-4 flex flex-col">
      <label htmlFor={id} className="text-marine-blue text-xs">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className="border-light-gray text-marine-blue rounded-md border px-4 py-3 font-bold outline-none"
      />
    </div>
  );
};

export default Input;
