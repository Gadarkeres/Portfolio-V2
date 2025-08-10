"use client";
import { Tooltip } from "antd";
import Image from "next/image";

type Props = {
  readonly image: any;
  readonly alt: string;
  readonly note?: string;     
  readonly colorItem?: string;
};

export default function TechnologyItem({ image, alt, note, colorItem }: Props) {

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
    </div>
  );
}
