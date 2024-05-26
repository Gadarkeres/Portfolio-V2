import { Progress } from "antd";
import React from "react";

type Props = {
  text: string;
  porcent: number;
  backend?: boolean;
};

const Technology = ({ text, porcent, backend }: Props) => {
  return (
    <div className="w-full dark:text-gray-200 mt-5">
      <p>{text}</p>
      {backend ? (
        <Progress percent={porcent} status="active" strokeColor={"red"} showInfo={false} />
      ) : (
        <Progress percent={porcent} status="active" showInfo={false} />
      )}
    </div>
  );
};

export default Technology;
