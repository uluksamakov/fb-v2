import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { database, storage } from "../../../config/firebase";

const InputBox: NextPage = () => {
  const { data: session, status } = useSession();
  const [postMessage, setPostMessage] = useState<string>("");
  const [imageToPost, setImageToPost] = useState<any>(null);

  const filePicker = useRef<HTMLInputElement>(null);

  const postsCollection = collection(database, "posts");

  //sendpost to the firebase
  const sendPost = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!postMessage) return;

    const post = {
      message: postMessage,
      name: session?.user?.name || null,
      email: session?.user?.email || null,
      image: session?.user?.image || null,
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(postsCollection, { ...post });

    if (imageToPost) {
      const imageRef = ref(storage, `posts/${docRef.id}/image`);

      await uploadString(imageRef, imageToPost, "data_url").then(
        async (snapshot) => {
          const downloadUrl = await getDownloadURL(imageRef);
          await updateDoc(doc(database, "posts", docRef.id), {
            postImage: downloadUrl,
          });
        }
      );

      removeImage();
    }

    setPostMessage("");
  };

  //add image
  const addImageToPost = (e: any) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent?.target?.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x4 p-4 items-center">
        <Image
          className="rounded-full mr-3"
          src={session?.user?.image || "/"}
          width={40}
          height={40}
          alt={session?.user?.name || " Image "}
        />
        <form className="flex flex-1" onSubmit={sendPost}>
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session?.user?.name}?`}
            value={postMessage}
            onChange={(e) => setPostMessage(e.target.value)}
          />
          <button hidden type="submit">
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              src={imageToPost}
              alt="File upload"
              className="h-10 object-contain"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly items-center p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div onClick={() => filePicker.current?.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePicker}
            type="file"
            name="filePicker"
            hidden
            onChange={addImageToPost}
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
