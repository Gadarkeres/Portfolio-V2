"use client";
import Image from "next/image";
import { Tag, Tooltip } from "antd";

type Props = {
  image: any;
  alt: string;
  porcent: number;   
  note?: string;     
  colorItem?: string;
};

const levelFromPercent = (p: number) => {
  if (p >= 80) return { label: "Avançado", color: "green" as const };
  if (p >= 50) return { label: "Intermediário", color: "gold" as const };
  return { label: "Básico", color: "default" as const };
};

export default function TechnologyItem({ image, alt, porcent, note, colorItem }: Props) {
  const level = levelFromPercent(porcent);

  return (
    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition">
      <Tooltip color={colorItem} title={alt}>
        <Image src={image?.src ?? image} alt={alt} width={28} height={28} />
      </Tooltip>

      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {alt}
        </span>
        {note && (
          <span className="text-xs text-gray-600 dark:text-gray-400">
            {note}
          </span>
        )}
      </div>

      <div className="ml-auto">
        <Tag color={level.color}>{level.label}</Tag>
      </div>
    </div>
  );
}
