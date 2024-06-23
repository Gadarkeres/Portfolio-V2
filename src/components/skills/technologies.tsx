"use client";
import { Progress } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import ModalCustom from "../ui/Modal";
import { title } from "process";

type Props = {
  porcent: number;
  backend?: boolean;
  image: any;
  alt: any;
  color: string;
  title: string;
  text: string;
};

const Technology = ({ porcent, backend, image, alt, color, text, title }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full dark:text-gray-200 mt-5 px-5 flex gap-3 py-2">
      <div>
        <Tooltip title={alt} className="cursor-pointer" color={color}>
          <Image
            onClick={() => setOpen(true)}
            src={image?.src}
            alt={alt}
            width={35}
            height={45}
          />
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
      <ModalCustom open={open} setOpen={setOpen} text={text} title={title} />
    </div>
  );
};

export default Technology;
