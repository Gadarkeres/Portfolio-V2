import Link from "next/link";
import ButtonCustom from "@/components/ui/Button";
import {ReloadOutlined} from "@ant-design/icons"

export default function NotFound() {
  return (
    <div className=" w-100 h-100 bg-gray-200 dark:bg-black flex items-center flex-col gap-5 justify-center h-screen">
      <h1 className="text-lg md:text-3xl  text-gray-900 dark:text-gray-50">
        Ops... Pagina não encontrada!
      </h1>
      <ButtonCustom>
        <Link href={"/"}>Ir para home</Link>
        <ReloadOutlined/>
      </ButtonCustom>
    </div>
  );
}
