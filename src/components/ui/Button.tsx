"use client";

import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children?: React.ReactNode;
  custom?: string;
}

export default function Button({ children, custom, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`flex flex-row  text-center justify-center items-center px-2.5 py-2 gap-2 rounded-md hover:bg-opacity-80  text-gray-200 bg-primaryBlack  dark:bg-gray-200 dark:text-gray-950  ${
        custom ? custom : ""
      }`}
    >
      {children}
    </button>
  );
}
