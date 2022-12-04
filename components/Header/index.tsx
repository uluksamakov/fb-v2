import type { NextPage } from "next";
import { SearchIcon, FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from "@heroicons/react/solid"
import Image from "next/image";
import HeaderIcon from "./components/HeaderIcon/";

const Header: NextPage = () => {

    const icons = [
        {
            icon: HomeIcon,
        },
        {
            icon: FlagIcon,
        },
        {
            icon: PlayIcon,
        },
        {
            icon: ShoppingCartIcon,
        },
        {
            icon: UserGroupIcon,
        },
    ]

  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
        {/* LEFT */}
      <div className="flex items-center">
        <Image
            src="/images/facebook-logo.png"
            width={40}
            height={40}
            alt="Facebook logo"
        />
        <div className="flex items-center rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6 text-gray-600" />
            <input type="text" className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" placeholder="Search Facebook" />
        </div>
      </div>

    {/* MID */}
    <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
            {icons.map(icon => (
                <HeaderIcon Icon={icon.icon} />
            ))}
        </div>
    </div>


            {/* Right */}
    </header>
  );
};

export default Header;

