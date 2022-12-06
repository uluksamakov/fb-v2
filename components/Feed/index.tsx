import type { NextPage } from "next";
import Stories from "./components/Stories";

const Feed: NextPage = () => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* STORIES */}
        <Stories />
        {/* INPUT BOX */}
        {/* POST */}
      </div>
    </div>
  );
};

export default Feed;
