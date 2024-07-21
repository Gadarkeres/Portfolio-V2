"use client";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import { EyeTwoTone, EyeInvisibleTwoTone } from "@ant-design/icons";
import { useState } from "react";

interface formLogin {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formLogin>();
  const [showPassword, setShowPassword] = useState(false);

  const submit = (data: formLogin) => {
    window.alert("Login realizado com sucesso!");
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 w-full min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-black dark:to-gray-800">
      <div className="max-w-2/3 w-2/3 h-3/4 bg-slate-200 dark:bg-primaryBlack flex flex-col items-center p-10 gap-4 rounded-lg shadow-md md:max-w-lg">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-200">
          Login
        </h2>
        <Form onSubmit={handleSubmit(submit)}>
          <Input
            register={{ ...register("email", { required: "Email é obrigatório" })}}
            label_name="Email"
            type="text"
            placeholder="mail@example.com"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Input
            register={{...register("password", { required: "Senha é obrigatória" })}}
            label_name="Password"
            type={showPassword ? "text" : "password"}
            placeholder="1234"
            id="password"
          />
           {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          {showPassword ? (
            <EyeInvisibleTwoTone className="position-absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer my-1" onClick={() => setShowPassword(!showPassword)}/>
          ) : (
            <EyeTwoTone className="position-absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer my-1" onClick={() => setShowPassword(!showPassword)} />
          )}
          <Button type="submit">Fazer Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
