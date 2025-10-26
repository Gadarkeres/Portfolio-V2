"use client";
import { Tooltip } from "antd";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type Props = {
  readonly image: any;
  readonly alt: string;
  readonly noteKey?: string; // agora a nota é uma chave de tradução
  readonly colorItem?: string;
  readonly titleKey?: string;
  readonly textKey?: string;
};

export default function TechnologyItem({
  image,
  alt,
  noteKey,
  colorItem,
  titleKey,
  textKey,
}: Props) {
  const { t } = useTranslation("common");

  const title = titleKey ? t(titleKey as any) : alt;
  const text = textKey ? t(textKey as any) : "";
  const note = noteKey ? t(noteKey as any) : "";

  return (
    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition">
      <Tooltip color={colorItem} title={title}>
        <Image src={image?.src ?? image} alt={alt} width={28} height={28} />
      </Tooltip>

      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {title}
        </span>
        {note && (
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {note}
          </span>
        )}
      </div>
    </div>
  );
}
