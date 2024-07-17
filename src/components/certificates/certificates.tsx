"use client";
import React, { useState } from "react";
import { certificates } from "@/data/certificates";
import { CertificateData } from "@/data/certificates";
import { Image } from "antd";

const Certificates = () => {
  const [data] = useState<CertificateData[]>(certificates);
  return (
    <div className="flex flex-col items-center p-5 w-full min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-black dark:to-gray-800">
      <h1 className="text-3xl font-bold dark:text-gray-200 mb-5">CERTIFICADOS</h1>
      <div className="grid gap-10 w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:w-3/4">
        {data &&
          data.map((data) => (
            <div
              key={data.alt}
              className="flex items-center justify-center bg-white overflow-hidden shadow-lg dark:bg-primaryBlack p-2 rounded-lg"
            >
              <Image src={data.img.src} alt={data.alt} width={"100%"} lang="pt-br" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Certificates;
