"use client";

import LoadingDots from "./LoadingDots";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "button" | undefined;
}

export default function Button({
  text,
  onClick,
  isDisabled,
  isLoading,
  type = "submit",
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={isDisabled}
      className="block bg-yellow-200 text-md rounded-full p-2"
    >
      {isLoading ? (
        <div className="w-6 h-6 mx-auto flex justify-center items-center">
          <LoadingDots />
        </div>
      ) : (
        <div className="flex gap-2 items-center justify-center whitespace-nowrap">
          <div>{text}</div>
        </div>
      )}
    </button>
  );
}
