"use client";
import { clsx } from "clsx";

interface ButtonProps {
  value: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  className,
  outline,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-44 py-3 text-center border-2 hover:bg-blue-800 hover:border-blue-800 bg-blue-600 border-blue-600 rounded-md",
        outline
          ? "bg-transparent text-themeText-200 border-themeText-200 hover:text-themeText-400 hover:border-themeText-400 hover:!bg-slate-200"
          : "text-white",
        className
      )}
    >
      {value}
    </button>
  );
};
export default Button;
