import { useState } from "react";

export default function customHook() {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setOpen(true);
  };
  const redirect = (link: string) => {
    window.open(link, "_blank");
    setOpen(false);
  };
  return { open, setOpen, handleImageClick, redirect };
}
