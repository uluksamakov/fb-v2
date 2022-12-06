import type { NextPage } from "next";
import Image from "next/image";

type Props = {
  story: Story;
};

type Story = {
  name: string;
  src: string;
  profile: string;
};

const StoryCard: NextPage<Props> = ({ story }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 object-cover"
        src={story.profile}
        width={40}
        height={40}
        alt={story.name}
      />
      <Image
        className=" filter brigthness-75 rounded-full lg:rounded-xl object-cover"
        fill
        src={story.src}
        alt={story.name}
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {story.name}
      </p>
    </div>
  );
};

const Stories: NextPage = () => {
  //STORIES
  const stories = [
    {
      name: "Sonny Sangha",
      src: "https://links.papareact.com/zof",
      profile: "https://links.papareact.com/l4v",
    },
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
    },
    {
      name: "Jeff Bezoz",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
    },
    {
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard story={story} key={story.name} />
      ))}
    </div>
  );
};

export default Stories;
