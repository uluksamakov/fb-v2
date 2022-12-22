import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";

const Sidebar: NextPage = () => {
  const { data: session, status } = useSession();

  const sideBarValues = [
    {
      src: session?.user?.image,
      title: session?.user?.name,
    },
    {
      icon: UsersIcon,
      title: "Friends",
    },
    {
      icon: UserGroupIcon,
      title: "Groups",
    },
    {
      icon: ShoppingBagIcon,
      title: "Marketplace",
    },
    {
      icon: DesktopComputerIcon,
      title: "Watch",
    },
    {
      icon: CalendarIcon,
      title: "Events",
    },
    {
      icon: ClockIcon,
      title: "Memories",
    },
    {
      icon: ChevronDownIcon,
      title: "See More",
    },
  ];

  return (
    <aside className="hidden sm:block p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      {sideBarValues.map((item, idx) => (
        <SidebarRow
          Icon={item.icon}
          title={item.title}
          src={item.src}
          key={idx}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
