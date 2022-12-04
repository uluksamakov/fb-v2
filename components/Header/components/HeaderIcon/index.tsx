import type { NextPage } from "next";

type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

type Props = {
  Icon: HeroIcon;
};

const HeaderIcon: NextPage<Props> = ({ Icon }) => {
  return <div>
    <Icon className="h-5" />
 
  </div>;
};

export default HeaderIcon;
