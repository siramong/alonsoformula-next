import type { ChangeEventHandler } from "react";

type ExerciseOptionState = "default" | "correct" | "incorrect";

interface ExerciseOptionProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  state?: ExerciseOptionState;
}

export default function ExerciseOption({
  id,
  name,
  value,
  label,
  checked,
  disabled,
  onChange,
  state = "default",
}: ExerciseOptionProps) {
  const stateStyles =
    state === "correct"
      ? "border-success-400 bg-success-50 shadow-lg"
      : state === "incorrect"
      ? "border-warning-400 bg-warning-50 shadow-lg animate-pulse"
      : "border-gray-200 bg-white";

  const checkedStyles = checked
    ? "border-primary-500 bg-gradient-to-r from-primary-50 to-accent-50 shadow-md"
    : "hover:border-primary-300 hover:bg-primary-50/20";

  const interactiveStyles = state === "default" ? checkedStyles : "";

  return (
    <label
      htmlFor={id}
      className={`group flex cursor-pointer items-start gap-3 rounded-2xl border-2 px-4 py-4 text-left transition-all duration-200 transform hover:scale-105 active:scale-95 focus-within:ring-2 focus-within:ring-primary-400 focus-within:ring-offset-2 ${
        disabled ? "cursor-not-allowed opacity-70" : ""}
      ${stateStyles} ${interactiveStyles}`}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="peer sr-only"
      />
      <span
        className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-200 ${
          checked
            ? "border-primary-600 bg-gradient-to-r from-primary-600 to-primary-500 shadow-md"
            : "border-gray-300 bg-white"
        }`}
        aria-hidden="true"
      >
        <span
          className={`h-2.5 w-2.5 rounded-full bg-white transition-transform duration-200 ${
            checked ? "scale-100" : "scale-0"
          }`}
        />
      </span>
      <span className="text-sm sm:text-base font-medium text-gray-800">{label}</span>
    </label>
  );
}
