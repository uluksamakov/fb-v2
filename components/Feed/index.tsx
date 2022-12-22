import type { NextPage } from "next";
import { InputBox, Posts, Stories } from "./components";

const Feed: NextPage = () => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
        {/* STORIES */}
        <Stories />
        {/* INPUT BOX */}
        <InputBox />
        {/* POST */}
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
