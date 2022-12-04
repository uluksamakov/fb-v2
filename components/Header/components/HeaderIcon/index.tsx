import type { NextPage } from "next";

type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

type Props = {
  Icon: HeroIcon;
};

const HeaderIcon: NextPage<Props> = ({ Icon }) => {
  return (
    <div className="cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon className="h-5  text-center sm:h-7 mx-auto group-hover:text-blue-500" />
    </div>
  );
};

export default HeaderIcon;
