import { useId } from "react";

const Input = ({ label, error, className = "", id, ...props }) => {
  const autoId = useId();
  const inputId = id || autoId;
  return (
    <div className={className}>
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-err` : undefined}
        className={`input-base ${error ? "border-red-500" : ""}`}
        {...props}
      />
      {error && (
        <p id={`${inputId}-err`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};
export default Input;
