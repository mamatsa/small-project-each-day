import { Path, UseFormRegister, FieldErrors } from "react-hook-form";

interface IFormValues {
  Name: string;
  "Email Address": string;
  "Phone Number": string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  placeholder: string;
  errors: FieldErrors<IFormValues>;
  type: string;
};

const errorStyles = "border-strawberry-red";

const Input = ({ label, placeholder, register, errors, type }: InputProps) => {
  return (
    <div className="mb-4 flex flex-col text-marine-blue">
      <div className="flex items-center justify-between text-xs">
        <label htmlFor={label} className="text-marine-blue">
          {label}
        </label>
        {/* Error message */}
        {errors[label] && (
          <p role="alert" className="text-strawberry-red">
            {errors[label]?.message}
          </p>
        )}
      </div>
      <input
        {...register(label, {
          required: { value: true, message: "This field is required" },
          ...(type === "email" && {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Should match email format",
            },
          }),
        })}
        type={type}
        placeholder={placeholder}
        className={`rounded-md border border-light-gray px-4 py-3 font-bold text-marine-blue outline-none ${
          errors[label] && errorStyles
        }`}
      />
    </div>
  );
};

export default Input;
