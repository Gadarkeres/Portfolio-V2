"use client";
import React, { useState } from "react";
import { certificates } from "@/data/certificates";
import { CertificateData } from "@/data/certificates";
import { Image } from "antd";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const [data] = useState<CertificateData[]>(certificates);
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation("common");

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedCertificates = showAll ? data : data.slice(0, 6);

  return (
    <div className="flex flex-col items-center p-5 w-full min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 dark:bg-gradient-to-r dark:from-black dark:to-gray-800">
      <h1 className="text-3xl font-bold dark:text-gray-200 mb-5">
        {t("certificates.title")}
      </h1>

      <div className="grid gap-10 w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:w-3/4">
        {displayedCertificates.map((data) => (
          <div
            key={data.alt}
            className="flex items-center justify-center bg-white overflow-hidden shadow-lg dark:bg-primaryBlack p-2 rounded-lg"
          >
            <Image
              src={data.img.src}
              alt={data.alt}
              width={"100%"}
              lang="pt-br"
            />
          </div>
        ))}
      </div>

      <Button onClick={toggleShowAll} custom="w-1/3 lg:w-1/4 mt-5">
        {showAll ? t("certificates.showLess") : t("certificates.showAll")}
      </Button>
    </div>
  );
};

export default Certificates;
