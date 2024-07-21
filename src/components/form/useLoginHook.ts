import { useForm } from "react-hook-form";
import { formLogin } from "./type";
import { useState } from "react";
import customHook from "../about/customHook";

export default function useLoginHook() {
  const {open, setOpen} = customHook()
  const [showPassword, setShowPassword] = useState(false);

  function submit(data: formLogin) {
    if (data.email == "admin" && data.password == "1234"){
      setOpen(true)
    }
    else
      setError("password", {
        type: "custom",
        message: "Email ou senha inválidos :)",
      });
  }
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formLogin>();

  return {
    submit,
    register,
    errors,
    handleSubmit,
    setShowPassword,
    showPassword,
    open,
    setOpen
  };
}
