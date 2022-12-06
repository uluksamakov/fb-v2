import type { NextPage } from "next";
import Image from "next/image";
import { HeroIcon } from "../../../utils/types/heroIcon";

type Props = {
  Icon?: HeroIcon;
  title?: string | null | undefined;
  src?: string | null | undefined;
};

const SidebarRow: NextPage<Props> = ({ Icon, title, src }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          src={src}
          className="rounded-full"
          width={30}
          height={30}
          alt="User image"
          priority
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
