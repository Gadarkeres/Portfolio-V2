import { Progress } from "antd";
import React from "react";
import Image from "next/image";
import { Tooltip } from "antd";

type Props = {
  porcent: number;
  backend?: boolean;
  image: any;
  alt: any;
  color: string;
};

const Technology = ({ porcent, backend, image, alt, color }: Props) => {
  return (
    <div className="w-full dark:text-gray-200 mt-5 px-5 flex gap-3 py-2">
      <div>
        <Tooltip title={alt} className="cursor-pointer" color={color}>
          <Image src={image?.src} alt={alt} width={35} height={45} />
        </Tooltip>
      </div>
      {backend ? (
        <>
          <Progress
            percent={porcent}
            status="active"
            strokeColor={"red"}
            showInfo={false}
          />
          <small className="dark:text-gray-200">{porcent}%</small>
        </>
      ) : (
        <>
          <Progress percent={porcent} status="active" showInfo={false} />
          <small className="dark:text-gray-200">{porcent}%</small>
        </>
      )}
    </div>
  );
};

export default Technology;
