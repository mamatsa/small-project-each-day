import { Path, UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormValues } from "../PersonalInfo";

interface InputProps {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  errors: FieldErrors<IFormValues>;
  placeholder: string;
  type?: string;
}

const Input = ({ label, placeholder, register, errors, type }: InputProps) => {
  return (
    <div className="mb-4 flex flex-col text-marine-blue md:gap-1">
      <div className="flex items-center justify-between text-xs md:text-sm">
        <label htmlFor={label} className="text-marine-blue">
          {label}
        </label>
        {/* Error message */}
        {errors[label] && (
          <p role="alert" className="text-strawberry-red md:font-medium">
            {errors[label]?.message}
          </p>
        )}
      </div>
      <input
        autoComplete="on"
        id={label}
        {...register(label, {
          required: { value: true, message: "This field is required" },
          ...(type === "email" && {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Should match email format",
            },
          }),
        })}
        placeholder={placeholder}
        className={`rounded-md border border-light-gray px-4 py-3 font-bold text-marine-blue outline-none ${
          errors[label] && "border-strawberry-red"
        }`}
      />
    </div>
  );
};

export default Input;
