import React, { ComponentProps } from "react";

interface inputProps extends ComponentProps<"input"> {
  children?: React.ReactNode;
  label_name: string;
  register: any;
}

export default function Input({
  children,
  label_name,
  register,
  ...props
}: inputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-950 dark:text-gray-200" htmlFor={props.id}>
        {label_name + ":"}
      </label>
      <input
        {...props}
        {...register}
        className="bg-slate-200 dark:bg-primaryBlack dark:text-gray-200 p-2 rounded-lg 
                   focus:outline-none 
                   border-2 border-opacity-50 dark:border-opacity-50
                   border-gray-500 dark:border-gray-300
                   focus:border-opacity-100 focus:dark:border-opacity-100"
      >
        {children}
      </input>
    </div>
  );
}