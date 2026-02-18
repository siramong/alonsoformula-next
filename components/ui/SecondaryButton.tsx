import type { ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export default function SecondaryButton({
  label,
  className,
  children,
  type = "button",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex w-full items-center justify-center rounded-full border-2 border-primary-200 bg-white px-6 py-3 text-sm font-bold text-primary-600 shadow-md hover:shadow-lg hover:border-primary-300 transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:scale-100 transition-all duration-200 sm:w-auto ${
        className ?? ""
      }`}
      {...props}
    >
      {label ?? children}
    </button>
  );
}
