import type { NextPage } from "next";
import Image from "next/image";

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
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} alt={name} className="object-cover" fill />
        </div>
      )}
    </div>
  );
};

export default Post;
