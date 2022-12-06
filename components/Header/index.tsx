import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import type { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";

const Header: NextPage = () => {
  const { data: session } = useSession();

  const icons = [
    {
      icon: HomeIcon,
      active: true,
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
  ];

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
        <div className="flex  items-center rounded-full bg-gray-100 p-2 ml-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className="hidden md:flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* MID */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          {icons.map((icon, idx) => (
            <HeaderIcon Icon={icon.icon} active={icon.active} key={idx} />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile pic */}
        <Image
          src={session?.user?.image || "/"}
          width={40}
          height={40}
          alt={session?.user?.name || " "}
          className="rounded-full cursor-pointer"
          onClick={() => signOut()}
          priority
        />

        <p className="font-semibold pr-3 whitespace-nowrap">
          {session?.user?.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
