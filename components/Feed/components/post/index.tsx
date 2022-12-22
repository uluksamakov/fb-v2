import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import type { NextPage } from "next";

type Timestamp = {
  nanoseconds: number;
  seconds: number;
  toDate?: any;
};

type Props = {
  name: string;
  email: string;
  message: string;
  image: string;
  postImage?: string;
  timestamp: Timestamp;
};

const Post: NextPage<Props> = ({
  name,
  email,
  image,
  message,
  timestamp,
  postImage,
}) => {
  const datePosted = timestamp?.toDate()?.toLocaleString();

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            width={40}
            height={40}
            alt="name"
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{name} </p>
            <p className="text-xs text-gray-400">{datePosted}</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-full md:h-full bg-white">
          {/* <Image
            src={postImage}
            alt={name}
            className="w-full object-cover"
            fill
          /> */}
          <img src={postImage} alt={name} className="w-full object-cover" />
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
