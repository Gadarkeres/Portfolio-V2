"use client";
import Button from "../ui/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import {
  EyeTwoTone,
  EyeInvisibleTwoTone,
  InfoCircleFilled,
} from "@ant-design/icons";
import useLoginHook from "./useLoginHook";
import { Tooltip } from "antd";
import ModalCustom from "../ui/Modal";
import customHook from "../about/customHook";

const Login = () => {
  const {
    submit,
    handleSubmit,
    register,
    errors,
    showPassword,
    setShowPassword,
    open,
    setOpen,
  } = useLoginHook();

  const { redirect } = customHook();

  return (
    <div className=" flex flex-col items-center justify-center p-5 w-full min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-black dark:to-gray-800">
      <div className="relative w-5/6 h-3/4 bg-slate-200 dark:bg-primaryBlack flex flex-col items-center p-10 gap-4 rounded-lg shadow-md md:max-w-lg">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-gray-200">
          Login
        </h2>
        <div className="text-gray-950 dark:text-white">
          <Tooltip title="Login: admin / 1234">
            <InfoCircleFilled className="absolute top-3 right-3" size={22} />
          </Tooltip>
        </div>
        <Form onSubmit={handleSubmit(submit)}>
          <Input
            register={{
              ...register("email", { required: "Email é obrigatório" }),
            }}
            label_name="Usuário"
            type="text"
            placeholder="admin"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <Input
            register={{
              ...register("password", { required: "Senha é obrigatória" }),
            }}
            label_name="Senha"
            type={showPassword ? "text" : "password"}
            placeholder="1234"
            id="password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          {showPassword ? (
            <EyeInvisibleTwoTone
              className="position-absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer my-1"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <EyeTwoTone
              className="position-absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer my-1"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
          <Button type="submit">Fazer Login</Button>
        </Form>
        <ModalCustom
          open={open}
          setOpen={setOpen}
          functionCustom={() =>
            redirect("https://github.com/Gadarkeres/Portfolio-V2")
          }
          title={"Sucesso!"}
          text={
            "Obrigado por visitar meu portfólio, gostaria de ver o codigo fonte no Github?"
          }
          okText={"Sim"}
          cancelText={"Não, valeu"}
        />
      </div>
    </div>
  );
};

export default Login;
