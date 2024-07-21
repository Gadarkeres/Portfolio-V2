import { ComponentProps } from "react";

interface formProps extends ComponentProps<"form"> {
  children: React.ReactNode;
}

export default function Form({ children, ...props }: formProps) {
  return (
    <form {...props} className="flex flex-col items-center w-1/2 gap-3">
      {children}
    </form>
  );
}
