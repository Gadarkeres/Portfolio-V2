
interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  text?: string;
}

export default function ButtonCustom({
  children,
  disabled,
  text,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className=" flex flex-row justify-center items-center px-2.5 py-2 gap-2 rounded-md hover:bg-opacity-80  text-gray-200 bg-primaryBlack  dark:bg-gray-200 dark:text-gray-950"
    >
      {text}
      {children}
    </button>
  );
}
