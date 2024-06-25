"use client";
import { Progress } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import ModalCustom from "../ui/Modal";
import { title } from "process";

type Props = {
  porcent: number;
  image: any;
  alt: any;
  color: string;
  title: string;
  text: string;
  backend?: boolean;
};

const Technology = ({
  porcent,
  image,
  alt,
  color,
  text,
  title,
  backend,
}: Props) => {
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
      <>
        <Progress
          percent={porcent}
          status="active"
          showInfo={false}
          strokeColor={backend ? "red" : ""}
        />
        <small className="dark:text-gray-200">{porcent}%</small>
      </>
      <ModalCustom open={open} setOpen={setOpen} text={text} title={title} />
    </div>
  );
};

export default Technology;
